---
layout: default
title: Contacto | Be Your Inner
permalink: /contacto/
---

<style>
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
    border-radius: 0; /* Evita bordes redondeados en iOS */
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

  .contact-after {
    font-size: 0.8rem;
    color: #bbb;
    margin-top: 1.5rem;
    font-style: italic;
    text-align: center;
  }

  /* Ajuste para que el botón se vea igual que en el resto de la web */
  .btn-submit {
    border: none;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    display: inline-block;
    background: #556B2F;
    color: #fff !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .btn-submit:hover { background: #3e5020; }
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
