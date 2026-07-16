import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_l26vgs7'
const EMAILJS_PUBLIC_KEY = 'j4ebWeuFheSfOgsIM'
const EMAILJS_TEMPLATE_ID = 'template_6o1rbpj'

// ══════════════════════════════════════════
// EMAILS DE DESTINO
// ══════════════════════════════════════════

const EMAIL_TEST = 'dataor52@gmail.com'

export const EMAIL_RECIPIENTS = {
  SERVICIO_CLIENTE: "servicioalcliente@odagelato.com.co",               // real: servicioalcliente@odagelato.com.co
  SER_CLIENTE_ALIADO: "gerencia.comercial@odagelato.com.co",             // real: gerencia.comercial@odagelato.com.co
  CONTABILIDAD: "contador@odagelato.com.co",                   // real: contador@odagelato.com.co
  PROVEEDOR: "compras@odagelato.com.co",                      // real: compras@odagelato.com.co
  VACANTES: "coordinador.gestionhumana@odagelato.com.co",                       // real: coordinador.gestionhumana@odagelato.com.co
  COTIZACION: "servicioalcliente@odagelato.com.co",                     // real: servicioalcliente@odagelato.com.co
} as const

// ══════════════════════════════════════════
// INTERFACE GENÉRICO
// ══════════════════════════════════════════

export interface EmailData {
  to_email: string
  subject: string
  form_type: string
  from_name: string
  from_email: string
  phone: string
  message: string
  extra_fields?: string
}

// ══════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════

export const extraField = (label: string, value: string): string => {
  if (!value) return ''
  return `<div style="color: #cccccc; font-size: 13px;">${label}: ${value}</div>`
}

// ══════════════════════════════════════════
// RESPUESTA
// ══════════════════════════════════════════

interface SendEmailResponse {
  success: boolean
  error?: string
}

// ══════════════════════════════════════════
// SERVICIO
// ══════════════════════════════════════════

export const emailService = {
  async send(data: EmailData): Promise<SendEmailResponse> {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        data as unknown as Record<string, unknown>,
        EMAILJS_PUBLIC_KEY
      )
      return { success: true }
    } catch (error) {
      console.error('EmailJS error:', error)
      return { success: false, error: 'Error al enviar el mensaje.' }
    }
  },
}
