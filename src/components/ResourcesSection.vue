<template>
  <section id="resources" class="resources-section">
    <div class="container">
      <div class="section-header">
        <div>
          <h2 class="section-title">Últimas noticias \ novedades y recursos</h2>
          <!-- <p class="section-subtitle">
            Conozca cÓmo organizaciones pÚblicas y privadas estÁn usando soluciones lingÜÍsticas para responder mejor en momentos crÍticos
            y conectar con comunidades diversas.
          </p> -->
        </div>
      </div>

      <div class="resources-layout">
        <!-- Columna izquierda: Podcast destacado -->
        <section class="podcast-column">
          <h3 class="column-heading">Podcast destacado</h3>

          <article class="podcast-card">
            <h4 class="podcast-title">The LanguageVerse Podcast</h4>

            <h4 class="podcast-episode-title">
              “Breaking Language Barriers in Emergency Response”
            </h4>
            <p>“Romper las barreras del idioma en situaciones de emergencia”</p>


            <p class="podcast-description">
              Explore el fascinante mundo de las lenguas y la comunicación intercultural junto a expertos del sector.
            </p>

            <button class="podcast-cta" type="button">
              <span class="podcast-cta-icon"><i class="fas fa-headphones"></i></span>
              <span class="podcast-cta-text">Escuchar ahora en Spotify →</span>
            </button>
          </article>
        </section>

        <!-- Columna derecha: Publicaciones destacadas -->
        <section class="posts-column">
          <h3 class="column-heading">Publicaciones destacadas</h3>

          <div class="posts-grid">
            <article class="post-card" v-for="(post, index) in posts" :key="index">
              <div class="post-card-inner">
                <div class="post-image-wrapper">
                  <img :src="post.image" :alt="post.title" class="post-image" />
                </div>

                <div class="post-content">
                  <!-- <span class="post-tag">Entrenador</span> -->
                  <h4 class="post-title" v-html="post.title"></h4>
                </div>
                <p class="post-meta">
                  <i class="far fa-calendar-alt"></i>
                  <span>{{ post.date }}</span>
                  <span class="post-author">{{ post.author }}</span>
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'ResourcesSection' })

interface PostItem {
  title: string
  date: string
  author: string
  image: string
}

const posts: PostItem[] = [
  {
    title:
      'Mi experiencia<span class="post-title-colon">:</span> sobrevivir a la primera semana del cierre del gobierno <span class="post-title-colon">(</span>y seguimos contando<span class="post-title-colon">).</span>',
    date: '10 de febrero de 2023',
    author: 'Indy Vega',
    image:
      'https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2023/02/68e323595b5f166ccc538880_shutdown-1024x576.jpg'
  },
  {
    title: 'Mi primera vez en un tribunal de los Estados Unidos',
    date: '10 de febrero de 2023',
    author: 'Yamila Benitez',
    image:
      'https://a7oqb2wb89ps4x.projectwebtec9.com/wp-content/uploads/2023/02/67e2be395f813f768d7a65f9_court-interpreters-1024x576.jpg'
  }
]
</script>

<style scoped>
.resources-section {
  padding: 70px clamp(20px, 4vw, 60px);
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
  color: var(--medium-gray);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 32px;
}



.section-title {
  font-size: clamp(32px, 6vw, 32px);
  font-weight: 400;
  color: #282828;
  margin: 0 0 12px 0;
}

.section-subtitle {
  font-size: 14px;
  margin: 0;
  max-width: 640px;
  line-height: 1.7;
  color: #282828;
}

.resources-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.8fr);
  gap: 32px;
  align-items: flex-start;
}

.column-heading {
  font-size: 16px;
  font-weight: 400;
  color: #282828;
  margin: 0 0 18px 0;
}

.podcast-column {
  display: flex;
  flex-direction: column;
}

.podcast-card {
  background: #282828;
  color: #f9fafb;
  border-radius: 28px;
  padding: 28px 26px 26px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 380px;
}

.podcast-title {
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.podcast-episode-title {
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 1px 0;
}

.podcast-description {
  font-size: 14px;
  line-height: 1.8;
  margin: 16px 0 22px 0;
}

.podcast-cta {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 20px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(135deg, #be009f 0%, #be009f 100%);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 16px 40px rgba(236, 72, 153, 0.55);
}

.podcast-cta-icon {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}

.podcast-cta-text {
  white-space: nowrap;
}

.posts-column {
  display: flex;
  flex-direction: column;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.post-card {
  display: flex;
  flex-direction: column;
}

.post-card-inner {
  background: #ffffff;
  border-radius: 28px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.22);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.post-image-wrapper {
  height: 210px;
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-content {
  padding: 18px 20px 16px;
}

.post-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 9999px;
  background: #0000ff;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 10px;
}

.post-title {
  font-size: 14px;
  font-weight: 400;
  color: #282828;
  margin: 0 0 10px 0;
  line-height: 1.5;
  display: -webkit-box;
  line-clamp: 5;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-title-colon {
  letter-spacing: 1px;
  font-size: 20px;
  font-family: var(--font-primary);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #6b7280;
  margin-top: auto;
  padding: 58px 0px 20px 20px;
}

.post-meta i {
  color: #be009f;

}

.post-author {
  font-weight: 600;
}

@media (max-width: 1024px) {
  .resources-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .resources-section {
    padding: 60px clamp(16px, 4vw, 40px);
  }

  .posts-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
