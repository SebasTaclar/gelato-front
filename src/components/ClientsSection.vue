<template>
  <section class="clients-section" id="clients">
    <div class="container">
      <h2 class="section-title">Nuestros Clientes <span class="rating-number">/</span> Socios</h2>
      <p class="section-subtitle">Empresas que confían en Nosotros</p>
    </div>

    <div class="clients-carousel">
      <div class="clients-track">
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente1.png" alt="Cliente 1">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente2.png" alt="Cliente 2">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente3.png" alt="Cliente 3">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente4.png" alt="Cliente 4">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente5.png" alt="Cliente 5">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente6.png" alt="Cliente 6">
          </div>
        </div>
        <!-- Duplicado para scroll infinito -->
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente1.png" alt="Cliente 1">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente2.png" alt="Cliente 2">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente3.png" alt="Cliente 3">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente4.png" alt="Cliente 4">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente5.png" alt="Cliente 5">
          </div>
        </div>
        <div class="client-item">
          <div class="client-logo">
            <img src="/images/cliente6.png" alt="Cliente 6">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.clients-section {
  padding: 80px 0;
  background: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 32px;
  text-align: center;
  font-weight: 400;
  line-height: 1.6em;
  color: #282828;
  margin-bottom: 10px;
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 50px;
  font-family: var(--font-secondary);
}

.clients-carousel {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.clients-track {
  display: flex;
  gap: 40px;
  padding: 10px 20px;
  animation: scroll-left 25s linear infinite;
  width: max-content;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.client-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  min-width: 260px;
  flex-shrink: 0;
}

.client-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.client-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(50%);
  transition: filter 0.3s ease;
}

.client-logo img:hover {
  filter: grayscale(0%);
}

@media (max-width: 768px) {
  .clients-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .clients-track {
    gap: 30px;
    animation: scroll-left 20s linear infinite;
  }

  .client-item {
    min-width: 120px;
  }
}
</style>
