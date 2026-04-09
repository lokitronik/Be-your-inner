---
layout: default
title: Claridad | Be Your Inner
---

<style>
  /* 1. Contenedor Principal más compacto */
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 2.5rem 1.2rem; /* Reducido para que no baje tanto el contenido */
    box-sizing: border-box;
    text-align: center;
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem; /* Un poco más pequeño */
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1a1a1a;
    text-transform: lowercase;
  }
  
  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
  }

  /* 2. Grid de Tarjetas */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    max-width: 850px;
    margin: 0 auto 4rem;
    padding: 0 1rem;
  }

  .card {
    background: #faf9f7;
    padding: 2rem 1.5rem; /* Padding reducido para que la tarjeta sea más pequeña */
    border-radius: 12px; /* Bordes un poco más finos */
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #f0efed;
    min-height: 250px; /* Asegura que no sean gigantescas pero quepan los textos */
  }

  .card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    text-transform: lowercase;
  }

  .card p {
    font-family: 'Lora', serif;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #666;
    margin-bottom: 1.5rem;
  }

  /* 3. Botón más fino */
  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #fff !important;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    border: none;
  }

  /* 4. AJUSTES CLAVE PARA MÓVIL (Compacto) */
  @media (max-width: 768px) {
    .container {
      padding: 1.5rem 1rem; /* Menos espacio arriba */
    }

    .byi-h1 {
      font-size: 1.8rem;
    }

    .card-grid {
      grid-template-columns: 1fr;
      gap: 1rem; /* Tarjetas más pegadas entre sí */
      padding: 0 1.5rem;
    }

    .card {
      padding: 1.5rem; /* Mucho más compacto en móvil */
      min-height: auto; /* Que la tarjeta se adapte al texto sin sobrar espacio */
    }

    .card h3 {
      font-size: 1.3rem;
    }

    .btn {
      width: auto; /* Que el botón no ocupe todo el ancho si no quieres */
      padding: 0.7rem 2rem;
    }
  }
</style>


<div class="container">
  <h1 class="byi-h1">encuentra tu claridad</h1>
  <p class="byi-body">A veces el camino no consiste en avanzar más rápido, sino en saber detenerse. Aquí tienes diferentes herramientas para recuperar tu centro, ya sea a través de mis guías o en sesiones de acompañamiento conmigo.</p>
</div>

<div class="card-grid">

  <div class="card">
    <div>
      <h3>acompañamiento individual</h3>
      <p>Un espacio para profundizar y poner luz donde ahora hay confusión, permitiendo que tu propia sabiduría tome la palabra.</p>
    </div>
    <a href="{{ site.baseurl }}/encuentros/" class="btn">SABER MÁS</a>
  </div>

  <div class="card">
    <div>
      <h3>guías de autoconocimiento</h3>
      <p>Recursos y guías diseñadas para que trabajes a tu propio ritmo. Recursos sencillos para volver a ti.</p>
    </div>
    <a href="{{ site.baseurl }}/material-gratuito/" class="btn">EXPLORAR RECURSOS</a>
  </div>

</div>
