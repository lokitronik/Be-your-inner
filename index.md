---
layout: default
title: Volver a casa | Be Your Inner
description: Un espacio de silencio para reconectar con tu brújula interna y tu propia voz.
lang: es
permalink: /
---

<style>
  :root {
    /* Eliminamos cualquier rastro de blanco roto */
    --text-main: #1a1a1a;
    --text-muted: #424242;
    --accent: #4a5944;
    --white-pure: #ffffff;
    --radius-pill: 100px;
  }

  /* Contenedor principal sin fondos de color */
  .main-wrapper {
    padding: 60px 20px;
    background: transparent; /* O el fondo general de tu web si es blanco */
    display: flex;
    justify-content: center;
  }

  /* TU RECUADRO BLANCO (Único protagonista) */
  .card-home {
    background: var(--white-pure);
    width: 100%;
    max-width: 700px;
    padding: clamp(2rem, 8vw, 4rem);
    border-radius: 40px; /* Bordes redondeados suaves */
    box-shadow: 0 15px 40px rgba(0,0,0,0.04); /* Sombra muy sutil para dar relieve */
    text-align: center;
  }

  .home-label {
    font-family: 'Lora', serif;
    font-size: 0.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.5rem;
    display: block;
  }

  .home-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 400;
    font-style: italic; /* Como en tu captura */
    line-height: 1.2;
    color: var(--text-main);
    margin-bottom: 2rem;
  }

  .home-lead {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }

  .home-divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #e0e0e0, transparent);
    margin: 2.5rem auto;
    width: 60%;
  }

  .btn-primary {
    display: inline-block;
    background: var(--accent);
    color: #fff !important;
    font-family: 'Lora', serif;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3.5rem;
    border-radius: var(--radius-pill);
    text-decoration: none;
    transition: all 0.3s ease;
    margin-top: 1rem;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 89, 68, 0.2);
    filter: brightness(1.1);
  }

  @media (max-width: 600px) {
    .card-home {
      padding: 2.5rem 1.5rem;
      border-radius: 25px;
    }
  }
</style>

<div class="main-wrapper">
  <div class="card-home">
    <span class="home-label">Bienvenido</span>
    <h1 class="home-h1">Un espacio para volver a ti</h1>

    <p class="home-lead">
      Aquí el ruido se apaga y la voz de tu alma comienza a escucharse. No vienes a buscar fuera lo que falta — vienes a recordar que dentro de ti ya está todo lo que necesitas.
    </p>

    <p class="home-lead">
      La calma, la claridad y la fuerza que tantas veces buscaste siempre estuvieron contigo.
    </p>

    <hr class="home-divider">

    <div class="home-ctas">
      <a href="{{ site.baseurl }}/claridad/" class="btn-primary">Claridad</a>
    </div>
  </div>
</div>
