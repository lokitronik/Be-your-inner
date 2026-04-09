---
layout: default
title: Claridad | Be Your Inner
lang: es
permalink: /claridad/
---

<style>
  :root {
    --text-main: #1a1a1a;
    --text-muted: #424242;
    --accent: #4a5944;
    --accent-hover: #3d4b39;
    --white-pure: #ffffff;
    --border-soft: #f0f0f0;
  }

  .claridad {
    background: var(--white-pure); /* Fondo total blanco */
    padding: clamp(3rem, 8vw, 6rem) 1.2rem;
    min-height: 90vh;
  }

  .claridad__container {
    width: min(100%, 850px);
    margin: 0 auto;
  }

  .claridad__hero {
    text-align: center;
    margin-bottom: clamp(2.5rem, 5vw, 4rem);
  }

  .claridad__title {
    margin: 0 0 1rem;
    color: var(--text-main);
    font: 400 clamp(2.2rem, 5vw, 3rem)/1.15 "Cormorant Garamond", serif;
    text-transform: lowercase; /* Mantenemos tu estilo zen */
    font-style: italic;
  }

  .claridad__lead {
    width: min(100%, 650px);
    margin: 0 auto;
    color: var(--text-muted);
    font: 400 1.1rem/1.8 "Lora", serif;
  }

  .claridad__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  /* LA CAJA: Una sola, blanca, con sombra suave */
  .claridad__card {
    background: var(--white-pure);
    border: 1px solid var(--border-soft);
    border-radius: 32px;
    padding: clamp(2rem, 4vw, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  }

  .claridad__card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.06);
  }

  .claridad__card-title {
    margin: 0 0 1rem;
    color: var(--text-main);
    font: 400 clamp(1.4rem, 2.5vw, 1.7rem)/1.2 "Cormorant Garamond", serif;
    text-transform: lowercase;
  }

  .claridad__card-body {
    margin: 0 0 2rem;
    color: var(--text-muted);
    font: 400 1rem/1.7 "Lora", serif;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    background: var(--accent);
    color: #fff !important;
    text-decoration: none;
    font: 600 0.75rem/1 "Lora", serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 100px;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background: var(--accent-hover);
    box-shadow: 0 8px 15px rgba(74, 89, 68, 0.2);
  }

  @media (max-width: 760px) {
    .claridad__grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .claridad__card { padding: 2rem; }
    .btn { width: 100%; }
  }
</style>

<section class="claridad">
  <div class="claridad__container">
    <header class="claridad__hero">
      <h1 class="claridad__title">encuentra tu claridad</h1>
      <p class="claridad__lead">
        A veces el camino no consiste en avanzar más rápido, sino en saber detenerse. Aquí tienes herramientas para recuperar tu centro y escuchar tu propia voz.
      </p>
    </header>

    <div class="claridad__grid">
      <article class="claridad__card">
        <div>
          <h2 class="claridad__card-title">acompañamiento individual</h2>
          <p class="claridad__card-body">
            Un espacio para profundizar y poner luz donde ahora hay confusión, permitiendo que tu propia sabiduría tome la palabra.
          </p>
        </div>
        <a href="{{ site.baseurl }}/encuentros/" class="btn">Saber más</a>
      </article>

      <article class="claridad__card">
        <div>
          <h2 class="claridad__card-title">guías de autoconocimiento</h2>
          <p class="claridad__card-body">
            Recursos y guías diseñadas para que trabajes a tu propio ritmo. Recursos sencillos para volver a ti de forma natural.
          </p>
        </div>
        <a href="{{ site.baseurl }}/material-gratuito/" class="btn">Explorar</a>
      </article>
    </div>
  </div>
</section>
