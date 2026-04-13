---
layout: default
title: Claridad | Be Your Inner
lang: es
permalink: /claridad/
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
  <div class="hero-bocadillo">
    <h1 class="byi-h1">Encuentra tu claridad</h1>
    <p class="byi-body">A veces el camino no consiste en avanzar más rápido, sino en saber detenerse. Aquí tienes diferentes herramientas para recuperar tu centro, ya sea a través de mis guías o en sesiones de acompañamiento conmigo.</p>
  </div>

  <div class="card-grid">
    <div class="card">
      <div>
        <h3>Acompañamiento individual</h3>
        <p>Un espacio para profundizar y poner luz donde ahora hay confusión, permitiendo que tu propia sabiduría tome la palabra.</p>
      </div>
      <a href="{{ site.baseurl }}/encuentros/" class="btn">SABER MÁS</a>
    </div>

    <div class="card">
      <div>
        <h3>Guías de autoconocimiento</h3>
        <p>Recursos y guías diseñadas para que trabajes a tu propio ritmo. Recursos sencillos para volver a ti de forma natural.</p>
      </div>
      <a href="{{ site.baseurl }}/material-gratuito/" class="btn">EXPLORAR RECURSOS</a>
    </div>
  </div>
</div>
