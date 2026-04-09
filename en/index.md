---
layout: default
title: Returning Home | Be Your Inner
description: A space of silence to reconnect with your internal compass and your own voice.
lang: en
permalink: /en/
---

<style>
  :root {
    --bg: #f6f4ef;
    /* Ya no usamos --surface para el contenedor principal */
    --text: #1f2521;
    --muted: #4b544f;
    --accent: #4a5944;
    --accent-hover: #3d4b39;
    --line: #d9ddcf;
    /* --radius-xl y --shadow ya no son necesarios para el contenedor */
    --radius-pill: 999px;
  }

  /* Fondo con gradientes sutiles que ahora envuelve todo el contenido */
  .home {
    padding: clamp(4rem, 10vw, 8rem) 1.2rem; /* Más espacio vertical al quitar la tarjeta */
    min-height: 100vh; /* Ocupa todo el alto de la pantalla */
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background:
      radial-gradient(circle at 15% 0%, #e7efe5 0, transparent 45%),
      radial-gradient(circle at 85% 100%, #f3eee4 0, transparent 40%),
      var(--bg);
  }

  .home__container {
    width: min(100%, 720px);
    margin: 0 auto;
    /* Eliminamos fondo, bordes y sombras para que se vea el background de la página */
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    padding: 0; /* El padding lo maneja el padre .home */
    text-align: center;
    
    /* Mantenemos la animación de entrada */
    animation: fadeInUp 1.2s ease-out;
  }

  .home__label {
    margin: 0 0 1rem;
    font: 600 0.8rem/1.1 "Lora", serif;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    opacity: 0.8;
  }

  .home__title {
    margin: 0 0 2rem;
    font: 400 clamp(2.5rem, 7vw, 3.8rem)/1.1 "Cormorant Garamond", serif; /* Ligeramente más grande */
    color: var(--text);
    text-wrap: balance;
    font-style: italic;
  }

  .home__lead {
    margin: 0 auto 1.8rem;
    max-width: 600px;
    font: 400 clamp(1.1rem, 1.3vw, 1.2rem)/1.8 "Lora", serif; /* Un poco más de cuerpo */
    color: var(--muted);
  }

  /* Cita minimalista y etérea, ahora flota sobre el fondo principal */
  .home__quote {
    margin: 3.5rem 0;
    padding: 0;
    border: none;
    background: transparent;
    color: var(--accent);
    font: italic 400 clamp(1.5rem, 3vw, 1.8rem)/1.4 "Cormorant Garamond", serif;
  }

  .home__quote::before {
    content: "—";
    display: block;
    margin-bottom: 0.5rem;
    opacity: 0.4;
  }

  .home__divider {
    border: 0;
    height: 1px;
    /* Degradado que se funde con el fondo principal */
    background: linear-gradient(to right, transparent, rgba(217, 221, 207, 0.7), transparent);
    margin: 2.5rem auto;
    width: 40%;
  }

  .home__ctas {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }

  /* Mantenemos el botón premium */
  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 260px;
    padding: 1.2rem 2.5rem;
    border-radius: var(--radius-pill);
    background: var(--accent);
    color: #f6f4ef !important; /* Blanco hueso para combinar con el fondo */
    font: 600 0.9rem/1 "Lora", serif;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 8px 20px rgba(74, 89, 68, 0.15);
  }

  .btn:hover {
    background: var(--accent-hover);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(52, 67, 57, 0.25);
  }

  /* Efecto de entrada suave */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 640px) {
    .home { padding: 4rem 1.5rem; }
    .home__title { margin-bottom: 1.5rem; }
    .home__lead { font-size: 1.1rem; }
    .btn { width: 100%; }
  }

  @media (prefers-reduced-motion: reduce) {
    .home__container { animation: none; }
    .btn { transition: none; }
  }
</style>

<section class="home">
  <div class="home__container">
    <span class="home__label">Welcome</span>
    <h1 class="home__title">A space to return to yourself</h1>

    <p class="home__lead">
      Here, the noise fades away and the voice of your soul begins to be heard. You do not come to search outside for what is missing—you come to remember that everything you need is already within you.
    </p>

    <p class="home__lead">
      The stillness, clarity, and strength you so often sought in other places have always been with you. Every step inward is a return to your center.
    </p>

    <hr class="home__divider">

    <blockquote class="home__quote">
      "Transformation is not imposed: it is allowed."
    </blockquote>

    <div class="home__ctas">
      <a href="{{ site.baseurl }}/en/clarity/" class="btn">Start the journey</a>
    </div>
  </div>
</section>
