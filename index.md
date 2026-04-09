---
layout: default
title: Volver a casa | Be Your Inner
description: Un espacio de silencio para reconectar con tu brújula interna y tu propia voz.
lang: es
permalink: /
---

<style>
  /* Diseño ultra-limpio: Solo lo esencial */
  .home-section {
    padding: 60px 1.2rem;
    display: flex;
    justify-content: center;
    background: #ffffff; /* Fondo total blanco puro */
  }

  .home-card {
    background: #ffffff;
    width: min(100%, 720px);
    padding: clamp(2rem, 6vw, 4rem);
    border-radius: 40px;
    text-align: center;
    /* Una sombra casi invisible para dar relieve sin ensuciar */
    box-shadow: 0 10px 40px rgba(0,0,0,0.04); 
  }

  .home-label {
    font: 600 0.75rem 'Lora', serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #4a5944;
    margin-bottom: 1rem;
    display: block;
  }

  .home-h1 {
    font: italic 400 clamp(2.2rem, 5vw, 3rem) 'Cormorant Garamond', serif;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .home-lead {
    font: 400 1.1rem/1.8 'Lora', serif;
    color: #424242;
    margin-bottom: 1.5rem;
  }

  .home-divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #eee, transparent);
    margin: 2rem auto;
    width: 60%;
  }

  .btn {
    display: inline-block;
    background: #4a5944;
    color: #fff !important;
    font: 600 0.85rem 'Lora', serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3.5rem;
    border-radius: 100px;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(74, 89, 68, 0.2);
  }

  @media (max-width: 600px) {
    .home-card { padding: 2.5rem 1.5rem; }
    .btn { width: 100%; box-sizing: border-box; }
  }
</style>

<section class="home-section">
  <div class="home-card">
    <span class="home-label">Bienvenido</span>
    <h1 class="home-h1">Un espacio para volver a ti</h1>

    <p class="home-lead">
      Aquí el ruido se apaga y la voz de tu alma comienza a escucharse. No vienes a buscar fuera lo que falta — vienes a recordar que dentro de ti ya está todo lo que necesitas.
    </p>

    <p class="home-lead">
      La calma, la claridad y la fuerza siempre estuvieron contigo.
    </p>

    <hr class="home-divider">

    <a href="{{ site.baseurl }}/claridad/" class="btn">Claridad</a>
  </div>
</section>


