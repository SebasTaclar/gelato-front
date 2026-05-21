<template>
  <section class="what-sets-us-apart">
    <div class="overlay"></div>
    <div class="container">
      <header class="wsua-header wsua-header-center">
        <h3 class="wsua-title-es">Dónde marcamos la diferencia</h3>
      </header>

      <div class="wsua-feature-grid">
        <div class="wsua-feature-card">
          <p class="wsua-paragraph">
            <strong>Respuesta inmediata de<span class="rating-number">: 48</span> Segundos</strong>

            <br>Acceda a intérpretes en remoto en menos de 48 segundos: sin demoras ni incertidumbre. Nuestra tecnología de avanzada garantiza el acceso en tiempo real a intérpretes en cualquier idioma, en cualquier momento y lugar.
          </p>
        </div>

        <div class="wsua-feature-card">
          <p class="wsua-paragraph">
            <strong>Disponibilidad total<span class="rating-number">: 24/7</span></strong><br>
            <br>Soporte las 24 horas, los 365 días del año. Sus necesidades lingüísticas no tienen horario, nosotros tampoco. Personas reales, listas para ayudar en cualquier momento y lugar.
          </p>
        </div>

        <div class="wsua-feature-card">
          <p class="wsua-paragraph">
            <strong>Más de <span class="rating-number">350</span> idiomas a su disposición</strong><br>
            Desde el árabe hasta la lengua de señas colombiana, ofrecemos servicios lingüísticos que respetan los matices culturales y facilitan una conexión humana auténtica.
          </p>
        </div>
      </div>

      <section class="wsua-stats">
        <header class="wsua-stats-header">
          <h4 class="wsua-stats-title-en">Cifras de confianza que hablan por sí solas</h4>
        </header>

        <ul class="wsua-stats-list">
          <li class="wsua-stat-item">
            <span class="wsua-stat-number"><span class="wsua-stat-number-value">{{ stat350 }}</span>+</span>
            <span class="wsua-stat-text">Idiomas y dialectos</span>
          </li>
          <li class="wsua-stat-item">
            <span class="wsua-stat-number"><span class="wsua-stat-number-value">{{ stat989.toFixed(1) }}</span>%</span>
            <span class="wsua-stat-text">De conexiones exitosas</span>
          </li>
          <li class="wsua-stat-item">
            <span class="wsua-stat-number"><span class="wsua-stat-number-value">{{ stat48 }}</span> s</span>
            <span class="wsua-stat-text">Tiempo promedio de conexión</span>
          </li>
          <li class="wsua-stat-item">
            <span class="wsua-stat-number"><span class="wsua-stat-number-value">{{ stat24 }}</span>/7/365</span>
            <span class="wsua-stat-text">Disponibilidad global</span>
          </li>
          <li class="wsua-stat-item">
            <span class="wsua-stat-number"><span class="wsua-stat-number-value">{{ stat12 }}</span>+</span>
            <span class="wsua-stat-text">Años al servicio de la justicia, el gobierno y la educación</span>
          </li>
          <li class="wsua-stat-item">
            <span class="wsua-stat-number"><span class="wsua-stat-number-value">{{ stat10 }}</span>M+</span>
            <span class="wsua-stat-text">Minutos de interpretación realizados</span>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineOptions({ name: 'WhatSetsUsApart' })

const stat350 = ref(0)
const stat989 = ref(0)
const stat48 = ref(0)
const stat24 = ref(0)
const stat12 = ref(0)
const stat10 = ref(0)

let observer: IntersectionObserver | null = null

function animateCounter(counter: typeof stat350, target: number, duration: number, decimals = 0) {
  const start = 0
  const startTime = performance.now()

  const frame = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1)
    const value = start + (target - start) * progress
    counter.value = decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.round(value)

    if (progress < 1) {
      requestAnimationFrame(frame)
    }
  }

  requestAnimationFrame(frame)
}

function startCounters() {

  if (stat350.value > 0) return

  animateCounter(stat350, 350, 1200)
  animateCounter(stat989, 98.9, 1200, 1)
  animateCounter(stat48, 48, 1200)
  animateCounter(stat24, 24, 1200)
  animateCounter(stat12, 12, 1200)
  animateCounter(stat10, 10, 1200)
}

onMounted(() => {
  const section = document.querySelector('.what-sets-us-apart')
  if (!section) return

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          startCounters()
          if (observer) {
            observer.disconnect()
            observer = null
          }
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
  } else {
    startCounters()
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>

.rating-number {
  font-weight: 700;
  font-size: 20px;

}

.what-sets-us-apart {
  position: relative;
  padding: 60px clamp(20px, 4vw, 50px);
  /* Gradiente sobre foto de fondo para efecto similar al hero */
  background:
    linear-gradient(
      251.52deg,
      rgba(170, 0, 166, 0.78) 4.31%,
      rgba(61, 0, 173, 0.75) 25.6%,
      rgba(0, 10, 172, 0.72) 47.51%,
      rgba(0, 5, 89, 0.78) 77.72%,
      rgba(0, 0, 0, 0.85) 98.63%
    ),
    url('https://www.linguaris.com/wp-content/uploads/2024/07/B02.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #e5e7eb;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.03), transparent 60%);
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.wsua-header {
  margin-bottom: 24px;
  text-align: center;
}

.wsua-title-en {
  font-size: clamp(22px, 3vw, 26px);
  font-weight: 800;
  color: #f9fafb;
  margin: 0 0 4px 0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.wsua-title-es {
  font-size: clamp(30px, 4.5vw, 32px);
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.04em;
  line-height: 1.6em;
}

.wsua-feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 16px 0 32px;
}

.wsua-feature-card {
  background: rgba(3, 7, 18, 0.65);
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.55);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.7);
  padding: 18px 22px 20px;
  text-align: center;
}

.wsua-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wsua-paragraph {
  font-size: 14px;
  color: #ffffff;
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.06em;

}

.wsua-paragraph strong {
  font-weight: 800;
  color: #ffffff;
  font-family: var(--font-primary);
  letter-spacing: 1px;
}

.wsua-stats {
  margin-top: 8px;
}

.wsua-stats-header {
  margin-bottom: 10px;
}

.wsua-stats-title-en {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #ffffff;
  margin: 0 0 4px 0;
  text-align: center;
}

.wsua-stats-subtitle-es {
  font-size: 13px;
  color: #cbd5f5;
  margin: 0;
}

.wsua-stats-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px 20px;
}

.wsua-stat-item {
  padding: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.wsua-stat-number {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.04em;
  text-transform: none;
  line-height: 1.1;
  /* Números y símbolos en Raleway para evitar la marca de agua de la trial */
  font-family: var(--font-secondary);
}

.wsua-stat-text {
  font-size: 16px;
  color: #e5e7eb;
}

@media (max-width: 1024px) {
  .wsua-stats-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wsua-feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .what-sets-us-apart {
    padding: 70px clamp(16px, 5vw, 32px);
  }

  .section-title {
    font-size: 28px;
  }

  .wsua-stats-list {
    grid-template-columns: minmax(0, 1fr);
  }

  .wsua-feature-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
