---
layout: default
title: Sobre Manel | Be Your Inner
description: Soy Manel, y mi propósito es acompañarte a recordar quién eres más allá de las máscaras y del ruido del día a día.
lang: es
permalink: /sobre-mi/
---

<style>
  .sobre-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #B5835A;
    margin-bottom: 1.2rem;
    font-weight: 400;
  }

  .sobre-hero {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  .sobre-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    display: block;
    border: 1px solid #eee;
    padding: 8px;
    background: #fff;
  }

  .sobre-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 1rem;
    color: #1a1a1a;
  }

  .sobre-intro {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #424242;
    margin: 0;
  }

  .sobre-divider {
    border: none;
    border-top: 1px solid #eee;
    margin: 3.5rem 0;
  }

  .sobre-block {
    margin-bottom: 2.5rem;
  }

  .sobre-block-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #B5835A;
    margin-bottom: 0.8rem;
  }

  .sobre-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.9;
    color: #555;
    margin: 0;
  }

  .sobre-quote {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.7rem;
    border-left: 2px solid #B5835A;
    padding-left: 1.5rem;
    margin: 3.5rem 0;
    color: #556B2F;
    line-height: 1.4;
  }

  .sobre-ctas {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 4rem;
    flex-wrap: wrap;
  }

  /* Botón secundario para mantener el estilo minimalista */
  .btn-outline {
    display: inline-block;
    border: 1px solid #556B2F;
    color: #556B2F !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 2.5rem;
    border-radius: 4px;
    text-decoration: none;
    background: transparent;
    transition: all 0.3s ease;
  }

  .btn-outline:hover {
    background: #f7f8f4;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    .sobre-hero {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
    .sobre-photo {
      margin: 0 auto;
      width: 180px;
      height: 180px;
    }
    .sobre-h1 {
      font-size: 2.2rem;
    }
    .sobre-ctas .btn, .sobre-ctas .btn-outline {
      width: 100%;
      text-align: center;
    }
  }
</style>

<div class="container" style="max-width: 750px; margin-top: 4rem; margin-bottom: 6rem;">

  <p class="sobre-label">Sobre mí</p>

  <div class="sobre-hero">
    <img
      src="{{ site.baseurl }}/assets/images/manel.png"
      alt="Manel, Be Your Inner"
      class="sobre-photo"
    >
    <div>
      <h1 class="sobre-h1">Hola, soy Manel</h1>
      <p class="sobre-intro">Mi propósito es acompañarte a recordar quién eres, más allá de las máscaras y del ruido del día a día.</p>
    </div>
  </div>

  <hr class="sobre-divider">

  <div class="sobre-block">
    <p class="sobre-block-label">Mi camino</p>
    <p class="sobre-body">Durante mucho tiempo busqué fuera lo que aún no sabía cultivar por dentro. Mi propio viaje de autodescubrimiento me enseñó que el cambio real no es una meta a alcanzar, sino un reencuentro con lo que siempre ha estado ahí, esperando a ser visto.</p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">Be Your Inner</p>
    <p class="sobre-body">Este espacio nace para quienes sienten el llamado de vivir con más autenticidad y consciencia. En <strong>Be Your Inner</strong>, entiendo que cada energía es única y cada alma tiene su propio lenguaje; por eso, no creo en fórmulas mágicas, sino en la escucha profunda.</p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">Mi presencia</p>
    <p class="sobre-body">Acompaño desde la intuición y la calma, utilizando herramientas energéticas y espirituales para ayudarte a soltar las cargas que ya no te pertenecen, abriendo espacio a tu verdadera esencia.</p>
  </div>

  <blockquote class="sobre-quote">
    "La transformación no se impone: se permite."
  </blockquote>

  <p class="sobre-body" style="text-align: center; color: #888; font-style: italic;">
    Si estas palabras resuenan contigo, será un honor caminar a tu lado.
  </p>

  <div class="sobre-ctas">
    <a href="{{ site.baseurl }}/encuentros/" class="btn">Explorar sesiones</a>
    <a href="{{ site.baseurl }}/contacto/" class="btn-outline">Hablemos</a>
  </div>

</div>
