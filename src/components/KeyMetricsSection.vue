<template>
  <section class="metrics-section">
    <div class="metrics-container">
      <div class="metrics-header">
        <p class="metrics-eyebrow">Resultados que respaldan cada interacción</p>
        <h2 class="metrics-title">Rendimiento comprobado en servicios lingüísticos</h2>
        <p class="metrics-subtitle">
          Combinamos talento humano certificado y tecnología para ofrecer tiempos de respuesta rápidos,
          alta tasa de conexión y cobertura en múltiples sectores en Colombia y la región.
        </p>
      </div>

      <div class="metrics-grid">
        <article class="metric-card">
          <p class="metric-main">98.9%</p>
          <p class="metric-label">Tasa de conexión exitosa</p>
          <p class="metric-detail">Interpretaciones sin interrupciones, incluso en escenarios de alta demanda.</p>
        </article>

        <article class="metric-card">
          <p class="metric-main">48s</p>
          <p class="metric-label">Tiempo promedio de respuesta</p>
          <p class="metric-detail">Acceso a intérpretes y servicios críticos en segundos, no en minutos.</p>
        </article>

        <article class="metric-card">
          <p class="metric-main">350+</p>
          <p class="metric-label">Idiomas y variantes</p>
          <p class="metric-detail">Cobertura lingüística para audiencias diversas en Colombia y Latinoamérica.</p>
        </article>

        <article class="metric-card">
          <p class="metric-main">12+</p>
          <p class="metric-label">Años de experiencia</p>
          <p class="metric-detail">Acompañando a gobiernos, salud, educación y empresas en sus retos de comunicación.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'KeyMetricsSection' })
</script>

<style scoped>
.metrics-section {
  padding: 80px clamp(20px, 6vw, 80px);
  background: linear-gradient(135deg, #f9fafb 0%, #eef2ff 100%);
  color: #0f172a;
}

.metrics-container {
  max-width: 1200px;
  margin: 0 auto;
}

.metrics-header {
  text-align: left;
  max-width: 720px;
  margin-bottom: 40px;
}

.metrics-eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #64748b;
  margin: 0 0 12px 0;
}

.metrics-title {
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 800;
  margin: 0 0 14px 0;
  letter-spacing: -0.03em;
}

.metrics-subtitle {
  margin: 0;
  color: #64748b;
  font-size: 15px;
  line-height: 1.7;
}

.metrics-grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.metric-card {
  padding: 18px 18px 20px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.metric-main {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 0.06em;
  /* Métricas numéricas en Raleway para mejor legibilidad y sin marca de agua */
  font-family: var(--font-secondary);
}

.metric-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #94a3b8;
}

.metric-detail {
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .metrics-section {
    padding: 56px clamp(16px, 6vw, 32px);
  }

  .metrics-header {
    text-align: left;
  }
}
</style>
