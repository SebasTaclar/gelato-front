<template>
  <main class="home-main">

    <section class="section">
      <MainBanner @showRules="openRulesModal" />
    </section>

    <section class="section">
      <ContactSection />
    </section>


    <!-- Enlace flotante para prueba de sincronización -->
    <!-- <router-link to="/test-sync" class="test-sync-link">
      🧪 Probar Sincronización
    </router-link> -->

    <!-- Modal de reglas -->

  </main>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import MainBanner from '@/components/MainBanner.vue';
// Carga diferida (code splitting) de secciones pesadas
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))

// Estado del modal de reglas
const showRulesModal = ref(false)

const openRulesModal = () => {
  showRulesModal.value = true
}

const closeRulesModal = () => {
  showRulesModal.value = false
}

defineOptions({
  name: 'HomeView',
});

// Expose variables to template
defineExpose({
  showRulesModal,
  openRulesModal,
  closeRulesModal
});

</script>

<style scoped>
.home-main {
  padding-top: 60px;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  color: var(--white);
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
}

.section {
  padding: 0.1px 0 0 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}

.section:last-child {
  border-bottom: none;
}

/* Resplandor en hover */

/* Responsive: reducir efectos en móviles */
@media (max-width: 768px) {
  .particle:nth-child(n+10) {
    display: none;
  }
}


/* Enlace flotante para prueba de sincronización */
.test-sync-link {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  z-index: 1000;
  transition: all 0.3s ease;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.test-sync-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  background: linear-gradient(45deg, #764ba2, #667eea);
}
</style>
