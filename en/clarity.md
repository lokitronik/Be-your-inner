---
layout: default
title: Clarity | Be Your Inner
lang: en
permalink: /en/clarity/
---

<style>
  .claridad-wrapper {
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    padding: 60px 1.2rem;
    text-align: center;
  }

  /* EL BOCADILLO BLANCO: Protege todo el contenido para que sea legible */
  .hero-card {
    background: #ffffff;
    padding: clamp(2.5rem, 6vw, 4rem);
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    margin-bottom: 3rem;
    text-align: center;
  }

  /* H1 DENTRO: Centrado, sin cursiva y estructurado */
  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 400;
    font-style: normal; /* Cero cursiva */
    line-height: 1.2;
    color: #1a1a1a;
    text-transform: lowercase;
    margin: 0 0 1.5rem 0; /* Espacio con el texto de abajo */
  }
  
  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #424242;
    max-width: 600px;
    margin: 0 auto;
  }

  /* LAS DOS TARJETAS DE ABAJO */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .card {
    background: #ffffff; 
    padding: 2.5rem 2rem;
    border-radius: 40px; 
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
  }

  .card h2 {
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
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #ffffff !important;
    font: 600 0.85rem 'Lora', serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 2.5rem;
    border-radius: 100px;
    text-decoration: none;
    transition: transform 0.3s ease;
    align-self: center;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .card-grid { grid-template-columns: 1fr; }
    .hero-card { padding: 3rem 1.5rem; }
  }
</style>

<div class="claridad-wrapper">
  <header class="hero-card">
    <h1 class="byi-h1">find your clarity</h1>
    <p class="byi-body">
      Sometimes the path isn't about moving faster, but about knowing how to stop. Here you will find tools to return to your center and listen to your own voice.
    </p>
  </header>

  <div class="card-grid">
    <div class="card">
      <div>
        <h2>individual accompaniment</h2>
        <p>A space to go deeper and bring light where there is confusion, allowing your own inner wisdom to take the lead.</p>
      </div>
      <a href="{{ site.baseurl }}/en/encounters/" class="btn">Learn more</a>
    </div>

    <div class="card">
      <div>
        <h2>self-knowledge guides</h2>
        <p>Resources and guides designed for you to work at your own pace. Simple resources to return to yourself naturally.</p>
      </div>
      <a href="{{ site.baseurl }}/en/free-resources/" class="btn">Explore</a>
    </div>
  </div>
</div>
