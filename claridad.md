---
layout: default
title: Claridad | Be Your Inner
lang: es
permalink: /claridad/
---

<style>
  /* Sin fondo aquí para que se vea tu imagen de los árboles */
  .claridad-wrapper {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: clamp(2rem, 5vw, 4rem) 1.2rem;
    text-align: center;
  }

  /* ESTE ES EL BOCADILLO SUPERIOR PARA LA LEGIBILIDAD */
  .hero-card {
    background: #ffffff;
    padding: clamp(2rem, 5vw, 3.5rem);
    border-radius: 32px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    margin-bottom: 3rem; /* Espacio antes de las tarjetas de abajo */
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1a1a1a;
    text-transform: lowercase;
    font-style: italic;
  }
  
  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.7;
    color: #424242;
    max-width: 600px;
    margin: 0 auto;
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .card {
    background: #ffffff; 
    padding: clamp(2rem, 5vw, 3rem);
    border-radius: 32px; 
    box-shadow: 0 12px 35px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 280px;
    text-align: center;
  }

  .card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    text-transform: lowercase;
    color: #1a1a1a;
  }

  .card p {
    font-family: 'Lora', serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #ffffff !important;
    font: 600 0.8rem 'Lora', serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 100px;
    text-decoration: none;
    transition: transform 0.3s ease;
    align-self: center;
  }

  .btn:hover { transform: translateY(-2px); }

  @media (max-width: 768px) {
    .card-grid { grid-template-columns: 1fr; }
    .hero-card { padding: 2rem 1.5rem; }
  }
</style>

<div class="claridad-wrapper">
  <header class="hero-card">
    <h1 class="byi-h1">encuentra tu claridad</h1>
    <p class="byi-body">
      A veces el camino no consiste en avanzar más rápido, sino en saber detenerse. Aquí tienes diferentes herramientas para recuperar tu centro y escuchar tu propia voz.
    </p>
  </header>

  <div class="card-grid">
    <div class="card">
      <div>
        <h3>acompañamiento individual</h3>
        <p>Un espacio para profundizar y poner luz donde ahora hay confusión, permitiendo que tu propia sabiduría tome la palabra.</p>
      </div>
      <a href="{{ site.baseurl }}/encuentros/" class="btn">Saber más</a>
    </div>

    <div class="card">
      <div>
        <h3>guías de autoconocimiento</h3>
        <p>Recursos y guías diseñadas para que trabajes a tu propio ritmo. Recursos sencillos para volver a ti de forma natural.</p>
      </div>
      <a href="{{ site.baseurl }}/material-gratuito/" class="btn">Explorar</a>
    </div>
  </div>
</div>
