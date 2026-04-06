---
layout: default
title: Contacto | Be Your Inner
description: Ponte en contacto con Manel.
lang: es
permalink: /contacto/
---

<div class="container">
  <h1>Contacto</h1>
  
  <p>Si sientes que es el momento de empezar a escucharte, o si simplemente tienes alguna duda, estaré encantado de leerte.</p>
  
  <div style="margin: 4rem 0; text-align: left;">
    <form action="https://formspree.io/f/manel@beyourinner.com" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <label for="name" style="display: block; margin-bottom: 0.5rem; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem;">Nombre</label>
        <input type="text" id="name" name="name" required style="width: 100%; padding: 1rem; border: 1px solid rgba(74, 93, 78, 0.2); border-radius: 10px; background: transparent; font-family: inherit;">
      </div>
      <div>
        <label for="email" style="display: block; margin-bottom: 0.5rem; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem;">Email</label>
        <input type="email" id="email" name="email" required style="width: 100%; padding: 1rem; border: 1px solid rgba(74, 93, 78, 0.2); border-radius: 10px; background: transparent; font-family: inherit;">
      </div>
      <div>
        <label for="message" style="display: block; margin-bottom: 0.5rem; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem;">Mensaje</label>
        <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 1rem; border: 1px solid rgba(74, 93, 78, 0.2); border-radius: 10px; background: transparent; font-family: inherit;"></textarea>
      </div>
      <button type="submit" class="btn" style="border: none; cursor: pointer; width: fit-content; align-self: center;">Enviar Mensaje</button>
    </form>
  </div>
  
  <p style="opacity: 0.6; font-size: 0.9rem;">También puedes escribirme directamente a <a href="mailto:manel@beyourinner.com" style="color: inherit;">manel@beyourinner.com</a></p>
</div>
