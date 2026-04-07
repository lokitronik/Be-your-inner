---
layout: default
title: Contacto | Be Your Inner
permalink: /contacto/
---
<style>
  .container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 0 1.5rem; 
    box-sizing: border-box;
  }

  .home-h1, .byi-h1, .sobre-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; 
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 2rem;
    color: #1a1a1a;
  }
  
  .home-lead, .byi-body, .sobre-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.85;
    color: #424242;
    margin-bottom: 1.5rem;
    text-align: left; 
  }
  
  .home-ctas {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .btn {
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
    min-width: 200px;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1.2rem; 
    }
    .home-h1, .byi-h1, .sobre-h1 {
      font-size: 2rem; 
    }
    .home-lead, .byi-body, .sobre-body {
      font-size: 1rem;
    }
    .btn {
      width: 100%; 
      max-width: 300px;
    }
    .byi-steps {
      grid-template-columns: 1fr !important; 
    }
  }
</style>
<div class="container" style="max-width: 650px; margin-top: 4rem; margin-bottom: 6rem;">

  <p style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #B5835A; margin-bottom: 1.2rem;">Escríbeme</p>

  <h1 style="font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 400; line-height: 1.2; margin: 0 0 1.5rem;">Hablemos</h1>

  <div style="font-family: 'Lora', serif; font-size: 1.05rem; line-height: 1.8; color: #555; margin-bottom: 3.5rem;">
    <p>Antes de escribir, toma un respiro. No tienes que tener las palabras perfectas, solo la intención de conectar.</p>
    <p>Cuéntame qué te ha traído hasta aquí y busquemos un momento para hablar.</p>
  </div>

  <form action="https://formspree.io/f/mlgozrlj" method="POST">

    <div style="margin-bottom: 2.5rem;">
      <label class="contact-label" for="name">¿Cómo te llamas?</label>
      <input class="form-input" type="text" name="name" id="name" placeholder="Tu nombre..." required>
    </div>

    <div style="margin-bottom: 2.5rem;">
      <label class="contact-label" for="email">¿A qué email puedo responderte?</label>
      <input class="form-input" type="email" name="_replyto" id="email" placeholder="tu@email.com" required>
    </div>

    <div style="margin-bottom: 2.5rem;">
      <label class="contact-label" for="message">¿Qué quieres compartir?</label>
      <textarea class="form-input" name="message" id="message" placeholder="Escribe aquí lo que necesites..." required></textarea>
      <p class="contact-hint">No hace falta que sea perfecto. Unas pocas líneas bastan.</p>
    </div>

    <input type="hidden" name="_subject" value="Nuevo mensaje desde la web — Be Your Inner">

    <div style="text-align: center; margin-top: 3.5rem;">
      <button type="submit" class="btn-submit">Enviar mensaje</button>
      <p class="contact-after">Suelo responder en 1–2 días</p>
    </div>

  </form>

  <p class="contact-alt">
    O si lo prefieres, escríbeme directamente a<br>
    <a href="mailto:manel@beyourinner.com">manel@beyourinner.com</a>
  </p>

</div>
