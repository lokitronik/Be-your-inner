---
layout: default
title: Returning Home | Be Your Inner
description: A space of silence to reconnect with your internal compass and your own voice.
lang: en
permalink: /en/
---

<style>
  :root {
    --text-main: #1a1a1a;
    --text-muted: #424242;
    --accent: #4a5944;
    --white-pure: #ffffff;
    --radius-pill: 100px;
  }

  .main-wrapper {
    padding: 60px 20px;
    background: transparent;
    display: flex;
    justify-content: center;
  }

  .card-home {
    background: var(--white-pure);
    width: 100%;
    max-width: 700px;
    padding: clamp(2rem, 8vw, 4rem);
    border-radius: 40px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.04);
    text-align: center;
  }

  .home-label {
    font-family: 'Lora', serif;
    font-size: 0.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.5rem;
    display: block;
  }

  .home-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 400;
    font-style: normal; /* Sin cursivas como pediste */
    line-height: 1.2;
    color: var(--text-main);
    margin-bottom: 2rem;
    text-align: center;
  }

  .home-lead {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }

  .home-divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #e0e0e0, transparent);
    margin: 2.5rem auto;
    width: 60%;
  }

  .btn-primary {
    display: inline-block;
    background: var(--accent);
    color: #fff !important;
    font-family: 'Lora', serif;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3.5rem;
    border-radius: var(--radius-pill);
    text-decoration: none;
    transition: all 0.3s ease;
    margin-top: 1rem;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 89, 68, 0.2);
    filter: brightness(1.1);
  }

  @media (max-width: 600px) {
    .card-home {
      padding: 2.5rem 1.5rem;
      border-radius: 25px;
    }
  }
</style>

<div class="main-wrapper">
  <div class="card-home">
    <span class="home-label">Welcome</span>
    <h1 class="home-h1">A space to return to yourself</h1>

    <p class="home-lead">
      Here, the noise fades away and the voice of your soul begins to be heard. You do not come to search outside for what is missing — you come to remember that everything you need is already within you.
    </p>

    <p class="home-lead">
      The stillness, clarity, and strength you so often sought have always been with you.
    </p>

    <hr class="home-divider">

    <div class="home-ctas">
      <a href="{{ site.baseurl }}/en/clarity/" class="btn-primary">Clarity</a>
    </div>
  </div>
</div>
