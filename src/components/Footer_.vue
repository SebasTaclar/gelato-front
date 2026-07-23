<template>
  <!-- ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ -->
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/images/logo.png" alt="ODA Gelato" class="footer-logo-img">
        <!-- <img src="/public/assets/logos/logo-oda-gelato-white.svg" style="height:36px"> -->
        <p>{{ t('footer.descriptionFooter') }}</p>
        <div class="f-social">
          <!-- <a href="#" class="fsoc" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a> -->
          <a href="https://www.youtube.com/watch?v=xGjQ-bp3tCo" class="fsoc" target="_blank" rel="noopener"
            aria-label="YouTube"><svg viewBox="0 0 24 24">
              <rect x="1" y="5" width="22" height="14" rx="3" ry="3" fill="none" />
              <polygon points="10 9 16 12 10 15 10 9" fill="none" />
            </svg></a>
          <a href="https://wa.me/573118222340" class="fsoc" aria-label="WhatsApp"><svg viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>{{ t('footer.company') }}</h4>
        <ul>
          <li><a href="#about">{{ t('footer.about') }}</a></li>
          <li><a href="#portafolio">{{ t('footer.portfolio') }}</a></li>
          <li><a href="#valor">{{ t('footer.value') }}</a></li>
          <li><a href="#portafolio">{{ t('footer.storeLink') }}</a></li>
          <li><a href="#contacto">{{ t('footer.contactLink') }}</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>{{ t('footer.documents') }}</h4>
        <ul>
          <li><a href="/docs/politica-calidad.pdf" target="_blank">{{ t('footer.politicaCalidad') }}</a></li>
          <li><a href="/public/docs/politica-inocuidad.pdf" target="_blank">{{ t('footer.politicaInocuidad') }}</a></li>
          <li><a href="/public/docs/terminos-legales.pdf" target="_blank">{{ t('footer.terminosLegales') }}</a></li>
          <li><a href="/public/docs/politica-privacidad.pdf" target="_blank">{{ t('footer.politicaPrivacidad') }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>{{ t('footer.contacts') }}</h4>
        <ul>
          <li><a href="#"
              @click.prevent="openModal('Servicio al Cliente', EMAIL_RECIPIENTS.SERVICIO_CLIENTE, 'Nuevo mensaje - Servicio al Cliente')">{{
                t('footer.servicioCliente') }}</a></li>
          <li><a href="#"
              @click.prevent="openModal('Ser cliente / Aliado', EMAIL_RECIPIENTS.SER_CLIENTE_ALIADO, 'Nuevo mensaje - Ser cliente o Aliado')">{{
                t('footer.serCliente') }}</a></li>
          <li><a href="#" @click.prevent="openProveedorModal">{{ t('footer.serProveedor') }}</a></li>
          <li><a href="#" @click.prevent="openVacantesModal">{{ t('footer.trabajeNosotros') }}</a></li>
          <li><a href="#"
              @click.prevent="openModal('Contabilidad', EMAIL_RECIPIENTS.CONTABILIDAD, 'Nuevo mensaje - Contabilidad')">{{
                t('footer.contabilidad') }}</a></li>
        </ul>
      </div>
    </div>

    <!-- Modal de Contacto -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">&times;</button>
        <div class="modal-icon">
          <svg v-if="!isVacantes" viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 7l-10 7L2 7" />
          </svg>
          <svg v-else viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          </svg>
        </div>
        <h3 class="modal-title">{{ modalTitle }}</h3>

        <!-- Formulario de Vacantes -->
        <template v-if="isVacantes">
          <p class="modal-subtitle">¡Únete a nuestro equipo! Envíanos tu hoja de vida</p>
          <form @submit.prevent="submitVacantes" class="vacantes-form">
            <div class="form-row-2">
              <div class="modal-field">
                <label class="modal-label">Nombre completo *</label>
                <input class="modal-input" type="text" placeholder="Tu nombre completo" v-model="vacantesData.nombre"
                  required>
              </div>
              <div class="modal-field">
                <label class="modal-label">Correo electrónico *</label>
                <input class="modal-input" type="email" placeholder="correo@empresa.com" v-model="vacantesData.correo"
                  required>
              </div>
            </div>
            <div class="form-row-2">
              <div class="modal-field">
                <label class="modal-label">Teléfono *</label>
                <input class="modal-input" type="tel" placeholder="+57 300 000 0000" v-model="vacantesData.telefono"
                  required>
              </div>
              <div class="modal-field">
                <label class="modal-label">Link hoja de vida *</label>
                <input class="modal-input" type="url" placeholder="https://drive.google.com/..." v-model="vacantesData.hoja_vida" required>
              </div>
            </div>
            <div class="modal-field">
              <label class="modal-label">Breve presentación personal *</label>
              <textarea class="modal-textarea modal-textarea-sm"
                placeholder="Cuéntanos sobre tu experiencia, habilidades y por qué quieres unirte a nuestro equipo..."
                v-model="vacantesData.presentacion" required></textarea>
            </div>
            <button class="modal-submit" type="submit" :disabled="isSending">
              {{ isSending ? t('footerModal.enviando') : t('footerModal.sendApplication') }}
            </button>
          </form>
        </template>

        <!-- Formulario de Proveedor -->
        <template v-else-if="isProveedor">
          <p class="modal-subtitle">Cuéntanos sobre tu producto o servicio</p>
          <form @submit.prevent="submitProveedor" class="vacantes-form">
            <div class="form-row-2">
              <div class="modal-field">
                <label class="modal-label">Nombre de la empresa *</label>
                <input class="modal-input" type="text" placeholder="Nombre de tu empresa"
                  v-model="proveedorData.empresa" required>
              </div>
              <div class="modal-field">
                <label class="modal-label">Persona de contacto *</label>
                <input class="modal-input" type="text" placeholder="Tu nombre completo" v-model="proveedorData.contacto"
                  required>
              </div>
            </div>
            <div class="form-row-2">
              <div class="modal-field">
                <label class="modal-label">Correo electrónico *</label>
                <input class="modal-input" type="email" placeholder="correo@empresa.com" v-model="proveedorData.correo"
                  required>
              </div>
              <div class="modal-field">
                <label class="modal-label">Teléfono *</label>
                <input class="modal-input" type="tel" placeholder="+57 300 000 0000" v-model="proveedorData.telefono"
                  required>
              </div>
            </div>
            <div class="modal-field">
              <label class="modal-label">Página web</label>
              <input class="modal-input" type="text" placeholder="www.tuempresa.com" v-model="proveedorData.web">
            </div>
            <div class="modal-field">
              <label class="modal-label">Descripción del producto / servicio *</label>
              <textarea class="modal-textarea modal-textarea-sm"
                placeholder="Describe brevemente tu producto o servicio, presentaciones, capacidades, etc..."
                v-model="proveedorData.descripcion" required></textarea>
            </div>
            <button class="modal-submit" type="submit" :disabled="isSending">
              {{ isSending ? t('footerModal.enviando') : t('footerModal.sendInfo') }}
            </button>
          </form>
        </template>

        <!-- Formulario de Contacto General -->
        <template v-else>
          <p class="modal-subtitle">Envíanos tu mensaje y te contactaremos pronto</p>
          <form @submit.prevent="submitModal">
            <div class="modal-field">
              <label class="modal-label">Nombre *</label>
              <input class="modal-input" type="text" placeholder="Tu nombre completo" v-model="modalData.nombre"
                required>
            </div>
            <div class="modal-field">
              <label class="modal-label">Correo *</label>
              <input class="modal-input" type="email" placeholder="correo@empresa.com" v-model="modalData.correo"
                required>
            </div>
            <div class="modal-field">
              <label class="modal-label">Teléfono</label>
              <input class="modal-input" type="tel" placeholder="+57 300 000 0000" v-model="modalData.telefono">
            </div>
            <div class="modal-field">
              <label class="modal-label">Mensaje *</label>
              <textarea class="modal-textarea" placeholder="Escribe tu mensaje..." v-model="modalData.mensaje"
                required></textarea>
            </div>
            <p v-if="sendError" style="color: #e74c3c; font-size: .8rem; margin-top: 8px;">{{ sendError }}</p>
            <button class="modal-submit" type="submit" :disabled="isSending">
              {{ isSending ? 'Enviando...' : 'Enviar Mensaje →' }}
            </button>
          </form>
        </template>
      </div>
    </div>



    <div class="footer-bottom">
      <p>{{ t('footer.rights') }} <a href="https://www.dator.org" target="_blank" rel="noopener">DataOr</a></p>
      <!-- <div class="footer-legal-links">
      <a href="/public/docs/politica-privacidad.pdf">{{ t('footer.privacy') }}</a>
      <a href="/public/docs/terminos-legales.pdf">{{ t('footer.termsLink') }}</a>
      <a href="mailto:contador@odagelato.com.co">{{ t('footer.contabilidad') }}</a>
    </div> -->
    </div>
  </footer>

  <!-- Notificación de Éxito -->
  <div class="success-toast" v-if="showSuccess">
    <div class="success-icon">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <div class="success-content">
      <div class="success-title">{{ successTitle }}</div>
      <div class="success-desc">{{ successDesc }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEmail } from '@/composables/useEmail'
import { EMAIL_RECIPIENTS, extraField } from '@/services/email/emailService'

const { t } = useI18n()
const { isSending, sendError, sendEmail, clearError } = useEmail()

const showModal = ref(false)
const showSuccess = ref(false)
const successTitle = ref('')
const successDesc = ref('')
const modalTitle = ref('')
const modalRecipient = ref('')
const modalSubject = ref('')
const isVacantes = ref(false)
const isProveedor = ref(false)

const modalData = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  mensaje: ''
})

const proveedorData = reactive({
  empresa: '',
  contacto: '',
  correo: '',
  telefono: '',
  web: '',
  descripcion: ''
})

const openModal = (title: string, recipient: string, subject: string) => {
  modalTitle.value = title
  modalRecipient.value = recipient
  modalSubject.value = subject
  isVacantes.value = false
  isProveedor.value = false
  showModal.value = true
  clearError()
  document.body.style.overflow = 'hidden'
}

const openVacantesModal = () => {
  modalTitle.value = 'Trabaje con Nosotros'
  isVacantes.value = true
  isProveedor.value = false
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const openProveedorModal = () => {
  modalTitle.value = '¿Quieres ser proveedor?'
  isProveedor.value = true
  isVacantes.value = false
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
  modalData.nombre = ''
  modalData.correo = ''
  modalData.telefono = ''
  modalData.mensaje = ''
  vacantesData.nombre = ''
  vacantesData.correo = ''
  vacantesData.telefono = ''
  vacantesData.presentacion = ''
  vacantesData.hoja_vida = ''
  proveedorData.empresa = ''
  proveedorData.contacto = ''
  proveedorData.correo = ''
  proveedorData.telefono = ''
  proveedorData.web = ''
  proveedorData.descripcion = ''
}

const vacantesData = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  presentacion: '',
  hoja_vida: ''
})

const submitVacantes = async () => {
  const missing: string[] = []
  if (!vacantesData.nombre.trim()) missing.push('Nombre')
  if (!vacantesData.correo.trim()) missing.push('Correo')
  if (!vacantesData.telefono.trim()) missing.push('Teléfono')
  if (!vacantesData.presentacion.trim()) missing.push('Presentación')
  if (!vacantesData.hoja_vida.trim()) missing.push('Link hoja de vida')

  if (missing.length > 0) {
    alert(`Faltan los siguientes campos obligatorios:\n• ${missing.join('\n• ')}`)
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(vacantesData.correo)) {
    alert('El correo electrónico no es válido')
    return
  }

  if (vacantesData.hoja_vida && !vacantesData.hoja_vida.startsWith('http')) {
    alert('El link de la hoja de vida debe comenzar con http:// o https://')
    return
  }

  const success = await sendEmail({
    to_email: EMAIL_RECIPIENTS.VACANTES,
    form_type: 'Trabaja con Nosotros',
    subject: 'Nueva postulación - Trabaje con nosotros',
    from_name: vacantesData.nombre,
    from_email: vacantesData.correo,
    phone: vacantesData.telefono,
    message: 'Postulación para el equipo de ODA Gelato',
    extra_fields: [
      extraField('Presentación', vacantesData.presentacion),
      extraField('Hoja de vida', vacantesData.hoja_vida)
    ].join('')
  })

  if (success) {
    showSuccess.value = true
    successTitle.value = '¡Postulación enviada!'
    successDesc.value = 'Hemos recibido tu postulación. Te contactaremos pronto.'
    closeModal()
  }

  setTimeout(() => { showSuccess.value = false }, 4000)
}

const submitProveedor = async () => {
  const missing: string[] = []
  if (!proveedorData.empresa.trim()) missing.push('Nombre de la empresa')
  if (!proveedorData.contacto.trim()) missing.push('Persona de contacto')
  if (!proveedorData.correo.trim()) missing.push('Correo')
  if (!proveedorData.telefono.trim()) missing.push('Teléfono')
  if (!proveedorData.descripcion.trim()) missing.push('Descripción')

  if (missing.length > 0) {
    alert(`Faltan los siguientes campos obligatorios:\n• ${missing.join('\n• ')}`)
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(proveedorData.correo)) {
    alert('El correo electrónico no es válido')
    return
  }

  const success = await sendEmail({
    to_email: EMAIL_RECIPIENTS.PROVEEDOR,
    form_type: 'Proveedor',
    subject: 'Nueva solicitud de proveedor',
    from_name: proveedorData.contacto,
    from_email: proveedorData.correo,
    phone: proveedorData.telefono,
    message: 'Solicitud de proveedor',
    extra_fields: [
      extraField('Empresa', proveedorData.empresa),
      extraField('Web', proveedorData.web),
      extraField('Descripción', proveedorData.descripcion),
    ].join('')
  })

  if (success) {
    showSuccess.value = true
    successTitle.value = '¡Información enviada!'
    successDesc.value = 'Hemos recibido los datos de tu empresa. Te contactaremos pronto.'
    closeModal()
  }

  setTimeout(() => { showSuccess.value = false }, 4000)
}

const submitModal = async () => {
  const missing: string[] = []
  if (!modalData.nombre.trim()) missing.push('Nombre')
  if (!modalData.correo.trim()) missing.push('Correo')
  if (!modalData.mensaje.trim()) missing.push('Mensaje')

  if (missing.length > 0) {
    alert(`Faltan los siguientes campos obligatorios:\n• ${missing.join('\n• ')}`)
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(modalData.correo)) {
    alert('El correo electrónico no es válido')
    return
  }

  const formTypeBySubject: Record<string, string> = {
    'Nuevo mensaje - Servicio al Cliente': 'Servicio al Cliente',
    'Nuevo mensaje - Ser cliente o Aliado': 'Ser Cliente o Aliado',
    'Nuevo mensaje - Contabilidad': 'Contabilidad',
  }

  const success = await sendEmail({
    to_email: modalRecipient.value,
    form_type: formTypeBySubject[modalSubject.value] || 'Formulario Web',
    subject: modalSubject.value,
    from_name: modalData.nombre,
    from_email: modalData.correo,
    phone: modalData.telefono,
    message: modalData.mensaje
  })

  if (success) {
    showSuccess.value = true
    successTitle.value = '¡Mensaje enviado!'
    successDesc.value = 'Hemos recibido tu mensaje. Te contactaremos pronto.'
    closeModal()
  }

  setTimeout(() => { showSuccess.value = false }, 4000)
}
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
.footer {
  background: var(--secondary);
  padding: 72px 48px 32px
}

.footer-grid {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 52px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, .07);
}

.footer-logo-img {
  height: 68px;
  width: auto;
  display: block;
  background: var(--white);
  border-radius: var(--r-sm);
  padding: 4px 10px;
  object-fit: contain;
  margin-bottom: 12px;
}

.footer-brand p {
  font-size: .82rem;
  color: rgba(255, 255, 255, .38);
  line-height: 1.8;
  margin: 16px 0 24px;
  max-width: 260px;
}

.f-social {
  display: flex;
  gap: 8px
}

.fsoc {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .2s, border-color .2s;
  text-decoration: none;
}

.fsoc:hover {
  background: rgba(118, 180, 242, .2);
  border-color: rgba(118, 180, 242, .4)
}

.fsoc svg {
  width: 14px;
  height: 14px;
  stroke: rgba(255, 255, 255, .5);
  stroke-width: 1.8;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round
}

.footer-col h4 {
  font-family: var(--ff-display);
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.658);
  margin-bottom: 18px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px
}

.footer-col ul li a {
  font-size: .82rem;
  color: rgba(255, 255, 255, .35);
  transition: color .2s;
  text-decoration: none;
}

.footer-col ul li a:hover {
  color: var(--primary)
}

.footer-forms {
  max-width: 1280px;
  margin: 48px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.footer-form-card {
  background: rgba(255, 255, 255, .04);
  border: 1px solid rgba(255, 255, 255, .07);
  border-radius: var(--r-lg);
  padding: 24px;
  transition: border-color .25s, background .25s;
}

.footer-form-card:hover {
  background: rgba(255, 255, 255, .06);
  border-color: rgba(118, 180, 242, .2)
}

.ffc-title {
  font-family: var(--ff-display);
  font-size: .78rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 5px;
  letter-spacing: -.01em;
}

.ffc-desc {
  font-size: .72rem;
  color: rgba(255, 255, 255, .35);
  margin-bottom: 16px;
  line-height: 1.55
}

.ffc-input {
  width: 100%;
  padding: 9px 12px;
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: var(--r-sm);
  color: var(--white);
  font-family: var(--ff-body);
  font-size: .8rem;
  outline: none;
  margin-bottom: 8px;
  transition: border-color .2s, background .2s;
}

.ffc-input::placeholder {
  color: rgba(255, 255, 255, .25)
}

.ffc-input:focus {
  border-color: rgba(118, 180, 242, .4);
  background: rgba(255, 255, 255, .09)
}

.ffc-btn {
  width: 100%;
  padding: 9px;
  border-radius: var(--r-sm);
  background: rgba(118, 180, 242, .15);
  border: 1px solid rgba(118, 180, 242, .25);
  color: var(--primary);
  font-family: var(--ff-display);
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: background .2s, border-color .2s;
}

.ffc-btn:hover {
  background: rgba(118, 180, 242, .25);
  border-color: rgba(118, 180, 242, .5)
}

.footer-bottom {
  max-width: 880px;
  margin: 28px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-bottom p {
  font-size: .72rem;
  color: rgba(255, 255, 255, .2)
}

.footer-bottom p a {
  color: rgba(255, 255, 255, .35);
  text-decoration: none;
  transition: color .2s
}

.footer-bottom p a:hover {
  color: var(--primary)
}

.footer-legal-links {
  display: flex;
  gap: 18px
}

.footer-legal-links a {
  font-size: .7rem;
  color: rgba(255, 255, 255, .2);
  transition: color .2s;
  text-decoration: none
}

.footer-legal-links a:hover {
  color: var(--primary)
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: fadeIn .2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
}

.modal-content {
  background: var(--white);
  border-radius: var(--r-xl);
  padding: 40px;
  max-width: 560px;
  width: 92%;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, .3);
  animation: slideUp .3s ease;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--gray);
  cursor: pointer;
  transition: color .2s;
}

.modal-close:hover {
  color: var(--secondary)
}

.modal-icon {
  width: 56px;
  height: 56px;
  background: var(--primary-wash);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  border: 1px solid rgba(118, 180, 242, .2);
}

.modal-icon svg {
  width: 24px;
  height: 24px;
  stroke: var(--primary-dark);
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round
}

.modal-title {
  font-family: var(--ff-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--secondary);
  text-align: center;
  margin-bottom: 4px;
  letter-spacing: -.02em;
}

.modal-subtitle {
  font-size: .82rem;
  color: var(--gray);
  text-align: center;
  margin-bottom: 24px;
}

.modal-field {
  margin-bottom: 14px
}

.modal-label {
  display: block;
  font-size: .68rem;
  font-weight: 600;
  color: var(--secondary);
  letter-spacing: .04em;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.modal-input,
.modal-textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid var(--gray-light);
  border-radius: var(--r);
  font-family: var(--ff-body);
  font-size: .85rem;
  color: var(--secondary);
  background: var(--gray-bg);
  outline: none;
  transition: border-color .2s, background .2s, box-shadow .2s;
  box-sizing: border-box;
}

.modal-input::placeholder,
.modal-textarea::placeholder {
  color: var(--gray)
}

.modal-input:focus,
.modal-textarea:focus {
  border-color: var(--primary);
  background: var(--white);
  box-shadow: 0 0 0 4px rgba(118, 180, 242, .12);
}

.modal-textarea {
  resize: vertical;
  min-height: 90px
}

.modal-textarea-sm {
  min-height: 70px
}

/* Form Row 2 columns */
.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* File Upload */
.file-upload {
  position: relative
}

.file-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.file-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  background: var(--gray-bg);
  border: 1.5px dashed var(--gray-light);
  border-radius: var(--r);
  font-size: .82rem;
  color: var(--gray);
  cursor: pointer;
  transition: border-color .2s, background .2s;
}

.file-label:hover {
  border-color: var(--primary);
  background: rgba(118, 180, 242, .05);
}

.file-label svg {
  color: var(--gray);
  transition: color .2s
}

.file-label:hover svg {
  color: var(--primary)
}

.has-file .file-label {
  border-color: var(--primary);
  border-style: solid;
  background: rgba(118, 180, 242, .05);
}

.has-file .file-label svg {
  color: var(--primary)
}

.modal-submit {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  background: var(--accent);
  color: var(--white);
  border: none;
  border-radius: 100px;
  font-family: var(--ff-display);
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform .3s var(--ease-out), box-shadow .3s;
  box-shadow: 0 8px 24px rgba(208, 79, 109, .3);
}

.modal-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(208, 79, 109, .45)
}

/* Vacantes */
.vacantes-info {
  margin-bottom: 20px;
  padding: 16px;
  background: var(--gray-bg);
  border-radius: var(--r);
  border: 1px solid var(--gray-light);
}

.vacante-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-light);
}

.vacante-item:last-child {
  border-bottom: none
}

.vacante-icon {
  font-size: 1.2rem
}

.vacante-name {
  font-size: .82rem;
  font-weight: 600;
  color: var(--secondary)
}

.vacante-desc {
  font-size: .72rem;
  color: var(--gray)
}

.modal-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

@media (max-width: 768px) {
  .footer {
    padding: 48px 24px 24px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-logo-img {
    margin: 0 auto 12px;
  }

  .footer-brand p {
    max-width: 100%;
    margin: 8px 0 20px;
  }

  .f-social {
    justify-content: center;
  }

  .footer-col h4 {
    margin-bottom: 12px;
  }

  .footer-forms {
    grid-template-columns: 1fr;
    margin-top: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }

  .footer-legal-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}

/* Success Toast */
.success-toast {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 24px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  z-index: 10000;
  animation: toastIn .4s ease;
  border-left: 4px solid #22c55e;
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(.95)
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1)
  }
}

.success-icon {
  width: 40px;
  height: 40px;
  background: #dcfce7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.success-icon svg {
  color: #22c55e
}

.success-title {
  font-family: var(--ff-display);
  font-size: .88rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 2px;
}

.success-desc {
  font-size: .78rem;
  color: var(--gray);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .success-toast {
    bottom: 16px;
    right: 16px;
    left: 16px;
  }

  .form-row-2 {
    grid-template-columns: 1fr;
  }

  .modal-content {
    max-width: 100%;
    width: 95%;
    padding: 24px;
    margin: 16px;
  }
}
</style>
