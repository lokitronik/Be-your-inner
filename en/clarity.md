---
layout: default
title: Clarity | Be Your Inner
lang: en
permalink: /en/clarity/
---

<style>
  /* Sin fondos externos para que se vea tu imagen de los árboles */
  .claridad-wrapper {
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
    padding: 4rem 1.2rem;
  }

  /* EL BOCADILLO SUPERIOR (Look de tu 3ª imagen: Título + Texto en paralelo) */
  .hero-card {
    background: #ffffff;
    padding: clamp(2.5rem, 6vw, 4.5rem);
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center; /* Centrado vertical entre ellos */
    gap: clamp(2rem, 5vw, 4rem); /* Espacio entre título y párrafo */
    text-align: left;
  }

  .hero-title-group {
    flex: 1; /* Ocupa el espacio necesario para el título */
  }

  .hero-text-group {
    flex: 1.5; /* Ocupa un poco más de espacio para el párrafo */
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 400;
    line-height: 1.1;
    color: #1a1a1a;
    text-transform: lowercase;
    font-style: italic;
    margin: 0;
  }
  
  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.7;
    color: #424242;
    margin: 0;
  }

  /* LAS TARJETAS DE ABAJO */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .card {
    background: #ffffff; 
    padding: clamp(2.5rem, 5vw, 3.5rem);
    border-radius: 40px; 
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
  }

  .card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
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
    font: 600 0.8rem 'Lora', serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 2.5rem;
    border-radius: 100px;
    text-decoration: none;
    transition: transform 0.3s ease;
    align-self: center;
  }

  .btn:hover { transform: translateY(-2px); }

  /* MÓVIL: En pantallas pequeñas se apilan uno arriba de otro */
  @media (max-width: 850px) {
    .hero-card {
      flex-direction: column;
      text-align: center;
      padding: 3rem 2rem;
    }
    .card-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="claridad-wrapper">
  <header class="hero-card">
    <div class="hero-title-group">
      <h1 class="byi-h1">find your <br> clarity</h1>
    </div>
    <div class="hero-text-group">
      <p class="byi-body">
        Sometimes the path isn't about moving faster, but about knowing how to stop. Here you will find tools to return to your center and listen to your own voice.
      </p>
    </div>
  </header>

  <div class="card-grid">
    <div class="card">
      <div>
        <h3>individual accompaniment</h3>
        <p>A space to go deeper and bring light where there is confusion, allowing your own inner wisdom to take the lead.</p>
      </div>
      <a href="{{ site.baseurl }}/en/encounters/" class="btn">Learn more</a>
    </div>

    <div class="card">
      <div>
        <h3>self-knowledge guides</h3>
        <p>Tools to connect with your intuition and inner self. Resources and guides designed for you to work at your own pace.</p>
      </div>
      <a href="{{ site.baseurl }}/en/free-resources/" class="btn">Explore resources</a>
    </div>
  </div>
</div>
