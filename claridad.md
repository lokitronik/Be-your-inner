---
layout: default
title: Claridad | Be Your Inner
lang: es
permalink: /claridad/
---

<style>
  main, .site-content, .wrapper, .site-main { 
    background: transparent !important; 
    box-shadow: none !important;
    border: none !important;
  }

  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 1.2rem;
    text-align: center;
    background: transparent !important;
  }

  .hero-bocadillo {
    background: #ffffff;
    padding: 3.5rem 2.5rem;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
    margin-bottom: 3rem;
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 400;
    font-style: normal; 
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    text-transform: lowercase;
  }
  
  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #424242;
    max-width: 550px;
    margin: 0 auto;
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 850px;
    margin: 0 auto 4rem;
  }

  .card {
    background: #ffffff;
    padding: 2.5rem 1.5rem;
    border-radius: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #f0f0f0;
    min-height: 280px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  .card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: lowercase;
    color: #1a1a1a;
  }

  .card p {
    font-family: 'Lora', serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #fff !important;
    font-family: 'Lora', serif;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.9rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .byi-h1 { font-size: 2rem; }
    .card-grid { grid-template-columns: 1fr; gap: 1.5rem; padding: 0 1rem; }
    .hero-bocadillo { padding: 2.5rem 1.5rem; }
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
