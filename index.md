---
layout: default
title: Volver a casa | Be Your Inner
description: Un espacio de silencio para reconectar con tu brújula interna y tu propia voz.
lang: es
permalink: /
---
<style>
  .container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 0 1.5rem; /* Margen interno de seguridad */
    box-sizing: border-box;
  }

  .home-h1, .byi-h1, .sobre-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; /* Tamaño para escritorio */
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 2rem;
    color: #1a1a1a;
  }
  
  .home-lead, .byi-body, .sobre-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.85;
    color: #424242;
    margin-bottom: 1.5rem;
    text-align: left; /* Alineación más legible */
  }
  
  .home-ctas {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .btn {
    display: inline-block;
    background: #4a5944; /* El verde de tu captura */
    color: #fff !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3rem;
    border-radius: 50px; /* Bordes redondeados como en tu captura */
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    text-align: center;
    min-width: 200px;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1.2rem; /* Un poco menos de margen en móviles muy pequeños */
    }
    .home-h1, .byi-h1, .sobre-h1 {
      font-size: 2rem; 
    }
    .home-lead, .byi-body, .sobre-body {
      font-size: 1rem;
    }
    .btn {
      width: 100%; 
      max-width: 300px;
    }
    .byi-steps { /* Para la página de Claridad */
      grid-template-columns: 1fr !important; 
    }
  }
</style>
<div class="strip">
  <div class="container" style="max-width: 680px; margin: 0 auto;">

    <p class="home-label">Bienvenido</p>
    <h1 class="home-h1">Un espacio para volver a ti</h1>

    <p class="home-lead">
      Aquí el ruido se apaga y la voz de tu alma comienza a escucharse. No vienes a buscar fuera lo que falta — vienes a recordar que dentro de ti ya está todo lo que necesitas.
    </p>

    <p class="home-lead">
      La calma, la claridad y la fuerza que tantas veces buscaste en otros lugares siempre estuvieron contigo. Cada paso hacia dentro es un regreso a tu centro.
    </p>

    <blockquote class="home-quote">
      "La transformación no se impone: se permite."
    </blockquote>

    <hr class="home-divider">

    <div class="home-ctas">
      <a href="{{ site.baseurl }}/claridad/" class="btn">Claridad</a>
    </div>

  </div>
</div>
