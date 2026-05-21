<template>
  <section class="main-banner">
    <div class="banner-background">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
        alt="Profesionales"
        class="banner-image"
      >
      <div class="banner-overlay"></div>
    </div>

    <div class="banner-content">
      <h1 class="banner-title">Soluciones lingüísticas innovadoras</h1>
      <p class="banner-subtitle">Comunicación humana que conecta al mundo</p>

      <p class="banner-description">
        CCI Group transforma los desafíos en la comunicación en conexiones humanas. Brindamos servicios a múltiples sectores: gobierno, salud,
        educación y otras industrias, y contamos con experiencia certificada en más de 350 idiomas. Desde interpretación en tiempo real hasta
        notarización remota y gestión de talento, eliminamos las barreras lingüísticas para impulsar la conexión, la comunicación y el éxito
        de su organización.
      </p>

      <div class="banner-buttons">
        <button class="btn hero-primary" @click="handleCTA">
          PROGRAME UNA LLAMADA ESTRATÉGICA <span class="arrow">→</span>
        </button>
        <button class="btn hero-secondary" @click="exploreSolutions">
          EXPLORE NUESTRAS SOLUCIONES
        </button>
      </div>

      <p class="banner-rating">
        <span class="stars">★★★★★</span>
        <span class="rating-text">
          Lo que dicen nuestros clientes<span class="rating-number">: 4,9</span> de<span class="rating-number"> 5</span> estrellas según
          <span class="rating-number">47</span> reseñas<span class="rating-number">.</span>
          Valoración media<span class="rating-number">: 4,7</span> de <span class="rating-number"> 5</span>
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainBanner'
})

const handleCTA = () => {
  const contactSection = document.querySelector('.contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const exploreSolutions = () => {
  const solutionsSection = document.querySelector('.distinguish-section')
  if (solutionsSection) {
    solutionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.main-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 850px;
  margin-top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  padding-top: 60px;
}

.banner-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  /* Mismo gradiente, pero con transparencia para dejar ver la foto */
  background: linear-gradient(
    251.52deg,
    rgba(170, 0, 166, 0.82) 4.31%,
    rgba(61, 0, 173, 0.80) 25.6%,
    rgba(0, 10, 172, 0.78) 47.51%,
    rgba(0, 5, 89, 0.84) 77.72%,
    rgba(0, 0, 0, 0.90) 98.63%
  );
  z-index: 2;
}

.banner-content {
  position: relative;
  z-index: 3;
  max-width: 1000px;
  padding-left: 60px;
  padding-top: 140px;
  padding-right: 50px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.banner-eyebrow {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
}

.banner-title {
  font-size: clamp(48px, 9vw, 48px);
  font-weight: 400;
  line-height: 1.45;
  margin: 0;
  letter-spacing: 1px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  /* Usar la fuente de títulos configurada en :root (Embrace Theories) */
  font-family: var(--font-primary);
}

.banner-subtitle {
  font-size: clamp(18px, 4vw, 16px);
  font-weight: 300;
  font-style: italic;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.5;
  letter-spacing: 1px;
  font-family: var(--font-primary);
}

.banner-description {
  font-size: 20px;
  color: rgb(255, 255, 255);
  line-height: 1.45;
  margin: 0;
  max-width: 800px;
  font-weight:500;
  text-align: justify;
  font-family: var(--font-secondary);
}

.banner-rating {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-top: 18px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
}

.banner-rating .stars {
  font-size: 16px;
}

.banner-rating .rating-text {
  font-size: 16px;
  font-family: var(--font-primary);
  letter-spacing: 1px;
}

.banner-rating .rating-number {
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 22px;
}

.banner-buttons {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 16px;
  max-width: 620px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 26px;
  border-radius: 9999px;
  border: none;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.hero-primary {
  background: #be009f; /* Amarillo principal para la llamada estratégica */
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
}

.hero-primary .arrow {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.hero-primary:hover {
  /* Mantener el mismo color en hover, solo más elevación */
  background: #be009f;
  transform: translateY(-3px);
}

.hero-primary:hover .arrow {
  transform: translateX(4px);
}

.hero-primary:active {
  transform: translateY(-1px);
}

.hero-secondary {
  background: #ffffff;
  color: #000000;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.hero-secondary:hover {
  background: #be009f;
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.hero-secondary:active {
  transform: translateY(-1px);
}
@media (max-width: 768px) {
  .banner-content {
    padding-left: 40px;
    padding-right: 40px;
    gap: 20px;
  }

  .banner-buttons {
    flex-direction: column;
    max-width: 100%;
  }

  .btn {
    width: 100%;
    padding: 12px 24px;
    font-size: 13px;
  }

  .banner-rating {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .main-banner {
    min-height: 520px;
  }

  .banner-content {
    padding: 80px clamp(15px, 5vw, 30px);
    gap: 18px;
  }

  .banner-title {
    font-size: 30px;
  }

  .banner-subtitle {
    font-size: 18px;
  }

  .banner-description {
    font-size: 15px;
    line-height: 1.6;
  }

  .btn {
    padding: 10px 20px;
    font-size: 12px;
  }
}
</style>
