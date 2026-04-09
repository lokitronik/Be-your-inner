---
layout: default
title: Clarity | Be Your Inner
lang: en
permalink: /en/clarity/
---

<style>
  /* 1. Main Container */
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    box-sizing: border-box;
    text-align: center; /* Centers the header text */
  }

  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    text-transform: lowercase;
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

  /* 2. Card Grid (The "Bocadillos") */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns on desktop */
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto 5rem;
    padding: 0 1.5rem;
  }

  .card {
    background: #faf9f7; /* Soft sand color */
    padding: 3rem 2rem;
    border-radius: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;
    border: 1px solid #f0efed;
    box-sizing: border-box;
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

  /* 3. Styled Button */
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
    text-align: center;
  }

  .btn:hover {
    background: #3e4a39;
    letter-spacing: 3px;
  }

  /* 4. Mobile Adjustments */
  @media (max-width: 768px) {
    .card-grid {
      grid-template-columns: 1fr; /* One column on mobile */
      gap: 1.5rem;
    }
    
    .byi-h1 {
      font-size: 2.2rem;
    }

    .card {
      padding: 2.5rem 1.5rem;
    }

    .btn {
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>

<div class="container">
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
