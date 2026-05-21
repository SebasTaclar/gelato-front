<template>
  <section class="solutions-section" id="solutions">
    <div class="solutions-container">
      <div class="solutions-header">
        <h2 class="section-title">Nuestras Soluciones</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Soluciones lingüísticas completas para tu organización</p>
      </div>

      <div class="solutions-grid">
        <div class="solution-card">
          <div class="solution-icon">
            <span>🎙️</span>
          </div>
          <h3>Interpretación</h3>
          <p>Servicios de interpretación en tiempo real para eventos, reuniones y conferencias.</p>
          <ul class="solution-features">
            <li>Interpretación consecutiva</li>
            <li>Interpretación simultánea</li>
            <li>Videoconferencia</li>
            <li>Interpretación telefónica 24/7</li>
          </ul>
        </div>

        <div class="solution-card featured">
          <div class="badge">Más Popular</div>
          <div class="solution-icon featured-icon">
            <span>📋</span>
          </div>
          <h3>Traducción Profesional</h3>
          <p>Traducciones precisas y certificadas en más de 350 idiomas por traductores expertos.</p>
          <ul class="solution-features">
            <li>Traducciones técnicas</li>
            <li>Traducciones legales</li>
            <li>Localización de software</li>
            <li>Certificación oficial</li>
          </ul>
        </div>

        <div class="solution-card">
          <div class="solution-icon">
            <span>📝</span>
          </div>
          <h3>Notarización Remota</h3>
          <p>Servicios de notarización digital certificada y segura desde cualquier ubicación.</p>
          <ul class="solution-features">
            <li>Notarización digital</li>
            <li>Certificados electrónicos</li>
            <li>Legalizaciones</li>
            <li>Apostilla de La Haya</li>
          </ul>
        </div>

        <div class="solution-card">
          <div class="solution-icon">
            <span>👥</span>
          </div>
          <h3>Staffing Lingüístico</h3>
          <p>Personal especializado para satisfacer tus necesidades de comunicación multilingüe.</p>
          <ul class="solution-features">
            <li>Traductores</li>
            <li>Intérpretes</li>
            <li>Notarios públicos</li>
            <li>Personal bilingüe</li>
          </ul>
        </div>

        <div class="solution-card">
          <div class="solution-icon">
            <span>🏥</span>
          </div>
          <h3>Sector Salud</h3>
          <p>Soluciones especializadas para hospitales, clínicas y servicios de salud.</p>
          <ul class="solution-features">
            <li>Interpretación médica</li>
            <li>Traducción de historiales</li>
            <li>Consentimiento informado</li>
            <li>Servicios 24/7</li>
          </ul>
        </div>

        <div class="solution-card">
          <div class="solution-icon">
            <span>🏛️</span>
          </div>
          <h3>Sector Legal</h3>
          <p>Servicios legales integrales para bufetes de abogados y organismos jurídicos.</p>
          <ul class="solution-features">
            <li>Traducción de documentos légales</li>
            <li>Interpretación en cortes</li>
            <li>Asesoramiento lingüístico</li>
            <li>Certificaciones juradas</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Este componente no requiere lógica especial
</script>

<style scoped>
.solutions-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 50%, #1a1a4d 100%);
  position: relative;
  overflow: hidden;
}

.solutions-section::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background:
    radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%);
  pointer-events: none;
}

.solutions-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.solutions-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 48px;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, #be009f 0%, #be009f 100%);
  margin: 0 auto 20px;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 20px;
  color: #c7d2fe;
  margin: 0;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.solution-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0) 0%, rgba(236, 72, 153, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.solution-card:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%);
  border-color: rgba(190, 0, 159, 0.4);
  transform: translateY(-12px);
}

.solution-card:hover::before {
  opacity: 1;
}

.solution-card.featured {
  border: 2px solid rgba(190, 0, 159, 0.5);
  background: linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%);
  transform: scale(1.02);
}

.badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #be009f 0%, #be009f 100%);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.solution-icon {
  font-size: 56px;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.solution-card:hover .solution-icon {
  transform: scale(1.1) rotate(5deg);
}

.featured-icon {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(217, 70, 239, 0.2) 100%);
  padding: 16px 20px;
  border-radius: 12px;
}

.solution-card h3 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 12px;
  font-weight: 700;
}

.solution-card p {
  color: #c7d2fe;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 15px;
}

.solution-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.solution-features li {
  color: #b3bef5;
  padding: 10px 0;
  padding-left: 24px;
  position: relative;
  font-size: 14px;
}

.solution-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #be009f;
  font-weight: 700;
  font-size: 16px;
}

@media (max-width: 768px) {
  .solutions-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 36px;
  }

  .solutions-grid {
    gap: 20px;
    grid-template-columns: 1fr;
  }

  .solution-card {
    padding: 30px 20px;
  }

  .solution-card.featured {
    transform: scale(1);
  }
}
</style>
