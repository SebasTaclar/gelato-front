<template>
  <a
    :href="whatsappLink"
    class="whatsapp-floating"
    target="_blank"
    rel="noopener"
    aria-label="Chatear por WhatsApp con CCI Group"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
      alt="WhatsApp"
      class="whatsapp-icon"
    >
  </a>
</template>

<script setup lang="ts">
// Número de WhatsApp en formato internacional (sin '+')
const whatsappNumber = '17276573167'

// Mensaje por defecto para iniciar la conversación
const defaultMessage = 'Hola! Me interesa un servicio de CCI Group. ¿Me pueden brindar más información?'

// Enlace usando la API oficial de WhatsApp
const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(defaultMessage)}`
</script>

<style scoped>
.whatsapp-floating {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  z-index: 1100;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.whatsapp-floating:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  background: #1ebe5d;
}

.whatsapp-icon {
  width: 26px;
  height: 26px;
}

@media (max-width: 768px) {
  .whatsapp-floating {
    right: 16px;
    bottom: 16px;
    width: 52px;
    height: 52px;
  }

  .whatsapp-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
