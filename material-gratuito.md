---
layout: default
title: Material Gratuito | Be Your Inner
description: Recursos gratuitos para tu camino de escucha interior.
lang: es
permalink: /material-gratuito/
---
<style>
  html, body {
    overflow-x: hidden !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .container {
    width: 100% !important;
    max-width: 800px !important;
    margin: 0 auto !important;
    padding: 2rem 1rem !important; 
    box-sizing: border-box !important;
  }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem !important; 
    text-align: center;
    margin-bottom: 1rem !important;
    text-transform: lowercase;
  }

  .container p {
    font-family: 'Lora', serif;
    font-size: 1rem !important;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .card-grid {
    display: grid !important;
    grid-template-columns: 1fr 1fr; /* PC */
    gap: 20px;
    padding: 0 10px;
    max-width: 900px;
    margin: 0 auto;
  }

  .card {
    background: #faf9f7;
    padding: 2.5rem 1.5rem !important; 
    border-radius: 12px;
    border: 1px solid #f0efed;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box !important;
  }

  .card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem !important;
    margin-bottom: 0.8rem;
    text-transform: lowercase;
  }

  .card p {
    font-size: 0.9rem !important;
    line-height: 1.4 !important;
    margin-bottom: 1.5rem !important;
  }

  /* 5. FIX ESPECÍFICO PARA MÓVIL */
  @media (max-width: 768px) {
    .card-grid {
      grid-template-columns: 1fr !important; 
      padding: 0 15px !important;
    }

    .card {
      padding: 1.5rem !important; 
      margin-bottom: 15px !important;
      min-height: auto !important; 
    }

    h1 {
      font-size: 1.8rem !important;
    }

    .btn {
      width: 100% !important; 
      padding: 0.8rem 1rem !important;
      font-size: 0.75rem !important;
    }
  }
</style>
<div class="container">
  <h1>Recursos: Herramientas para tu camino</h1>
  
  <p>He creado estos recursos para que puedas empezar tu propio camino de escucha interior hoy mismo:</p>
  
 <div class="card-grid">
    <div class="card">
      <h3>Guía del Péndulo</h3>
      <p>Una herramienta sencilla para empezar a conectar con tu intuición hoy mismo. Aprende a usar el péndulo como un puente hacia tu sabiduría interna.</p>
      <a href="{{ '/assets/docs/guia-pendulo.pdf' | relative_url }}" class="btn" download>DESCARGAR GUÍA</a>
    </div>

    <!-- Guía Próximamente 1 -->
    <div class="card" style="opacity: 0.7; filter: grayscale(0.3);">
      <h3>Guía de las Claris</h3>
      <p>Explora tus capacidades de percepción sutil y claridad mental.</p>
      <span style="display: inline-block; margin-top: 1.5rem; font-family: 'Cormorant Garamond', serif; font-style: italic; color: #BC8A78;">Próximamente...</span>
    </div>

    <!-- Guía Próximamente 2 -->
    <div class="card" style="opacity: 0.7; filter: grayscale(0.3);">
      <h3>Guía de la Intuición</h3>
      <p>Ejercicios prácticos para fortalecer tu brújula interna.</p>
      <span style="display: inline-block; margin-top: 1.5rem; font-family: 'Cormorant Garamond', serif; font-style: italic; color: #BC8A78;">Próximamente...</span>
    </div>
  </div>
  
  <div style="margin-top: 5rem; text-align: center;">
    <a href="{{ '/claridad/' | relative_url }}" style="text-decoration: none; color: #556B2F; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 600;">← Volver a Claridad</a>
  </div>
</div>
