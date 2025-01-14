import nodemailer from 'nodemailer'
import * as changeCase from 'change-case'

export default defineEventHandler(async (event)=>{
    const clientRequest = await readBody(event)
    const config = useRuntimeConfig()
    let outcome
    let response

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: config.emailUser,
            pass: config.emailPass
        }
    })

    if (clientRequest.turnstile){
        const cfData = new FormData()
        cfData.append('response', clientRequest.turnstile)
        cfData.append('secret', config.turnstileSecretKey)
    
        const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            body: cfData,
            method: 'POST',
        })
        outcome = await result.json()
    }

    if (!outcome || outcome && !outcome.success) return { success: false }

    let text = ''
    let value
    let mailOptions = {
        from: 'automated@ondre.org',
        to: 'hello@ondre.org',
        subject: '',
        text: {}
    }

    for (let key in clientRequest.jsonForm) {
        if (clientRequest.jsonForm.hasOwnProperty(key)) {
            value = clientRequest.jsonForm[key];
            text += `${changeCase.capitalCase(key)}: ${value}\n` 
        }
    }

    mailOptions.text = text
    mailOptions.subject = `New Website Form: ${clientRequest.jsonForm.service}`

    transporter.sendMail(mailOptions, function(error, info){
        if (error) return { success: false }
    })

    return { success: true }
})