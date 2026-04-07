---
layout: default
title: Returning Home | Be Your Inner
description: A space of silence to reconnect with your internal compass and your own voice.
lang: en
permalink: /en/
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

    <p class="home-label">Welcome</p>
    <h1 class="home-h1">A space to return to yourself</h1>

    <p class="home-lead">
      Here, the noise fades away and the voice of your soul begins to be heard. You do not come to search outside for what is missing — you come to remember that everything you need is already within you.
    </p>

    <p class="home-lead">
      The stillness, clarity, and strength you so often sought in other places have always been with you. Every step inward is a return to your center.
    </p>

    <blockquote class="home-quote">
      "Transformation is not imposed: it is allowed."
    </blockquote>

    <hr class="home-divider">

    <div class="home-ctas">
      <a href="{{ site.baseurl }}/en/clarity/" class="btn">Clarity</a>
    </div>

  </div>
</div>
