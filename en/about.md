---
layout: default
title: About Manel | Be Your Inner
description: My purpose is not to teach you anything new, but to help you remember who you already are.
lang: en
permalink: /en/about/
---

<style>
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
    font-size: 1.15rem;
    line-height: 1.8;
    color: #424242;
    margin: 0;
  }

  .sobre-divider {
    border: none;
    border-top: 1px solid #eee;
    margin: 3.5rem 0;
  }

  .sobre-block {
    margin-bottom: 3rem;
  }

  .sobre-block-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #B5835A;
    margin-bottom: 1rem;
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
    font-size: 1.8rem;
    border-left: 2px solid #B5835A;
    padding-left: 1.5rem;
    margin: 4rem 0;
    color: #4a5944;
    line-height: 1.4;
  }

  .sobre-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 4rem;
    flex-wrap: wrap;
  }

  /* BOTONES IGUALES */
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
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 89, 68, 0.2);
  }

  @media (max-width: 600px) {
    .sobre-hero {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
    .sobre-photo {
      margin: 0 auto;
    }
    .sobre-h1 {
      font-size: 2.2rem;
    }
    .btn {
      width: 100%;
    }
  }
</style>

<div class="container" style="max-width: 750px; margin-top: 4rem; margin-bottom: 6rem;">

  <p class="sobre-label">About me</p>

  <div class="sobre-hero">
    <img
      src="{{ site.baseurl }}/assets/images/manel.png"
      alt="Manel"
      class="sobre-photo"
    >
    <div>
      <h1 class="sobre-h1">Hi, I'm Manel</h1>
      <p class="sobre-intro">My purpose is not to teach you anything new, but to help you remember who you already are, beyond the noise, the expectations, and the character you’ve learned to play.</p>
    </div>
  </div>

  <hr class="sobre-divider">

  <div class="sobre-block">
    <p class="sobre-block-label">My journey</p>
    <p class="sobre-body">
      For a long time, I looked outside for answers, trying to fix, improve, or become someone else. Until I realized there was nothing to become, only things to unlearn. My path hasn’t been about adding more, but about letting go of what was never truly me.
    </p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">Be Your Inner</p>
    <p class="sobre-body">
      Be Your Inner was born from that understanding. This is not a space for perfect versions of yourself, nor for following formulas. It’s a space to reconnect with your truth, in your own way. Because no two paths are the same, and they’re not meant to be.
    </p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">My presence</p>
    <p class="sobre-body">
      I don’t guide you by telling you who to be. I guide you back to yourself. Through presence, intuition, and deep listening, I help you see what’s already there, and release what no longer belongs to you.
    </p>
  </div>

  <blockquote class="sobre-quote">
    "Transformation isn’t something you force, it’s something you allow."
  </blockquote>

  <p class="sobre-body" style="text-align: center; color: #888; font-style: italic;">
    If something in you recognizes these words, then you already know.
  </p>

  <div class="sobre-ctas">
    <a href="{{ site.baseurl }}/en/encounters/" class="btn">Explore sessions</a>
    <a href="{{ site.baseurl }}/en/contact/" class="btn">Let's talk</a>
  </div>

</div>
