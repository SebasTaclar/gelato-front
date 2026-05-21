<template>
  <section class="about-section" id="about">
    <div class="about-container">
      <div class="about-header">
        <h2 class="section-title">Acerca de CCI Group</h2>
        <div class="title-underline"></div>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p class="about-intro">
            CCI Group es una empresa líder en soluciones lingüísticas innovadoras que transforma los desafíos de la comunicación en conexiones humanas significativas.
          </p>

          <div class="about-grid">
            <div class="about-item">
              <div class="item-icon">🌍</div>
              <h3>Alcance Global</h3>
              <p>Servicios certificados en más de 350 idiomas para gobiernos, instituciones de salud, educación e industria.</p>
            </div>

            <div class="about-item">
              <div class="item-icon">⏱️</div>
              <h3>Interpretación en Tiempo Real</h3>
              <p>Soluciones de comunicación instantánea para conectar personas de diferentes idiomas sin barreras.</p>
            </div>

            <div class="about-item">
              <div class="item-icon">📝</div>
              <h3>Notarización Remota</h3>
              <p>Servicios de notarización y certificación escalables y accesibles desde cualquier ubicación.</p>
            </div>

            <div class="about-item">
              <div class="item-icon">👥</div>
              <h3>Soluciones de Personal</h3>
              <p>Equipo especializado de profesionales para satisfacer las necesidades específicas de tu organización.</p>
            </div>
          </div>

          <div class="about-stats">
            <div class="stat">
              <div class="stat-number">350+</div>
              <div class="stat-label">Idiomas Soportados</div>
            </div>
            <div class="stat">
              <div class="stat-number">15+</div>
              <div class="stat-label">Años de Experiencia</div>
            </div>
            <div class="stat">
              <div class="stat-number">1000+</div>
              <div class="stat-label">Clientes Satisfechos</div>
            </div>
            <div class="stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Este componente no requiere lógica especial
</script>

<style scoped>
.about-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, var(--brand-primary-blue, #001A70) 0%, #003099 50%, #004dcc 100%);  /* Gradiente basado en Azul CCI */
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background:
    radial-gradient(circle at 20% 50%, rgba(238, 42, 49, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 26, 112, 0.3) 0%, transparent 50%);
  pointer-events: none;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: var(--letter-spacing-tight);
}

.title-underline {
  width: 100px;
  height: 4px;
  background: var(--brand-secondary-red, #EE2A31);  /* Rojo CCI */
  margin: 0 auto;
  border-radius: 2px;
}

.about-intro {
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.about-item {
  background: rgba(238, 42, 49, 0.08);  /* Rojo CCI con transparencia */
  border: 1px solid rgba(238, 42, 49, 0.2);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.about-item:hover {
  background: rgba(238, 42, 49, 0.15);
  border-color: var(--brand-secondary-red, #EE2A31);
  transform: translateY(-8px);
}

.item-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.about-item h3 {
  font-size: var(--font-size-2xl);
  color: #ffffff;
  margin-bottom: 12px;
  font-weight: var(--font-weight-bold);
}

.about-item p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: var(--font-size-sm);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  background: rgba(238, 42, 49, 0.05);
  border: 1px solid rgba(238, 42, 49, 0.2);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
}

.stat {
  animation: slideInUp 0.8s ease-out forwards;
}

.stat-number {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  color: var(--brand-secondary-red, #EE2A31);  /* Rojo CCI */
  margin-bottom: 10px;
  /* Forzar números limpios sin marca de agua */
  font-family: var(--font-secondary);
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 36px;
  }

  .about-grid {
    gap: 20px;
  }

  .about-item {
    padding: 30px 20px;
  }

  .about-stats {
    padding: 40px 20px;
    gap: 20px;
  }

  .stat-number {
    font-size: 36px;
  }
}
</style>
