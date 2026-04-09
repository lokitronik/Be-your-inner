---
layout: default
title: Returning Home | Be Your Inner
description: A space of silence to reconnect with your internal compass and your own voice.
lang: en
permalink: /en/
---

<style>
  .home-section {
    padding: 60px 1.2rem;
    display: flex;
    justify-content: center;
    background: #ffffff;
  }

  .home-card {
    background: #ffffff;
    width: min(100%, 720px);
    padding: clamp(2rem, 6vw, 4rem);
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0,0,0,0.04); 
  }

  .home-label {
    font: 600 0.75rem 'Lora', serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #4a5944;
    margin-bottom: 1rem;
    display: block;
  }

  /* El estilo para el H1 */
  .home-h1 {
    font: italic 400 clamp(2.2rem, 5vw, 3rem) 'Cormorant Garamond', serif;
    color: #1a1a1a;
    margin: 0 0 1.5rem 0; /* Aseguramos margen limpio */
    line-height: 1.2;
  }

  .home-lead {
    font: 400 1.1rem/1.8 'Lora', serif;
    color: #424242;
    margin-bottom: 1.5rem;
  }

  .home-divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #eee, transparent);
    margin: 2rem auto;
    width: 60%;
  }

  .btn {
    display: inline-block;
    background: #4a5944;
    color: #fff !important;
    font: 600 0.85rem 'Lora', serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3.5rem;
    border-radius: 100px;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(74, 89, 68, 0.2);
  }

  @media (max-width: 600px) {
    .home-card { padding: 2.5rem 1.5rem; }
    .btn { width: 100%; box-sizing: border-box; }
  }
</style>

<section class="home-section">
  <div class="home-card">
    <span class="home-label">Welcome</span>
    
    <h1 class="home-h1">A space to return to yourself</h1>

    <p class="home-lead">
      Here, the noise fades away and the voice of your soul begins to be heard. You do not come to search outside for what is missing — you come to remember that everything you need is already within you.
    </p>

    <p class="home-lead">
      The stillness, clarity, and strength have always been with you.
    </p>

    <hr class="home-divider">

    <a href="{{ site.baseurl }}/en/clarity/" class="btn">Clarity</a>
  </div>
</section>
