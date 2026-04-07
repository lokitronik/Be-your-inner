----

layout: default
title: Sesiones | Be Your Inner
description: Un espacio personal para volver a escucharte.
lang: es
permalink: /encuentros/

---

<style>
  .byi-card-container {
    width: 100%;
    max-width: 800px;
    margin: 4rem auto 6rem;
    background: rgba(255, 255, 255, 0.95); 
    padding: 4rem 3rem;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    backdrop-filter: blur(10px); 
    box-sizing: border-box;
  }

  
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
    color: #4a5944; /* Verde oscuro orgánico */
  }


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

  
  @media (max-width: 768px) {
    .byi-card-container {
      margin: 2rem 1rem;
      padding: 2.5rem 1.5rem;
    }
    .byi-h1 { font-size: 2.2rem; }
    .byi-steps { grid-template-columns: 1fr; }
    .byi-price-new { font-size: 4rem; }
  }
</style>

<div class="byi-card-container">

  <p style="color: #B5835A; letter-spacing: 3px; text-transform: uppercase; font-size: 0.7rem; margin-bottom: 1rem;">Acompañamiento personal</p>

  <h1 class="byi-h1">Sesiones de acompañamiento:<br>un espacio para tu verdad</h1>

  <p class="byi-body">El reencuentro más importante es aquel que sucede cuando decides <strong>hacer silencio para volver a escucharte.</strong></p>
  <p class="byi-body">Estas sesiones son una pausa necesaria. Un espacio donde tu propia sabiduría marca el ritmo, permitiéndote soltar el ruido y mirar el presente con claridad.</p>

  <blockquote class="byi-quote">
    "Tu esencia ya conoce el camino; aquí simplemente le damos el espacio y la calma para hablar."
  </blockquote>

  <div class="byi-steps">
    <div class="byi-step">
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #B5835A;">01</div>
      <div style="font-size: 0.9rem; color: #555;"><strong>Reserva.</strong> Eliges tu horario en el calendario tras el pago.</div>
    </div>
    <div class="byi-step">
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #B5835A;">02</div>
      <div style="font-size: 0.9rem; color: #555;"><strong>Encuentro.</strong> 60 minutos de charla y presencia por video.</div>
    </div>
    <div class="byi-step">
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #B5835A;">03</div>
      <div style="font-size: 0.9rem; color: #555;"><strong>Claridad.</strong> Te llevas la paz de haberte escuchado de verdad.</div>
    </div>
  </div>

  <div class="byi-pricing">
    <div style="font-family: 'Cormorant Garamond', serif; font-size: 5rem; color: #4a5944; line-height: 1;">44€</div>
    <p style="color: #B5835A; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; margin: 1rem 0;">Sesión individual · 60 min</p>
    <a href="https://buy.stripe.com/cNi28j8hsaAu24kdkm2go00" class="byi-btn">Reservar sesión</a>
  </div>

</div>
