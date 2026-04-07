<style>
  /* Contenedor principal con efecto cristal */
  .contact-wrapper {
    display: flex;
    flex-direction: row; /* Dos columnas en PC */
    flex-wrap: wrap; 
    max-width: 900px;
    margin: 2rem auto;
    background: rgba(255, 255, 255, 0.92); 
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  /* Columna Izquierda: Mensaje inspirador */
  .col-left {
    flex: 1;
    padding: 3rem;
    min-width: 320px; /* Asegura que no se vea minúsculo */
    background: rgba(74, 89, 68, 0.03); 
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Columna Derecha: El formulario */
  .col-right {
    flex: 1.2;
    padding: 3rem;
    min-width: 320px;
    background: #ffffff;
  }

  .contact-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    color: #1a1a1a;
    margin: 0.5rem 0 1.5rem 0;
    line-height: 1.1;
  }

  .contact-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    color: #555;
    line-height: 1.7;
  }

  /* Estilos de los campos del formulario */
  .contact-label {
    font-family: 'Lora', serif;
    font-size: 0.8rem;
    color: #B5835A;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    display: block;
    margin-bottom: 0.3rem;
  }

  .form-input, .form-select {
    width: 100%;
    padding: 0.8rem 0;
    border: none;
    border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
    font-family: 'Lora', serif;
    font-size: 1rem;
    outline: none;
    background: transparent;
    transition: 0.3s;
  }

  .form-input:focus, .form-select:focus {
    border-bottom-color: #B5835A;
  }

  .btn-submit {
    width: 100%;
    background: #4a5944;
    color: white;
    padding: 1.2rem;
    border-radius: 50px;
    border: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .btn-submit:hover {
    background: #3e4a39;
    transform: translateY(-2px);
  }

  /* --- OPTIMIZACIÓN PARA MÓVIL --- */
  @media (max-width: 768px) {
    .contact-wrapper {
      flex-direction: column; /* Apila las columnas: arriba texto, abajo form */
      margin: 1rem; /* Deja un poco de margen a los lados en pantallas pequeñas */
      border-radius: 15px;
    }

    .col-left, .col-right {
      padding: 2rem 1.5rem; /* Reduce el relleno interno para ganar espacio */
      min-width: 100%;
    }

    .contact-h1 {
      font-size: 2.2rem; /* Título un poco más pequeño en móvil */
    }

    .col-left {
      text-align: center; /* Centramos el mensaje para que se vea más equilibrado */
      border-bottom: 1px solid #eee; /* Separador sutil entre texto y formulario */
    }
  }
</style>

<div class="contact-wrapper">
  
  <div class="col-left">
    <p style="color: #B5835A; letter-spacing: 3px; text-transform: uppercase; font-size: 0.65rem; margin-bottom: 0.5rem;">Conectemos</p>
    <h1 class="contact-h1">Hablemos</h1>
    <div class="contact-body">
      <p>Antes de escribir, toma un respiro. No hace falta tener las palabras perfectas.</p>
      <p>Cuéntame qué te ha traído hasta aquí.</p>
    </div>
  </div>

  <div class="col-right">
    <form id="contact-form" action="https://formspree.io/f/mlgozrlj" method="POST">
      
      <label class="contact-label">¿Cómo te llamas?</label>
      <input class="form-input" type="text" name="name" required placeholder="Tu nombre...">

      <label class="contact-label">Tu email</label>
      <input class="form-input" type="email" name="email" required placeholder="tu@email.com">

      <label class="contact-label">¿En qué puedo ayudarte?</label>
      <select class="form-select" name="motivo" required>
        <option value="" disabled selected>Selecciona una opción...</option>
        <option value="Sesiones Individuales">Consulta sobre sesiones</option>
        <option value="Colaboración">Colaboración</option>
        <option value="Duda General">Dudas generales</option>
      </select>

      <label class="contact-label">Tu mensaje</label>
      <textarea class="form-input" name="message" rows="3" placeholder="Escribe aquí..."></textarea>

      <button type="submit" class="btn-submit">Enviar mensaje</button>
      <p style="text-align: center; color: #bbb; font-size: 0.75rem; margin-top: 1rem; font-style: italic;">Respondo en 1–2 días</p>
    </form>
  </div>
</div>
