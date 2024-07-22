// require('dotenv').config();
export interface ConfigTypo {
    APP_TRACKX_SERVICE_URL: string,
    APP_IAM_SERVER_URL: string,
    APP_IAM_CLIENT_ID: string,
    APP_WHATSAPP_NOTIFICATION_URL: string,
    APP_WHATSAPP_BROADCAST_URL: string,
    APP_REQ_RETRY_MAX_ATTEMPTS: number,
    APP_REQ_RETRY_STATUS_CODES: string,
    APP_REQ_RETRY_DELAY: number,
    APP_RETRY_CODES: string,
}
export const configVariables: ConfigTypo = {
    APP_TRACKX_SERVICE_URL: (typeof window !== 'undefined') ? window[`_env_`]?.['APP_TRACKX_SERVICE_URL'] : process.env['APP_TRACKX_SERVICE_URL'] || 'http://143.198.233.137:5004',
    APP_IAM_SERVER_URL: (typeof window !== 'undefined') ? window[`_env_`]?.['APP_IAM_SERVER_URL'] : process.env['APP_IAM_SERVER_URL'] || 'http://localhost:8005',
    APP_IAM_CLIENT_ID: (typeof window !== 'undefined') ? window[`_env_`]?.['APP_IAM_CLIENT_ID'] : process.env['APP_IAM_CLIENT_ID'] || 'http://localhost:8005',

    APP_WHATSAPP_NOTIFICATION_URL: (typeof window !== 'undefined') ? window[`_env_`]?.['APP_WHATSAPP_NOTIFICATION_URL'] : process.env[`APP_WHATSAPP_NOTIFICATION_URL`],
    APP_WHATSAPP_BROADCAST_URL: (typeof window !== 'undefined') ? window[`_env_`]?.['APP_WHATSAPP_BROADCAST_URL'] : process.env[`APP_WHATSAPP_BROADCAST_URL`],
    APP_REQ_RETRY_MAX_ATTEMPTS: (typeof window !== 'undefined') ? window[`_env_`]?.['APP_REQ_RETRY_MAX_ATTEMPTS'] : process.env[`APP_REQ_RETRY_MAX_ATTEMPTS`] || 3,
    APP_REQ_RETRY_STATUS_CODES: (typeof window !== 'undefined') ? window[`_env_`]?.[`APP_REQ_RETRY_STATUS_CODES`] : process.env[`APP_REQ_RETRY_STATUS_CODES`] || '429,502',
    APP_REQ_RETRY_DELAY: (typeof window !== 'undefined') ? window[`_env_`]?.[`APP_REQ_RETRY_DELAY`] : process.env[`APP_REQ_RETRY_DELAY`] || 2000,
    APP_RETRY_CODES: (typeof window !== 'undefined') ? window[`_env_`]?.[`APP_RETRY_CODES`] : process.env[`APP_RETRY_CODES`] || 'ECONNABORTED',
}

export const whatsAppConfig = {
    PHONE_NUMBER_ID: process.env['PHONE_NUMBER_ID'],
    BEARER_TOKEN: process.env['BEARER_TOKEN'],
    SCHEMAX_WHATSAPP_URL: process.env['SCHEMAX_WHATSAPP_URL'],
    AUTHORIZATION: process.env['AUTHORIZATION']
}