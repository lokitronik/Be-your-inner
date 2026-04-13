---
layout: default
title: About Manel | Be Your Inner
description: You don’t need to become a better version of yourself. You’re just tired of being someone you’re not.
lang: en
permalink: /en/about/
---

<style>
  html, body {
    overflow-x: hidden !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
  }

  .container {
    width: 100% !important;
    max-width: 750px !important;
    margin: 0 auto !important;
    padding: 4rem 1.5rem !important;
    box-sizing: border-box !important;
  }

  .sobre-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #B5835A;
    margin-bottom: 1.2rem;
    font-weight: 400;
  }

  .sobre-hero {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  .sobre-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    display: block;
    border: 1px solid #eee;
    padding: 8px;
    background: #fff;
  }

  .sobre-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 1.5rem;
    color: #1a1a1a;
  }

  .sobre-intro {
    font-family: 'Lora', serif;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #1a1a1a;
    margin: 0;
  }

  .sobre-divider {
    border: none;
    border-top: 1px solid #eee;
    margin: 3.5rem 0;
  }

  .sobre-block {
    margin-bottom: 3.5rem;
  }

  .sobre-block-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #B5835A;
    margin-bottom: 1.2rem;
    display: block;
  }

  .sobre-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.9;
    color: #555;
    margin: 0;
  }

  .sobre-quote {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.9rem;
    border-left: 2px solid #B5835A;
    padding-left: 1.5rem;
    margin: 4.5rem 0;
    color: #4a5944;
    line-height: 1.3;
  }

  .sobre-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 4rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-block;
    background: #4a5944; 
    color: #ffffff !important;
    font-family: 'Lora', serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 2.5rem;
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    min-width: 200px;
    text-align: center;
    box-sizing: border-box;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 89, 68, 0.2);
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 2.5rem 1.2rem !important; /* Menos margen lateral para que no se vea "apretado" */
    }

    .sobre-hero { 
      grid-template-columns: 1fr; 
      text-align: center; 
      gap: 1.5rem; 
    }

    .sobre-photo { 
      width: 150px; /* Foto más pequeña en móvil */
      height: 150px;
      margin: 0 auto; 
    }

    .sobre-h1 {
      font-size: 2.2rem !important;
      margin-bottom: 1rem;
    }

    .sobre-intro {
      font-size: 1.1rem;
    }

    .sobre-quote {
      font-size: 1.5rem;
      margin: 3rem 0;
      padding-left: 1rem;
    }

    .btn { 
      width: 100%; 
      min-width: unset;
    }
  }
</style>

<div class="container">

  <p class="sobre-label">About me</p>

  <div class="sobre-hero">
    <img src="{{ site.baseurl }}/assets/images/manel.png" alt="Manel" class="sobre-photo">
    <div>
      <h1 class="sobre-h1">Hi, I'm Manel</h1>
      <p class="sobre-intro">You don’t need to become a better version of yourself. You’re just tired of being someone you’re not.</p>
    </div>
  </div>

  <hr class="sobre-divider">

  <div class="sobre-block">
    <p class="sobre-block-label">My journey</p>
    <p class="sobre-body">
      I spent years trying to fix myself, thinking something was missing, something was wrong. But there was nothing to fix. Just layers to drop. What I was looking for was never outside, and it was never something to achieve.
    </p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">Be Your Inner</p>
    <p class="sobre-body">
      Be Your Inner isn't about becoming a better version of yourself. It's about stripping away everything you were told to be, so you can reconnect with what was always there. No frameworks. No molds to squeeze into. No pressure to become anything at all. Just who you truly are.
    </p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">My presence</p>
    <p class="sobre-body">
      I won’t tell you what to do. I won’t give you answers. I’m here to help you see clearly. To question what you believe you are, and to let go of what doesn't feel true anymore.
    </p>
  </div>

  <blockquote class="sobre-quote">
    "Nothing to become. Just everything to remember."
  </blockquote>

  <p class="sobre-body" style="text-align: center; color: #888; font-style: italic;">
    If this feels uncomfortable, it’s probably real. If it resonates, you already know why you’re here.
  </p>

  <div class="sobre-ctas">
    <a href="{{ site.baseurl }}/en/encounters/" class="btn">Explore sessions</a>
    <a href="{{ site.baseurl }}/en/contact/" class="btn">Let's talk</a>
  </div>
</div>
