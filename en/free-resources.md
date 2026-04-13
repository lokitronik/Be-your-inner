---
layout: default
title: Free Resources | Be Your Inner
description: Free resources for your journey of inner listening.
lang: en
permalink: /en/free-resources/
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
  <h1>Resources: Tools for your journey</h1>
  
  <p>I have created these resources so you can begin your own journey of inner listening today:</p>
  
  <div class="card-grid">
    <div class="card">
      <h3>Pendulum Guide</h3>
      <p>A simple tool to start connecting with your intuition today. Learn how to use the pendulum as a bridge to your inner wisdom.</p>
      <a href="{{ '/assets/docs/pendulum-guide.pdf' | relative_url }}" class="btn" download>DOWNLOAD GUIDE</a>
    </div>

    <div class="card" style="opacity: 0.7; filter: grayscale(0.3);">
      <h3>The "Claris" Guide</h3>
      <p>Explore your subtle perception abilities and mental clarity.</p>
      <span style="display: inline-block; margin-top: 1.5rem; font-family: 'Cormorant Garamond', serif; font-style: italic; color: #BC8A78;">Coming soon...</span>
    </div>

    <div class="card" style="opacity: 0.7; filter: grayscale(0.3);">
      <h3>Intuition Guide</h3>
      <p>Practical exercises to strengthen your inner compass.</p>
      <span style="display: inline-block; margin-top: 1.5rem; font-family: 'Cormorant Garamond', serif; font-style: italic; color: #BC8A78;">Coming soon...</span>
    </div>
  </div>
</div>
