---
layout: default
title: clarity
lang: en
permalink: /en/clarity/
---
<style>
  .container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 0 1.5rem; /* Margen interno de seguridad */
    box-sizing: border-box;
  }

  .home-h1, .byi-h1, .sobre-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; /* Tamaño para escritorio */
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
    text-align: left; /* Alineación más legible */
  }
  
  .home-ctas {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .btn {
    display: inline-block;
    background: #4a5944; /* El verde de tu captura */
    color: #fff !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3rem;
    border-radius: 50px; /* Bordes redondeados como en tu captura */
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    text-align: center;
    min-width: 200px;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1.2rem; /* Un poco menos de margen en móviles muy pequeños */
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
    .byi-steps { /* Para la página de Claridad */
      grid-template-columns: 1fr !important; 
    }
  }
</style>
<div class="container" style="margin-bottom: 0; padding-bottom: 20px;">
  <h1>find your clarity</h1>
  <p>Sometimes the path isn't about moving faster, but about knowing how to stop. Here you will find different tools to return to your center, through my guides or in one-on-one sessions with me.</p>
</div>

<div class="card-grid">

  <div class="card">
    <h3>individual accompaniment</h3>
    <p>A space to go deeper and bring light where there is confusion, allowing your own inner wisdom to take the lead.</p>
    <a href="{{ site.baseurl }}/en/about/" class="btn">LEARN MORE</a>
  </div>

  <div class="card">
    <h3>self-knowledge guides</h3>
    <p>Tools to connect with your intuition and clari-faculties through the pendulum, energy work, and deep listening. Resources to work at your own pace.</p>
    <a href="{{ site.baseurl }}/en/contact/" class="btn">EXPLORE RESOURCES</a>
  </div>

</div>
