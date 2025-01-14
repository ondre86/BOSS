import * as changeCase from 'change-case'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

export default defineEventHandler(async (event)=>{
    const clientRequest = await readBody(event)
    const config = useRuntimeConfig()
    let outcome

    if (clientRequest.turnstile){
        const cfData = {
            response: clientRequest.turnstile,
            secret: config.turnstileSecretKey
        }
    
        const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(cfData),
        })

        outcome = await result.json()
    }

    if (!outcome || outcome && !outcome.success) {
        return { 
            success: false,
            cfResult: outcome
        }
    }

    let mailApiKey = String(config.mailgunApiKey)
    let mailSubject = String('BOSS Web Inquiry: '+clientRequest.jsonForm.service)
    let mailDomain = String(config.mailgunDomain)
    let mailFrom = String(config.mailgunSender)
    let mailTo = String(config.mailgunRecipient)
    let mailText = ''
    let value
    for (let key in clientRequest.jsonForm) {
        if (clientRequest.jsonForm.hasOwnProperty(key)) {
            value = clientRequest.jsonForm[key]
            mailText += `${changeCase.capitalCase(key)}: ${String(value)}\n` 
        }
    }
    mailText = String(mailText)

    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({
        username: 'api',
        key: mailApiKey
    })

    try {
        const msg = await mg.messages.create(mailDomain, {
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailText,
        })
        return { success: true, message: 'Email sent successfully', data: msg }
    } catch (error) {
        const errorDetails = {
            status: error.response?.status || 'Unknown',
            message: error.message || 'Unknown error',
            details: error.response?.body || null,
        }

        console.error('Mailgun error:', errorDetails)

        return {
            success: false,
            error: 'Failed to send email',
            err: error,
            details: errorDetails,
        }
    }
})