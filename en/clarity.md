---
layout: default
title: Clarity | Be Your Inner
lang: en
permalink: /en/clarity/
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
    <h1 class="byi-h1">Find your clarity</h1>
    <p class="byi-body">Sometimes the path isn't about moving faster, but about knowing how to stop. Here you will find different tools to return to your center, through my guides or in one-on-one sessions with me.</p>
  </div>

  <div class="card-grid">
    <div class="card">
      <div>
        <h3>Individual accompaniment</h3>
        <p>A space to go deeper and bring light where there is confusion, allowing your own inner wisdom to take the lead.</p>
      </div>
      <a href="{{ site.baseurl }}/en/encounters/" class="btn">LEARN MORE</a>
    </div>

    <div class="card">
      <div>
        <h3>Self-knowledge guides</h3>
        <p>Tools to connect with your intuition and inner self. Resources and guides designed for you to work at your own pace.</p>
      </div>
      <a href="{{ site.baseurl }}/en/free-resources/" class="btn">EXPLORE RESOURCES</a>
    </div>
  </div>
</div>
