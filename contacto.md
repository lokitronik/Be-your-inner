---
layout: default
title: Contacto | Be Your Inner
lang: es
permalink: /contacto/
---

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

<style>
  /* Contenedor Base - Diseño de 2 Columnas */
  .container-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    max-width: 1000px;
    margin: 4rem auto 6rem;
    padding: 0 1.5rem;
    box-sizing: border-box;
    align-items: flex-start;
  }

  .col-left {
    flex: 1;
    min-width: 300px;
  }

  .col-right {
    flex: 1.2;
    min-width: 300px;
    background: #fff;
  }

  /* Títulos y Cuerpo */
  .contact-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.2rem; 
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }
  
  .contact-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 2rem;
  }

  .contact-photo {
    width: 100%;
    border-radius: 4px;
    margin-top: 2rem;
    filter: sepia(0.2) contrast(0.9); /* Estética suave */
  }

  /* Estilos del Formulario */
  .contact-label {
    font-family: 'Lora', serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: #B5835A;
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .form-input, .form-select {
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
    border-radius: 0;
    box-sizing: border-box;
  }

  .form-select {
    cursor: pointer;
    color: #888;
    appearance: none; /* Quita flecha nativa */
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23B5835A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
    background-size: 0.65em auto;
  }

  .form-input:focus, .form-select:focus {
    border-bottom-color: #B5835A;
  }

  /* Botón */
  .btn-submit {
    display: inline-block;
    background: #4a5944; 
    color: #fff !important;
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 2.5rem;
    border-radius: 50px; 
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  .btn-submit:hover { background: #3e4a39; }

  /* Éxito */
  #success-msg {
    display: none;
    text-align: center;
    padding: 3rem 0;
  }

  /* Móvil */
  @media (max-width: 800px) {
    .container-flex { gap: 2rem; margin-top: 2rem; }
    .contact-h1 { font-size: 2.5rem; }
    .col-left { order: 2; } /* Texto abajo en móvil */
    .col-right { order: 1; } /* Form arriba en móvil */
  }
</style>

<div class="container-flex">
  
  <div class="col-left">
    <p style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #B5835A; margin-bottom: 1.2rem;">Conectemos</p>
    <h1 class="contact-h1">Hablemos</h1>
    <div class="contact-body">
      <p>Antes de escribir, toma un respiro. No hace falta tener las palabras perfectas, solo la intención de conectar.</p>
      <p>Cuéntame qué te ha traído hasta aquí y busquemos un momento para hablar.</p>
    </div>
    <img src="/assets/images/tu-foto.jpg" alt="Be Your Inner" class="contact-photo">
  </div>

  <div class="col-right">
    <form id="contact-form" action="https://formspree.io/f/mlgozrlj" method="POST">
      
      <div style="margin-bottom: 2rem;">
        <label class="contact-label" for="name">¿Cómo te llamas?</label>
        <input class="form-input" type="text" name="name" id="name" placeholder="Tu nombre..." required>
      </div>

      <div style="margin-bottom: 2rem;">
        <label class="contact-label" for="email">Tu email</label>
        <input class="form-input" type="email" name="_replyto" id="email" placeholder="tu@email.com" required>
      </div>

      <div style="margin-bottom: 2rem;">
        <label class="contact-label" for="subject">¿En qué puedo ayudarte?</label>
        <select class="form-select" name="motivo" id="subject" required>
          <option value="" disabled selected>Selecciona una opción...</option>
          <option value="Sesiones Individuales">Consulta sobre sesiones</option>
          <option value="Colaboración">Propuesta de colaboración</option>
          <option value="Duda General">Dudas generales</option>
        </select>
      </div>

      <div style="margin-bottom: 2rem;">
        <label class="contact-label" for="message">¿Qué quieres compartir?</label>
        <textarea class="form-input" name="message" id="message" rows="4" placeholder="Escribe aquí..." required></textarea>
      </div>

      <input type="hidden" name="_subject" value="Nuevo contacto — Be Your Inner">

      <button type="submit" class="btn-submit" id="submit-btn">Enviar mensaje</button>
      <p style="text-align: center; font-size: 0.75rem; color: #bbb; margin-top: 1rem; font-style: italic;">Suelo responder en 1–2 días</p>
    </form>

    <div id="success-msg">
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kz9pjc9v.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px; margin: 0 auto;" autoplay></lottie-player>
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 1.8rem;">¡Gracias por escribir!</h3>
      <p style="font-family: 'Lora', serif; color: #555;">He recibido tu mensaje. Te responderé muy pronto.</p>
    </div>
  </div>

</div>

<script>
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-msg');

  form.onsubmit = function(e) {
    e.preventDefault(); // Evita que la página se recargue
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.style.display = 'none';
        successMsg.style.display = 'block';
      } else {
        alert("Ops! Hubo un error. Inténtalo de nuevo.");
      }
    });
  };
</script>
