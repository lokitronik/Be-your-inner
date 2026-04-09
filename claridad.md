---
layout: default
title: Claridad | Be Your Inner
---

<style>
  /* 1. Contenedor Principal */
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    box-sizing: border-box;
    text-align: center; /* Centra el texto de cabecera */
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    text-transform: lowercase; /* Mantiene tu estilo de minúsculas */
  }
  
  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* 2. Grid de Tarjetas (Bocadillos) */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Dos columnas en PC */
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto 5rem;
    padding: 0 1.5rem;
  }

  .card {
    background: #faf9f7; /* Color arena muy suave */
    padding: 3rem 2rem;
    border-radius: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;
    border: 1px solid #f0efed;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #1a1a1a;
    text-transform: lowercase;
  }

  .card p {
    font-family: 'Lora', serif;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #666;
    margin-bottom: 2rem;
  }

  /* 3. Botón Estilizado */
  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #fff !important;
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }

  .btn:hover {
    background: #3e4a39;
    letter-spacing: 3px;
  }

  /* 4. Ajustes para Móvil */
  @media (max-width: 768px) {
    .card-grid {
      grid-template-columns: 1fr; /* Una columna en móvil */
      gap: 1.5rem;
    }
    
    .byi-h1 {
      font-size: 2.2rem;
    }

    .card {
      padding: 2.5rem 1.5rem;
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
