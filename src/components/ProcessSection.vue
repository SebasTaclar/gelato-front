<template>
  <section class="process-section">
    <div class="container">
      <div class="process-hero">
        <div class="process-copy">
          <h2 class="process-title">
            Desde la solicitud hasta el resultado<span class="rating-number">:</span> Rápido<span class="rating-number">,</span>
            preciso y conforme a la normativa
          </h2>
          <p class="process-text">
            Un proceso optimizado diseñado para llevarle desde la solicitud hasta la entrega,
            con precisión y cumplimiento en cada paso.
          </p>
          <!--<button class="process-cta-button" type="button" @click="scrollToContact">
            COMIENCE HOY MISMO <span class="arrow">→</span>
          </button>-->
        </div>

        <div class="process-image-wrapper">
          <img
            src="https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2026/03/pexels-karola-g-5904094-1024x682.webp"
            alt="Cliente hablando por telÉfono con un intÉrprete"
            class="process-image"
          />
        </div>
      </div>

      <div class="process-grid">
        <article class="process-card" v-for="(step, index) in steps" :key="index">
          <div class="process-card-number">
            {{ String(index + 1).padStart(2, '0') }}.
          </div>
          <h3 class="process-card-title">{{ step.title }}</h3>
          <p class="process-card-description">{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'ProcessSection' })

const steps = ref([
  {
    title: 'Envía su solicitud',
    description: 'Envíenos sus documentos o detalles del evento a través de nuestra plataforma segura.'
  },
  {
    title: 'Encuentra a los expertos que te necesitan',
    description: 'Te ponemos en contacto con lingüistas e intérpretes certificados que se ajustan a tus necesidades específicas.'
  },
  {
    title: 'Reciba su solución',
    description: 'Traducciones, interpretaciones o legalizaciones notariales entregadas con rapidez y precisión.'
  },
  {
    title: 'Revisar y confirmar',
    description: 'Garantizamos que todo cumple con sus estándares gracias a nuestro proceso de control de calidad.'
  }
])
</script>

<style scoped>
.process-section {
  padding: 100px clamp(20px, 5vw, 80px);
  background: #ffffff;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
}

.rating-number {
  font-weight: 700;
}

.process-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
  margin-bottom: 64px;
}

.process-copy {
  max-width: 560px;
}

.process-title {
  font-size: clamp(32px, 5vw, 32px);
  font-weight: 400;
  color: #282828;
  margin: 0 0 20px 0;
  letter-spacing: -0.04em;
  line-height: 1.3;
  letter-spacing: 1px;
}

.process-text {
  font-size: 16px;
  color: var(--medium-gray);
  line-height: 1.7;
  margin: 0 0 28px 0;
}

.process-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #be009f 0%, #be009f 100%);
  color: #ffffff;
  padding: 14px 32px;
  border: none;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.process-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(190, 0, 159, 0.4);
}

.process-cta-button .arrow {
  transition: transform 0.3s ease;
}

.process-cta-button:hover .arrow {
  transform: translateX(4px);
}

.process-image-wrapper {
  border-radius: 24px;
  overflow: hidden;
  min-height: 260px;
}

.process-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.process-card {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.45);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.2);
  padding: 28px 26px 26px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.process-card-number {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #be009f;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 18px;
}

.process-card-title {
  font-size: 16px;
  font-weight: 400;
  color: #282828;
  margin: 0 0 20px 0;
  line-height: 1.5;
  text-align: left;
  min-height: 56px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 1px;
}

.process-card-description {
  font-size: 16px;
  color: #7a7a7a;
  line-height: 1.7;
  margin: 0;
  text-align: left;
}

@media (max-width: 1024px) {
  .process-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }

  .process-image-wrapper {
    max-width: 520px;
    margin: 0 auto;
  }

  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .process-section {
    padding: 60px clamp(16px, 4vw, 40px);
  }

  .process-hero {
    margin-bottom: 40px;
  }

  .process-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .process-card {
    padding: 24px 22px 22px;
  }

  .process-card-number {
    width: 56px;
    height: 56px;
    font-size: 18px;
  }
}
</style>
