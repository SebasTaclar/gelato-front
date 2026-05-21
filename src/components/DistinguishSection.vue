<template>
  <section class="distinguish-section">
    <div class="distinguish-container">
      <!-- Título y Descripción -->
      <div class="distinguish-header">
        <h2 class="distinguish-title">Lo que nos distingue</h2>
        <p class="distinguish-description">
          Actualmente, las organizaciones operan en entornos dinámicos y exigentes donde los errores de
          comunicación pueden acarrear riesgos legales, pérdida de oportunidades e incumplimiento normativo. Las
          barreras lingüísticas suelen ralentizar los procesos, generar malentendidos y afectar la experiencia del
          cliente. My CCI Group ayuda a superar estos desafíos con soluciones lingüísticas precisas, fiables y
          escalables, diseñadas a medida tanto para el sector público como para el privado.
        </p>
      </div>

      <!-- Problemas y Soluciones -->
      <div class="problems-solutions-wrapper">
        <!-- Columna Problemas -->
        <div class="column problems-column">
          <div class="column-header">
            <div class="icon-container problems-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 9v2m0 4v2m-9-5a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </div>
            <h3 class="column-title">Problemas</h3>
          </div>

          <div class="items-container">
            <div class="problem-item">
              <span class="item-number">01</span>
              <span class="item-text">Traducciones inexactas</span>
            </div>
            <div class="problem-item">
              <span class="item-number">02</span>
              <span class="item-text">retrasos en la comunicación</span>
            </div>
            <div class="problem-item">
              <span class="item-number">03</span>
              <span class="item-text">Acceso limitado a intérpretes</span>
            </div>
            <div class="problem-item">
              <span class="item-number">04</span>
              <span class="item-text">desafíos de cumplimiento</span>
            </div>
            <div class="problem-item">
              <span class="item-number">05</span>
              <span class="item-text">Flujos de trabajo ineficientes</span>
            </div>
          </div>
        </div>

        <!-- Flecha central -->
        <div class="arrow-container">
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <!-- Columna Soluciones -->
        <div class="column solutions-column">
          <div class="column-header">
            <div class="icon-container solutions-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="column-title">Soluciones</h3>
          </div>

          <div class="items-container">
            <div class="solution-item">
              <span class="item-number">01</span>
              <span class="item-text">Traducciones certificadas con exactitud</span>
            </div>
            <div class="solution-item">
              <span class="item-number">02</span>
              <span class="item-text">Interpretación en tiempo real</span>
            </div>
            <div class="solution-item">
              <span class="item-number">03</span>
              <span class="item-text">Lingüistas a demanda</span>
            </div>
            <div class="solution-item">
              <span class="item-number">04</span>
              <span class="item-text">Servicios preparados para el cumplimiento normativo</span>
            </div>
            <div class="solution-item">
              <span class="item-number">05</span>
              <span class="item-text">Procesos optimizados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'DistinguishSection' })
</script>

<style scoped>
.distinguish-section {
  padding: 80px clamp(20px, 5vw, 60px);
  background: #ffffff;
}

.distinguish-container {
  max-width: 1400px;
  margin: 0 auto;
}

.distinguish-header {
  text-align: center;
  margin-bottom: 60px;
}

.distinguish-title {
  font-size: clamp(28px, 6vw, 42px);
  font-weight: 800;
  color: #000000;
  margin: 0 0 20px 0;
  letter-spacing: -0.5px;
}

.distinguish-description {
  font-size: 16px;
  color: #666666;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
}

.problems-solutions-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: start;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.column-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.problems-icon {
  background: #fee2e2;
  color: #EE2A31;
}

.solutions-icon {
  background: #dcfce7;
  color: #16a34a;
}

.column-title {
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}

.items-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.problem-item,
.solution-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f9f9f9;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.problem-item:hover,
.solution-item:hover {
  background: #f3f4f6;
  transform: translateX(4px);
}

.problems-column .problem-item {
  border-left: 3px solid #EE2A31;
}

.solutions-column .solution-item {
  border-left: 3px solid #16a34a;
}

.item-number {
  font-weight: 700;
  font-size: 14px;
  color: #9ca3af;
  min-width: 30px;
}

.item-text {
  font-size: 15px;
  color: #374151;
  line-height: 1.5;
}

.arrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.arrow-icon {
  width: 40px;
  height: 40px;
  color: #c084fc;
  animation: slideArrow 2s ease-in-out infinite;
}

@keyframes slideArrow {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(8px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .problems-solutions-wrapper {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .arrow-container {
    display: none;
  }

  .distinguish-section {
    padding: 60px clamp(20px, 5vw, 40px);
  }
}

@media (max-width: 768px) {
  .distinguish-title {
    font-size: 28px;
  }

  .distinguish-description {
    font-size: 14px;
  }

  .column-title {
    font-size: 20px;
  }

  .item-text {
    font-size: 14px;
  }

  .problems-solutions-wrapper {
    gap: 40px;
  }
}
</style>
