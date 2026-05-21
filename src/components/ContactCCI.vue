<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Hablemos sobre tu necesidad</h2>
          <p>¿Necesitas soluciones lingüísticas para tu organización? Nuestro equipo está listo para ayudarte a conectar con el mundo.</p>

          <div class="contact-details">
            <div class="detail-item">
              <div class="detail-icon">📧</div>
              <div class="detail-text">
                <h4>Correo Electrónico</h4>
                <p>contacto@ccigroup.com</p>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">📱</div>
              <div class="detail-text">
                <h4>Teléfono</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">🌐</div>
              <div class="detail-text">
                <h4>Disponibilidad</h4>
                <p>24/7 - Servicio continuo</p>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">📍</div>
              <div class="detail-text">
                <h4>Ubicación</h4>
                <p>Disponible globalmente</p>
              </div>
            </div>
          </div>

          <div class="contact-social">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <input
              v-model="formData.name"
              type="text"
              placeholder="Tu Nombre"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <input
              v-model="formData.email"
              type="email"
              placeholder="Tu Correo Electrónico"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <input
              v-model="formData.company"
              type="text"
              placeholder="Empresa"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <select v-model="formData.service" class="form-input" required>
              <option value="">Selecciona un Servicio</option>
              <option value="interpretacion">Interpretación</option>
              <option value="traduccion">Traducción</option>
              <option value="notarizacion">Notarización</option>
              <option value="staffing">Staffing Lingüístico</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div class="form-group">
            <textarea
              v-model="formData.message"
              placeholder="Tu Mensaje"
              class="form-textarea"
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" class="form-button">
            Enviar Mensaje
          </button>

          <p v-if="submitMessage" class="submit-message" :class="submitStatus">
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const formData = ref<FormData>({
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
});

const submitMessage = ref('');
const submitStatus = ref('');

const submitForm = async () => {
  try {
    // Aquí iría la lógica de envío del formulario
    // Por ahora, mostraremos un mensaje de éxito
    console.log('Formulario enviado:', formData.value);

    submitMessage.value = '¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.';
    submitStatus.value = 'success';

    // Limpiar el formulario
    setTimeout(() => {
      formData.value = {
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      };
      submitMessage.value = '';
    }, 3000);
  } catch {
    submitMessage.value = 'Error al enviar el formulario. Intenta de nuevo.';
    submitStatus.value = 'error';
  }
};
</script>

<style scoped>
.contact-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1a1a4d 100%);
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background:
    radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%);
  pointer-events: none;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.contact-info h2 {
  font-size: 48px;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  line-height: 1.2;
}

.contact-info > p {
  font-size: 18px;
  color: #c7d2fe;
  margin-bottom: 40px;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}

.detail-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.detail-icon {
  font-size: 32px;
  min-width: 40px;
}

.detail-text h4 {
  font-size: 16px;
  color: #ffffff;
  margin: 0 0 4px 0;
  font-weight: 700;
}

.detail-text p {
  font-size: 15px;
  color: #b3bef5;
  margin: 0;
}

.contact-social {
  display: flex;
  gap: 16px;
}

.social-link {
  color: #ec4899;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 16px;
  border: 1px solid rgba(236, 72, 153, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(236, 72, 153, 0.1);
  border-color: #ec4899;
  transform: translateY(-2px);
}

.contact-form {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.form-group {
  margin-bottom: 24px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  color: #ffffff;
  font-family: inherit;
  font-size: 15px;
  transition: all 0.3s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(236, 72, 153, 0.5);
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.2);
}

.form-textarea {
  resize: vertical;
}

.form-button {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 20px 40px rgba(236, 72, 153, 0.3);
}

.form-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 50px rgba(236, 72, 153, 0.4);
}

.form-button:active {
  transform: translateY(0);
}

.submit-message {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.2);
  color: #86efac;
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 20px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info h2 {
    font-size: 36px;
  }

  .contact-form {
    padding: 30px 20px;
  }
}
</style>
