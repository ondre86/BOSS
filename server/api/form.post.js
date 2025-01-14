import * as changeCase from 'change-case'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

export default defineEventHandler(async (event)=>{
    const clientRequest = await readBody(event)
    const config = useRuntimeConfig()
    let outcome

    if (clientRequest.turnstile){
        const cfData = new FormData()
        cfData.append('response', clientRequest.turnstile)
        cfData.append('secret', config.turnstileSecretKey)
    
        const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: cfData,
        })
        outcome = await result.json()
    }

    if (!outcome || outcome && !outcome.success) return { success: false }

    let text = ''
    let value
    for (let key in clientRequest.jsonForm) {
        if (clientRequest.jsonForm.hasOwnProperty(key)) {
            value = clientRequest.jsonForm[key]
            text += `${changeCase.capitalCase(key)}: ${value}\n` 
        }
    }

    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({
        username: 'api',
        key: config.mailgunApiKey
    })

    try {
        const msg = await mg.messages.create(config.mailgunDomain, {
            from: config.mailgunSender,
            to: [config.mailgunRecipient],
            subject: `BOSS Web Inquiry: ${clientRequest.jsonForm.service}`,
            text,
        })
        return { success: true }
    } 
    catch (err) {
        return { success: false }
    }
})