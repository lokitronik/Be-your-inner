---
layout: default
title: claridad
---
<style>
  .container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 0 1.5rem;
    box-sizing: border-box;
  }

  .home-h1, .byi-h1, .sobre-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
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
    text-align: left; 
  }
  
  .home-ctas {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #fff !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3rem;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    text-align: center;
    min-width: 200px;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1.2rem; /
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
    .byi-steps { 
      grid-template-columns: 1fr !important; 
    }
  }
</style>

<div class="container" style="margin-bottom: 0; padding-bottom: 20px;">
  <h1>encuentra tu claridad</h1>
  <p>A veces el camino no consiste en avanzar más rápido, sino en saber detenerse. Aquí tienes diferentes herramientas para recuperar tu centro, ya sea a través de mis guías o en sesiones de acompañamiento conmigo.</p>
</div>

<div class="card-grid">

  <div class="card">
    <h3>acompañamiento individual</h3>
    <p>Un espacio para profundizar y poner luz donde ahora hay confusión, permitiendo que tu propia sabiduría tome la palabra.</p>
    <a href="{{ site.baseurl }}/encuentros/" class="btn">SABER MÁS</a>
  </div>

  <div class="card">
    <h3>guías de autoconocimiento</h3>
    <p>Recursos y guías diseñadas para que trabajes a tu propio ritmo. Recursos sencillos para volver a ti.</p>
    <a href="{{ site.baseurl }}/material-gratuito/" class="btn">EXPLORAR RECURSOS</a>
  </div>

</div>
