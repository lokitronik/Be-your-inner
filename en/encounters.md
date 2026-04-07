---
layout: default
title: Sessions | Be Your Inner
description: A personal space to reconnect with yourself.
lang: en
permalink: /en/sessions/
---

<style>
  /* White Capsule / Card Container */
  .byi-card-container {
    width: 100%;
    max-width: 800px;
    margin: 4rem auto 6rem;
    background: rgba(255, 255, 255, 0.95); /* The capsule with slight transparency */
    padding: 4rem 3rem;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    backdrop-filter: blur(10px); /* Soft glass effect */
    box-sizing: border-box;
  }

  /* Typography for maximum readability */
  .byi-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    color: #1a1a1a;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  .byi-body {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
  }

  .byi-quote {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.6rem;
    border-left: 3px solid #B5835A;
    padding-left: 1.5rem;
    margin: 3rem 0;
    color: #4a5944; /* Organic dark green */
  }

  /* Steps and Pricing inside the capsule */
  .byi-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .byi-step {
    background: #fcfbf9;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #eee;
  }

  .byi-pricing {
    text-align: center;
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: 1px solid #eee;
  }

  .byi-btn {
    display: inline-block;
    background: #4a5944;
    color: white !important;
    padding: 1.2rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: 0.3s;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    .byi-card-container {
      margin: 2rem 1rem;
      padding: 2.5rem 1.5rem;
    }
    .byi-h1 { font-size: 2.2rem; }
    .byi-steps { grid-template-columns: 1fr; }
  }
</style>

<div class="byi-card-container">

  <p style="color: #B5835A; letter-spacing: 3px; text-transform: uppercase; font-size: 0.7rem; margin-bottom: 1rem;">Personal Support</p>

  <h1 class="byi-h1">One-on-One Sessions:<br>A space for your truth</h1>

  <p class="byi-body">The most important reunion happens when you decide to <strong>quiet the noise and start listening to yourself again.</strong></p>
  <p class="byi-body">These sessions are a necessary pause. A space where your own wisdom leads the way, allowing you to let go of the clutter and see the present with clarity.</p>

  <blockquote class="byi-quote">
    "You already know the way; here, we simply give you the space and the quiet to hear it."
  </blockquote>

  <div class="byi-steps">
    <div class="byi-step">
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #B5835A;">01</div>
      <div style="font-size: 0.9rem; color: #555;"><strong>Booking.</strong> Choose your preferred time on the calendar after payment.</div>
    </div>
    <div class="byi-step">
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #B5835A;">02</div>
      <div style="font-size: 0.9rem; color: #555;"><strong>Encounter.</strong> 60 minutes of presence and attentive listening via video call.</div>
    </div>
    <div class="byi-step">
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #B5835A;">03</div>
      <div style="font-size: 0.9rem; color: #555;"><strong>Clarity.</strong> Leave with the peace of having truly listened to yourself.</div>
    </div>
  </div>

  <div class="byi-pricing">
    <div style="font-family: 'Cormorant Garamond', serif; font-size: 5rem; color: #4a5944; line-height: 1;">44€</div>
    <p style="color: #B5835A; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; margin: 1rem 0;">Individual Session · 60 min</p>
    <a href="https://buy.stripe.com/cNi28j8hsaAu24kdkm2go00" class="byi-btn">Book session</a>
  </div>

</div>
