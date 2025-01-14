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

    let txt = ''
    let value
    for (let key in clientRequest.jsonForm) {
        if (clientRequest.jsonForm.hasOwnProperty(key)) {
            value = clientRequest.jsonForm[key]
            txt += `${changeCase.capitalCase(key)}: ${String(value)}\n` 
        }
    }

    console.log({
        cfResult: outcome,
        mailBody: txt,
        mailKey: config.mailgunApiKey,
        mailDomain: config.mailgunDomain,
        mailSender: config.mailgunSender,
        mailRecipient: config.mailgunRecipient,
        mailSubject: clientRequest.jsonForm.service
    })
    console.log({
        cfResultType: typeof outcome,
        mailBodyType: typeof txt,
        mailKeyType: typeof config.mailgunApiKey,
        mailDomainType: typeof config.mailgunDomain,
        mailSenderType: typeof config.mailgunSender,
        mailRecipientType: typeof config.mailgunRecipient,
        mailSubjectType: typeof clientRequest.jsonForm.service
    })

    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({
        username: 'api',
        key: config.mailgunApiKey
    })

    let subject = `BOSS Web Inquiry: ${clientRequest.jsonForm.service}`

    try {
        const msg = await mg.messages.create(config.mailgunDomain, {
            from: config.mailgunSender,
            to: config.mailgunRecipient,
            subject: subject,
            text: String(txt),
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
            details: errorDetails,
        }
    }
})