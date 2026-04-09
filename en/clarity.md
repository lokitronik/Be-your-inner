---
layout: default
title: Clarity | Be Your Inner
lang: en
permalink: /en/clarity/
---

<style>
  /* Sin fondo de sección: respeta el background general de tu web */
  .claridad-wrapper {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: clamp(3rem, 8vw, 5rem) 1.2rem;
    text-align: center;
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    text-transform: lowercase;
    font-style: italic; /* Toque elegante de tu marca */
  }
  
  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #424242;
    margin-bottom: 3.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  /* EL BOCADILLO BLANCO: Único recuadro que resalta */
  .card {
    background: #ffffff; 
    padding: clamp(2rem, 5vw, 3rem);
    border-radius: 32px; 
    box-shadow: 0 12px 35px rgba(0,0,0,0.04); /* Sombra muy sutil */
    border: 1px solid #f0f0f0;
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

  /* Botón fino y limpio */
  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #ffffff !important;
    font-family: 'Lora', serif;
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 100px;
    text-decoration: none;
    transition: transform 0.3s ease, background-color 0.3s ease;
    align-self: center;
  }

  .btn:hover {
    transform: translateY(-2px);
    background: #3d4b39;
    box-shadow: 0 8px 15px rgba(74, 89, 68, 0.15);
  }

  @media (max-width: 768px) {
    .card-grid {
      grid-template-columns: 1fr;
      padding: 0 0.5rem;
    }
    .byi-h1 { font-size: 2rem; }
    .btn { width: 100%; box-sizing: border-box; }
  }
</style>

<div class="claridad-wrapper">
  <h1 class="byi-h1">find your clarity</h1>
  <p class="byi-body">
    Sometimes the path isn't about moving faster, but about knowing how to stop. Here you will find different tools to return to your center.
  </p>

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
