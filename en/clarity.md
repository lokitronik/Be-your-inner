---
layout: default
title: Clarity | Be Your Inner
lang: en
permalink: /en/clarity/
---

<style>
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 1.2rem;
    text-align: center;
  }

  .hero-bocadillo {
    background: #ffffff;
    padding: 3rem 2rem;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    margin-bottom: 3rem;
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 400;
    font-style: normal; /* Asegurado: Sin cursiva */
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
    <h1 class="byi-h1">find your clarity</h1>
    <p class="byi-body">Sometimes the path isn't about moving faster, but about knowing how to stop. Here you will find different tools to return to your center, through my guides or in one-on-one sessions with me.</p>
  </div>

  <div class="card-grid">
    <div class="card">
      <div>
        <h3>individual accompaniment</h3>
        <p>A space to go deeper and bring light where there is confusion, allowing your own inner wisdom to take the lead.</p>
      </div>
      <a href="{{ site.baseurl }}/en/encounters/" class="btn">LEARN MORE</a>
    </div>

    <div class="card">
      <div>
        <h3>self-knowledge guides</h3>
        <p>Tools to connect with your intuition and inner self. Resources and guides designed for you to work at your own pace.</p>
      </div>
      <a href="{{ site.baseurl }}/en/free-resources/" class="btn">EXPLORE RESOURCES</a>
    </div>
  </div>
</div>
