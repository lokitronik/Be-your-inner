---
layout: default
title: Volver a casa | Be Your Inner
description: Un espacio de silencio para reconectar con tu brújula interna y tu propia voz.
lang: es
permalink: /
---

<style>
  :root {
    --bg: #f6f4ef;
    --surface: #fffdf9;
    --text: #1f2521;
    --muted: #4b544f;
    --accent: #4a5944;
    --accent-hover: #3d4b39;
    --line: #d9ddcf;
    --radius-xl: 32px; /* Un poco más suave */
    --radius-pill: 999px;
    --shadow: 0 20px 45px rgba(33, 43, 36, 0.08);
  }

  /* Fondo con gradientes sutiles para dar profundidad orgánica */
  .home {
    padding: clamp(3rem, 8vw, 6rem) 1.2rem;
    min-height: 90vh;
    display: flex;
    align-items: center;
    background:
      radial-gradient(circle at 15% 0%, #e7efe5 0, transparent 45%),
      radial-gradient(circle at 85% 100%, #f3eee4 0, transparent 40%),
      var(--bg);
  }

  .home__container {
    width: min(100%, 720px);
    margin: 0 auto;
    background: var(--surface);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow);
    padding: clamp(2rem, 5vw, 4rem);
    text-align: center; /* Centrado para reforzar el concepto de "Centro" */
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
    font: 400 clamp(2.2rem, 6vw, 3.4rem)/1.1 "Cormorant Garamond", serif;
    color: var(--text);
    text-wrap: balance;
    font-style: italic;
  }

  .home__lead {
    margin: 0 auto 1.5rem;
    max-width: 580px;
    font: 400 clamp(1.05rem, 1.2vw, 1.15rem)/1.8 "Lora", serif;
    color: var(--muted);
  }

  /* Cita minimalista y etérea */
  .home__quote {
    margin: 3rem 0;
    padding: 0;
    border: none;
    background: transparent;
    color: var(--accent);
    font: italic 400 1.6rem/1.4 "Cormorant Garamond", serif;
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
    background: linear-gradient(to right, transparent, var(--line), transparent);
    margin: 2rem auto;
    width: 50%;
  }

  .home__ctas {
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;
  }

  /* Botón con micro-interacción refinada */
  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 240px;
    padding: 1.1rem 2.5rem;
    border-radius: var(--radius-pill);
    background: var(--accent);
    color: #f6f4ef !important; /* Blanco hueso para no contrastar tan duro */
    font: 600 0.85rem/1 "Lora", serif;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 8px 15px rgba(74, 89, 68, 0.12);
  }

  .btn:hover {
    background: var(--accent-hover);
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(52, 67, 57, 0.2);
  }

  /* Efecto de entrada suave */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .home__container {
    animation: fadeInUp 1.2s ease-out;
  }

  @media (max-width: 640px) {
    .home { padding: 2rem 1rem; }
    .home__container {
      padding: 2.5rem 1.5rem;
      border-radius: 24px;
    }
    .btn { width: 100%; }
  }

  @media (prefers-reduced-motion: reduce) {
    .home__container { animation: none; }
    .btn { transition: none; }
  }
</style>

<section class="home">
  <div class="home__container">
    <span class="home__label">Bienvenido</span>
    <h1 class="home__title">Un espacio para volver a ti</h1>

    <p class="home__lead">
      Aquí el ruido se apaga y la voz de tu alma comienza a escucharse. No vienes a buscar fuera lo que falta; vienes a recordar que dentro de ti ya está todo lo que necesitas.
    </p>

    <p class="home__lead">
      La calma, la claridad y la fuerza que tantas veces buscaste siempre estuvieron contigo. Cada paso hacia dentro es un regreso a tu centro.
    </p>

    <hr class="home__divider">

    <blockquote class="home__quote">
      "La transformación no se impone: se permite."
    </blockquote>

    <div class="home__ctas">
      <a href="{{ site.baseurl }}/claridad/" class="btn">Empezar el camino</a>
    </div>
  </div>
</section>
