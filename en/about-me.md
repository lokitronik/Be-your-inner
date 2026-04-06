---
layout: default
title: About Manel | Be Your Inner
description: I am Manel, and my purpose is to accompany you in remembering who you are beyond the masks and the noise of everyday life.
lang: en
permalink: /en/about-me/
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
    margin: 0 0 1rem;
    color: #1a1a1a;
  }

  .sobre-intro {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
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
    margin-bottom: 2.5rem;
  }

  .sobre-block-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #B5835A;
    margin-bottom: 0.8rem;
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
    font-size: 1.7rem;
    border-left: 2px solid #B5835A;
    padding-left: 1.5rem;
    margin: 3.5rem 0;
    color: #556B2F;
    line-height: 1.4;
  }

  .sobre-ctas {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 4rem;
    flex-wrap: wrap;
  }

  .btn-outline {
    display: inline-block;
    border: 1px solid #556B2F;
    color: #556B2F !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 2.5rem;
    border-radius: 4px;
    text-decoration: none;
    background: transparent;
    transition: all 0.3s ease;
  }

  .btn-outline:hover {
    background: #f7f8f4;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    .sobre-hero {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
    .sobre-photo {
      margin: 0 auto;
      width: 180px;
      height: 180px;
    }
    .sobre-h1 {
      font-size: 2.2rem;
    }
    .sobre-ctas .btn, .sobre-ctas .btn-outline {
      width: 100%;
      text-align: center;
    }
  }
</style>

<div class="container" style="max-width: 750px; margin-top: 4rem; margin-bottom: 6rem;">

  <p class="sobre-label">About me</p>

  <div class="sobre-hero">
    <img
      src="{{ site.baseurl }}/assets/images/manel.png"
      alt="Manel, Be Your Inner"
      class="sobre-photo"
    >
    <div>
      <h1 class="sobre-h1">Hi, I'm Manel</h1>
      <p class="sobre-intro">My purpose is to accompany you in remembering who you are, beyond the masks and the noise of everyday life.</p>
    </div>
  </div>

  <hr class="sobre-divider">

  <div class="sobre-block">
    <p class="sobre-block-label">My journey</p>
    <p class="sobre-body">For a long time, I searched outside for what I didn't yet know how to cultivate within. My own path of self-discovery taught me that real change is not a goal to be reached, but a reunion with what has always been there, waiting to be seen.</p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">Be Your Inner</p>
    <p class="sobre-body">This space was born for those who feel the calling to live with more authenticity and awareness. At <strong>Be Your Inner</strong>, I understand that every energy is unique and every soul has its own language; that’s why I don’t believe in magic formulas, but in deep listening.</p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">My presence</p>
    <p class="sobre-body">I guide through intuition and stillness, using energetic and spiritual tools to help you release the burdens that no longer belong to you, opening space for your true essence.</p>
  </div>

  <blockquote class="sobre-quote">
    "Transformation is not imposed: it is allowed."
  </blockquote>

  <p class="sobre-body" style="text-align: center; color: #888; font-style: italic;">
    If these words resonate with you, it would be an honor to walk by your side.
  </p>

  <div class="sobre-ctas">
    <a href="{{ site.baseurl }}/en/encounters/" class="btn">Explore sessions</a>
    <a href="{{ site.baseurl }}/en/contact/" class="btn-outline">Let's talk</a>
  </div>

</div>
