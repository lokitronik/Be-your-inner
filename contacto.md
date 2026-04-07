---
layout: default
title: Contact | Be Your Inner
lang: en
permalink: /en/contact/
---

<style>
  /* Base Container - Safeguard for mobile */
  .container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 0 1.5rem; 
    box-sizing: border-box;
  }

  /* Headings */
  .contact-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; 
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }
  
  /* Body Text */
  .contact-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 3.5rem;
    text-align: left; 
  }

  /* Form Styles */
  .contact-label {
    font-family: 'Lora', serif;
    font-size: 0.92rem;
    font-weight: 600;
    color: #B5835A;
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
  }

  .form-input {
    width: 100%;
    padding: 0.8rem 0;
    border: none;
    border-bottom: 1px solid #eee;
    background: transparent;
    font-family: 'Lora', serif;
    font-size: 1rem;
    color: #424242;
    outline: none;
    transition: border-color 0.3s;
    border-radius: 0; /* Important for iOS */
    box-sizing: border-box;
  }

  .form-input:focus {
    border-bottom-color: #B5835A;
  }

  textarea.form-input {
    min-height: 100px;
    resize: none;
  }

  .contact-hint {
    font-size: 0.8rem;
    color: #aaa;
    margin-top: 0.4rem;
    font-style: italic;
  }

  /* Button Styles */
  .btn-container {
    text-align: center;
    margin-top: 3.5rem;
  }

  .btn-submit {
    display: inline-block;
    background: #4a5944; 
    color: #fff !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3rem;
    border-radius: 50px; 
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    text-align: center;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
  }

  .btn-submit:hover {
    background: #3e4a39;
  }

  .contact-after {
    font-size: 0.8rem;
    color: #bbb;
    margin-top: 1.2rem;
    font-style: italic;
  }

  .contact-alt {
    font-size: 0.85rem;
    color: #999;
    margin-top: 4rem;
    text-align: center;
    border-top: 1px solid #f9f9f9;
    padding-top: 2rem;
  }

  .contact-alt a {
    color: #B5835A;
    text-decoration: none;
    font-weight: 500;
  }

  /* Mobile Adjustments */
  @media (max-width: 600px) {
    .container {
      padding: 0 1.2rem; 
    }
    .contact-h1 {
      font-size: 2.2rem; 
    }
    .contact-body {
      margin-bottom: 2.5rem;
    }
    .btn-submit {
      width: 100%; 
    }
  }
</style>

<div class="container" style="margin-top: 4rem; margin-bottom: 6rem;">

  <p style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #B5835A; margin-bottom: 1.2rem;">Write to me</p>

  <h1 class="contact-h1">Let's talk</h1>

  <div class="contact-body">
    <p>Before writing, take a breath. You don't need to have the perfect words, just the intention to connect.</p>
    <p>Tell me what brought you here, and let's find a moment to talk.</p>
  </div>

  <form action="https://formspree.io/f/mlgozrlj" method="POST">
