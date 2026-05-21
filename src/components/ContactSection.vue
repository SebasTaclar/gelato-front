<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <div class="contact-wrapper">
        <!-- Formulario Izquierda -->
        <div class="form-column">
          <div class="form-card">
            <h2 class="form-title">Ponte en contacto con<br>nosotros</h2>

            <form @submit.prevent="submitForm" class="contact-form">
              <!-- Nombre Completo -->
              <div class="form-group">
                <label for="name" class="form-label">Nombre completo</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  placeholder="Por ejemplo, John Doe"
                  class="form-input"
                  required
                >
              </div>

              <!-- Email y Teléfono -->
              <div class="form-row">
                <div class="form-group">
                  <label for="email" class="form-label">Correo electrónico</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="Por ejemplo, john.doe@exam"
                    class="form-input"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">Teléfono</label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    placeholder="Por ejemplo, +1-912-345-678"
                    class="form-input"
                    required
                  >
                </div>
              </div>

              <!-- Mensaje -->
              <div class="form-group">
                <label for="message" class="form-label">Mensaje</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  placeholder="Empieza a escribir aquí..."
                  class="form-textarea"
                  rows="5"
                  required
                />
              </div>

              <!-- Botón Enviar -->
              <button type="submit" class="submit-button">
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>

        <!-- Información Derecha -->
        <div class="info-column">
          <div class="info-content">
            <h3 class="info-title">Déjanos un mensaje y<br>contacta con nosotros</h3>

            <p class="info-description">
              ¿Tienes alguna pregunta o estás listo para comenzar? <br>Déjanos un mensaje; ¡nos encantaría ponernos en <br>contacto contigo!
            </p>

            <!-- Rating -->
            <div class="rating-section">
              <div class="stars">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="star filled"
                >★</span>
              </div>
              <p class="rating-text">4.9 de 5 estrellas según 47 reseñas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'ContactSection' })

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = async () => {
  try {
    // Aquí puedes agregar lógica para enviar el formulario
    console.log('Formulario enviado:', formData.value)

    // Resetear el formulario
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }

    // Mostrar mensaje de éxito (opcional)
    alert('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.')
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
  }
}
</script>

<style scoped>
.contact-section {
  padding: 80px clamp(20px, 5vw, 60px);
  background: #f4f4f4;
}

.contact-container {
  max-width: 1400px;
  margin: 0 auto;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: stretch;
}

/* === FORMULARIO (COLUMNA IZQUIERDA) === */
.form-column {
  display: flex;
  align-items: stretch;
}

.form-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 35px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-title {
  font-size: 24px;
  font-weight: 400;
  color: #282828;
  margin: 0 0 30px 0;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  text-transform: capitalize;
}

.form-input,
.form-textarea {
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  transition: all 0.3s ease;
  color: #1f2937;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #9ca3af;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #be009f;
  box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.1);
}

.form-textarea {
  resize: vertical;
  font-size: 14px;
  line-height: 1.5;
  color: #374151;
}

.submit-button {
  padding: 14px 30px;
  background: #be009f;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  text-transform: uppercase;
}

.submit-button:hover {
  transform: translateY(-2px);
  background: #be009f;
}

.submit-button:active {
  transform: translateY(0);
}

/* === INFORMACIÓN (COLUMNA DERECHA) === */
.info-column {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-title {
  font-size: 24px;
  font-weight: 400;
  color: #282828;
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.info-description {
  font-size: 16px;
  color: #666666;
  line-height: 1.7;
  margin: 0;
}

.rating-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stars {
  display: flex;
  gap: 4px;
}

.star {
  font-size: 24px;
  color: #fbbf24;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.star.filled {
  color: #fbbf24;
}

.rating-text {
  font-size: 22px;
  font-weight: 600;
  color: #282828;
  margin: 0;
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .info-column {
    padding: 0;
  }

  .info-title {
    font-size: 28px;
  }

  .form-title {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px clamp(20px, 5vw, 40px);
  }

  .form-card {
    padding: 30px 25px;
  }

  .form-title {
    font-size: 22px;
    margin-bottom: 25px;
  }

  .info-title {
    font-size: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-wrapper {
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 40px clamp(15px, 5vw, 30px);
  }

  .form-card {
    padding: 24px 18px;
  }

  .form-title {
    font-size: 20px;
  }

  .info-title {
    font-size: 20px;
  }

  .info-description {
    font-size: 14px;
  }

  .submit-button {
    padding: 12px 25px;
    font-size: 12px;
  }
}
</style>

