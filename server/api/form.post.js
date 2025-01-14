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

    // let mailApiKey = String(config.mailgunApiKey)
    // let mailSubject = String('BOSS Web Inquiry: '+clientRequest.jsonForm.service)
    // let mailDomain = String(config.mailgunDomain)
    // let mailFrom = String(config.mailgunSender)
    // let mailTo = String(config.mailgunRecipient)
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
        key: config.mailgunApiKey
    })

    try {
        const mailgunApiUrl = `https://api.mailgun.net/v3/${config.mailgunDomain}/messages`;

        const response = await fetch(mailgunApiUrl, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${Buffer.from(`api:${config.mailgunApiKey}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                from: config.mailgunSender,
                to: config.mailgunRecipient,
                subject: `BOSS Web Inquiry: ${clientRequest.jsonForm.service}`,
                text: mailText,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Mailgun error response:', errorData);
            return { success: false, error: errorData || 'Unknown error' };
        }

        const result = await response.json();
        console.log('Mailgun success response:', result);
        return { success: true, message: 'Email sent successfully', result };
    } catch (err) {
        console.error('Error sending email via Mailgun:', err);
        return { success: false, error: 'Failed to send email', details: err.message || err };
    }
})