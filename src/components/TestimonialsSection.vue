<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="testimonials-layout">
        <div class="left-column">
          <h2 class="section-title">Testimonios<span class="rating-number">:</span> Nuestra experiencia es su ventaja</h2>
          <!-- <p class="section-subtitle">¡Escuche lo que dicen nuestros increíbles clientes!</p> -->

          <div class="testimonial-image-wrapper">
            <img
              src="https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2026/03/pexels-mikhail-nilov-6592395-1024x682.webp"
              alt="Equipo de trabajo colaborando en una mesa"
              class="testimonial-image"
            />
          </div>
        </div>

        <div class="right-column">
          <article class="testimonial-panel">
            <div class="quote-icon">“</div>

            <p class="testimonial-text">
              {{ activeTestimonial.quote }}
            </p>

            <div class="testimonial-footer">
              <div class="testimonial-meta">
                <p class="testimonial-program">{{ activeTestimonial.program }}</p>
                <p class="testimonial-source">{{ activeTestimonial.source }}</p>
              </div>

              <div class="testimonial-nav">
                <button type="button" class="nav-arrow" @click="goPrev" aria-label="Testimonio anterior">
                  <i class="fas fa-arrow-left"></i>
                </button>
                <button type="button" class="nav-arrow" @click="goNext" aria-label="Siguiente testimonio">
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({ name: 'TestimonialsSection' })

interface Testimonial {
  quote: string
  program: string
  source: string
}

const testimonials = ref<Testimonial[]>([
  {
    quote:
      '“¡No tengo palabras para expresar lo satisfecho que estoy con el servicio excepcional de Webtec! Desde la consulta initial hasta las actualizaciones constantes, esta empresa ha superado mis expectativas en todo momento”.',
    program: 'John Doe\nDirector de Marketing',
    source: ''
  },
  {
    quote:
      '“Con Webtec, todo ha sido excelente desde el primer momento. El conocimiento de Travis para construir nuestro sitio web es inigualable; la paciencia que tuvieron con todo nuestro equipo fue increíble y el producto final es mejor de lo que podríamos haber pedido".',
    program: 'Herman Miller\nDirector de Operaciones [COO]',
    source: ''
  },
  {
    quote:
      '“Recomiendo totalmente trabajar con Sonny y Webtec. El personal es muy atento y la gerencia se involucra al máximo en el apoyo a los clientes. Sus programadores web siempre estuvieron al tanto de todo y fueron muy flexibles con nuestras solicitudes y personalizaciones”.',
    program: 'Isabel Gabalis\nDirectora Ejecutiva [CEO]',
    source: ''
  },
  {
    quote:
      '“Estamos encantados con nuestro nuevo sitio creado por Webtec. Edward tuvo una gran visión para llevar nuestra presencia web al siguiente nivel y Sam logró ejecutarlo todo. Trabajar con ellos fue un placer. ¡Recomiendo mucho a este equipo! ¡Gracias!”.',
    program: 'Ashley Jones\nDirectora Ejecutiva [CEO]',
    source: ''
  }
])

const currentIndex = ref(0)

const activeTestimonial = computed(() => testimonials.value[currentIndex.value])

const goNext = () => {
  if (!testimonials.value.length) return
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const goPrev = () => {
  if (!testimonials.value.length) return
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>

<style scoped>
.testimonials-section {
  padding: 70px clamp(20px, 4vw, 60px);
  /* Mismo fondo oscuro que la sección de cifras fiables */
  background: #f5f5f5
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.testimonials-layout {
  display: flex;
  align-items: center;
  gap: 32px;
}

.rating-number {
  font-weight: 700;
}

.left-column {
  flex: 1;
}

.right-column {
  flex: 0.9;
  display: flex;
  align-items: center;
}

.section-title {
  font-size: clamp(32px, 6vw, 32px);
  font-weight: 400;
  color: #282828;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 15px;
  color: #282828;
  margin: 0 0 28px 0;
}

.testimonial-image-wrapper {
  margin-top: 12px;
  max-width: 420px;
  border-radius: 28px;
  overflow: hidden;
}

.testimonial-image {
  width: 100%;
  max-height: 260px;
  display: block;
  object-fit: cover;
}

.testimonial-panel {
  background: #ffffff;
  border-radius: 28px;
  padding: 36px 32px 28px;
  box-shadow: 0 22px 70px rgba(15, 23, 42, 0.22);
  max-width: 500px;
  margin-left: auto;
}

.quote-icon {
  font-size: 170px;
  color: #be009f;
  line-height: 0.4;
  margin-bottom: -20px;
  margin-top: 30px;
}

.testimonial-text {
  font-size: 16px;
  line-height: 1.9;
  color: #111827;
  margin: 0 0 20px 0;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.testimonial-program {
  font-size: 13px;
  font-weight: 400;
  color: #282828;
  margin: 0 0 4px 0;
  font-family: var(--font-primary);
  white-space: pre-line;
  letter-spacing: 1px;
}

.testimonial-source {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.testimonial-nav {
  display: flex;
  gap: 12px;
}

.nav-arrow {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  color: #ffffff;
  cursor: pointer;

  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-arrow:hover {
  background: #c81dd8;
  transform: translateY(-1px);

}

@media (max-width: 992px) {
  .testimonials-layout {
    flex-direction: column;
  }

  .right-column {
    justify-content: center;
  }

  .testimonial-panel {
    margin-left: 0;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 60px clamp(16px, 4vw, 40px);
  }

  .testimonial-panel {
    padding: 32px 24px 28px;
  }
}
</style>
