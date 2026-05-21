<template>
  <section class="services-section">
    <div class="overlay"></div>
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Servicios esenciales que impulsan <br>la comunicación global</h2>
        <p class="section-subtitle">
          A través de nuestros intérpretes certificados, expertos en localización y notarios profesionales, diseñamos servicios para satisfacer sus necesidades lingüísticas urgentes y de alto impacto, bajo sus términos y en su idioma.
        </p>
      </div>

      <div class="services-carousel">
        <button class="carousel-arrow left" type="button" @click="goPrev">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="services-viewport">
          <div class="services-track" :style="trackStyle">
            <article class="service-card" v-for="(service, index) in services" :key="index">
              <div class="service-image-wrapper">
                <img :src="service.image" :alt="service.title" class="service-image" />
              </div>
              <div class="service-content">
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
                <ul class="service-features">
                  <li v-for="(feature, fIndex) in service.features" :key="fIndex">
                    <i class="fas fa-check-circle"></i>
                    {{ feature }}
                  </li>
                </ul>
                <button class="service-cta" type="button" @click="scrollToContact">
                  MÁS INFORMACIÓN <span class="arrow">→</span>
                </button>
              </div>
            </article>
          </div>
        </div>

        <button class="carousel-arrow right" type="button" @click="goNext">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineOptions({ name: 'ServicesSection' })

interface Service {
  icon: string
  title: string
  description: string
  image: string
  features: string[]
}

const services = ref<Service[]>([
  {
    icon: 'fas fa-headset',
    title: 'Servicios de interpretación',
    description: 'Servicios de interpretación sin barreras, rápidos, flexibles y profesionales, disponibles de manera presencial, remota (video) o telefónica. Servicios garantizados 24/7 y en más de 350 idiomas.',
    image: 'https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2026/03/66a50b29ea3a0bbf1698715c_Solutions_InPersonInterpreting.jpg',
    features: []
  },
  {
    icon: 'fas fa-file-alt',
    title: 'Servicios de\ntraducción',
    description: 'Precisión en todo tipo de documentos, industrias y plataformas. Traducciones certificadas, técnicas y creativas, impulsadas por lingüistas expertos y procesos optimizados con IA.',
    image:
      'https://globus.com.py/blog/wp-content/uploads/2022/12/servicio-de-traduccion-o-interpretacion.png',
    features: []},
  {
    icon: 'fas fa-users',
    title: 'Soluciones de gestión de talento global',
    description: ' Selección de personal multilingüe y multicultural para todas las industrias. Contratación flexible (presencial o remota) de profesionales con fluidez cultural: desde intérpretes hasta personal administrativo, tecnológico y más.',
    image:
      'https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2026/03/66a50b2985f716cda4bbfe35_Solutions_cultural-awareness.jpg',
    features: []},
  {
    icon: 'fas fa-sign-language',
    title: 'Lengua de señas y accesibilidad',
    description: 'Inclusión total para la comunidad sorda y con discapacidad auditiva. Ofrecemos interpretación en ASL (presencial y remota), subtitulado en tiempo real y asesoría normativa, garantizando experiencias accesibles y en pleno cumplimiento de la ley ADA para cada cliente.',
    image:
      'https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2026/03/66a50b29f2a7150c88006e39_Solutions-508-Compliance_upscayl_3x_upscayl-standard-4x-1024x768.webp',
    features: []},
  {
    icon: 'fas fa-certificate',
    title: 'Notarización remota y apostilla',
    description: 'Soporte notarial multilingüe y autenticación segura desde cualquier lugar del mundo. Validación de documentos legales en el extranjero disponible 24/7.',
    image: 'https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2026/03/33395-1024x683.webp',
    features: []
  },
  {
    icon: 'fas fa-globe-americas',
    title: 'Servicios de localización y multimedia',
    description: 'Adaptamos contenido, diseño y experiencia de usuario (UX) para cualquier mercado global. Localización de sitios web, aplicaciones, software y metadatos, además de SEO multilingüe y pruebas de adecuación cultural.',
    image:
      'https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2026/03/pexels-mikhail-nilov-6592395-1024x682.webp',
    features: []
  }
])

const CARDS_PER_VIEW = ref(3)
const currentIndex = ref(0)
let autoplayId: number | null = null

const maxIndex = computed(() => Math.max(0, services.value.length - CARDS_PER_VIEW.value))

const trackStyle = computed(() => {
  const translatePercentage = (100 / CARDS_PER_VIEW.value) * currentIndex.value
  return {
    transform: `translateX(-${translatePercentage}%)`
  }
})

const goNext = () => {
  if (!services.value.length) return
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

const goPrev = () => {
  if (!services.value.length) return
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

onMounted(() => {
  const updateCardsPerView = () => {
    const width = window.innerWidth
    if (width <= 768) {
      CARDS_PER_VIEW.value = 1
    } else if (width <= 1024) {
      CARDS_PER_VIEW.value = 2
    } else {
      CARDS_PER_VIEW.value = 3
    }
  }

  updateCardsPerView()
  window.addEventListener('resize', updateCardsPerView)

  autoplayId = window.setInterval(() => {
    goNext()
  }, 10000)

  onUnmounted(() => {
    window.removeEventListener('resize', updateCardsPerView)
  })
})

onUnmounted(() => {
  if (autoplayId !== null) {
    window.clearInterval(autoplayId)
  }
})

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact')
  if (contactSection instanceof HTMLElement) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.services-section {
  position: relative;
  padding: 100px clamp(20px, 5vw, 80px);
  background: #f5f5f5;
}

.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at top left, rgba(96, 165, 250, 0.15), transparent 55%);
}

.container {
  position: relative;
  width: 100%;
  margin: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-title {
  font-size: clamp(32px, 6vw, 32px);
  font-weight: 400;
  color: #282828;
  margin: 0 0 16px 0;
  letter-spacing: -0.04em;
  line-height: 1.6em;
  text-align: left;
}

.section-subtitle {
  font-size: clamp(14px, 3vw, 18px);
  color: var(--medium-gray);
  margin: 0;
  max-width: 720px;
  margin-right: auto;
  line-height: 1.7;
  text-align: left;
}

.services-carousel {
  position: relative;
}

.services-viewport {
  overflow: hidden;
  padding-bottom: 10px;
}

.services-track {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease;
}

.service-card {
  flex: 0 0 calc(95% / 3);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
}

.service-image-wrapper {
  height: 350px;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.service-content {
  padding: 28px 25px 0;
  display: flex;
  flex-direction: column;
  height: 70%;
}

.service-title {
  font-size: 20px;
  font-weight: 400;
  color: #282828;
  margin: 0 0 10px 0;
  line-height: 1.6em;
  white-space: pre-line;
}

.service-description {
  font-size: 14px;
  color: var(--medium-gray);
  line-height: 1.7;
  margin: 0 0 18px 0;
  text-align: justify;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  font-size: 13px;
  color: var(--slate-600);
  padding: 6px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.service-features i {
  color: var(--primary-red);
  font-size: 12px;
}

.service-cta {
  margin-top: auto;
  width: calc(100% + 50px);
  margin-left: -25px;
  margin-right: -25px;
  background: linear-gradient(135deg, #be009f 0%, #be009f 100%);
  color: #ffffff;
  border: none;
  border-radius: 0 0 24px 24px;
  padding: 12px 22px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: 0 10px 25px rgba(236, 72, 153, 0.35);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.service-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 35px rgba(236, 72, 153, 0.45);
}

.service-cta:active {
  transform: translateY(0);
  box-shadow: 0 10px 25px rgba(190, 0, 159, 0.35);
}

.carousel-arrow {
  position: absolute;
  box-shadow: 0 16px 35px rgba(190, 0, 159, 0.45);
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  box-shadow: 0 8px 18px rgba(190, 0, 159, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.95);
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.7);
  z-index: 2;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.carousel-arrow.left {
  left: -30px;
  top: 300px;
}

.carousel-arrow.right {
  right: -30px;
  top: 300px;
}

.carousel-arrow:hover {
  background: rgba(37, 99, 235, 0.98);
  transform: translateY(-50%) scale(1.04);
  box-shadow: 0 18px 42px rgba(37, 99, 235, 0.8);
}

@media (max-width: 1024px) {
  .service-card {
    flex: 0 0 calc(100% / 2);
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 60px clamp(16px, 4vw, 40px);
  }

  .section-header {
    margin-bottom: 40px;
  }

  .service-card {
    flex: 0 0 100%;
  }

  .service-image-wrapper {
    height: 220px;
  }

  .carousel-arrow.left {
    left: 4px;
  }

  .carousel-arrow.right {
    right: 4px;
  }
}
</style>
