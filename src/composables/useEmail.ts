import { ref } from 'vue'
import { emailService, type EmailData } from '@/services/email/emailService'

export function useEmail() {
  const isSending = ref(false)
  const sendError = ref('')

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    isSending.value = true
    sendError.value = ''

    const result = await emailService.send(data)

    if (!result.success) {
      sendError.value = result.error || 'Error al enviar el mensaje.'
    }

    isSending.value = false
    return result.success
  }

  const clearError = () => {
    sendError.value = ''
  }

  return {
    isSending,
    sendError,
    sendEmail,
    clearError
  }
}
