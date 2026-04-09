---
layout: default
title: Sobre Manel | Be Your Inner
description: No necesitas una mejor versión de ti mismo. Solo estás cansado de ser alguien que no eres.
lang: es
permalink: /sobre-mi/
---

<style>
  /* Mantengo tu CSS que ya funciona bien */
  .sobre-label { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #B5835A; margin-bottom: 1.2rem; font-weight: 400; }
  .sobre-hero { display: grid; grid-template-columns: 200px 1fr; gap: 3rem; align-items: center; margin-bottom: 3rem; }
  .sobre-photo { width: 200px; height: 200px; border-radius: 50%; object-fit: cover; object-position: center top; display: block; border: 1px solid #eee; padding: 8px; background: #fff; }
  .sobre-h1 { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 400; line-height: 1.2; margin: 0 0 1.5rem; color: #1a1a1a; }
  .sobre-intro { font-family: 'Lora', serif; font-size: 1.25rem; line-height: 1.8; color: #1a1a1a; margin: 0; }
  .sobre-divider { border: none; border-top: 1px solid #eee; margin: 3.5rem 0; }
  .sobre-block { margin-bottom: 3.5rem; }
  .sobre-block-label { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #B5835A; margin-bottom: 1.2rem; display: block; }
  .sobre-body { font-family: 'Lora', serif; font-size: 1.05rem; line-height: 1.9; color: #555; margin: 0; }
  .sobre-quote { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.9rem; border-left: 2px solid #B5835A; padding-left: 1.5rem; margin: 4.5rem 0; color: #4a5944; line-height: 1.3; }
  .sobre-ctas { display: flex; gap: 1rem; justify-content: center; margin-top: 4rem; flex-wrap: wrap; }
  .btn { display: inline-block; background: #4a5944; color: #ffffff !important; font-family: 'Lora', serif; font-size: 0.8rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; padding: 1.1rem 2.5rem; border-radius: 100px; text-decoration: none; transition: all 0.3s ease; border: none; min-width: 200px; text-align: center; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(74, 89, 68, 0.2); }
  @media (max-width: 600px) { .sobre-hero { grid-template-columns: 1fr; text-align: center; gap: 2rem; } .sobre-photo { margin: 0 auto; } .btn { width: 100%; } }
</style>

<div class="container" style="max-width: 750px; margin-top: 4rem; margin-bottom: 6rem;">

  <p class="sobre-label">Sobre mí</p>

  <div class="sobre-hero">
    <img src="{{ site.baseurl }}/assets/images/manel.png" alt="Manel" class="sobre-photo">
    <div>
      <h1 class="sobre-h1">Hola, soy Manel</h1>
      <p class="sobre-intro">Olvídate de buscar una mejor versión de ti mismo. Solo estás agotado de intentar ser quien no eres.</p>
    </div>
  </div>

  <hr class="sobre-divider">

  <div class="sobre-block">
    <p class="sobre-block-label">Mi camino</p>
    <p class="sobre-body">
      Pasé años tratando de arreglarme. Creía que me faltaba algo, que algo en mí estaba roto. Pero no había nada que reparar, solo capas que dejar caer. Lo que buscaba nunca estuvo fuera, ni era algo que se pudiera conseguir con esfuerzo.
    </p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">Be Your Inner</p>
    <p class="sobre-body">
      Be Your Inner no va de superación personal. Va de ver a través de todo lo que te enseñaron a ser para que puedas volver a lo que ya está ahí. Sin fórmulas, sin roles en los que encajar y sin la presión de convertirte en alguien.
    </p>
  </div>

  <div class="sobre-block">
    <p class="sobre-block-label">Mi presencia</p>
    <p class="sobre-body">
      No estoy aquí para guiarte hacia una meta, sino para ayudarte a ver claro. Para cuestionar lo que crees ser y soltar aquello que ya no sientes como verdad.
    </p>
  </div>

  <blockquote class="sobre-quote">
    "No hay nada en lo que convertirse. Solo todo por recordar."
  </blockquote>

  <p class="sobre-body" style="text-align: center; color: #888; font-style: italic;">
    Si esto te resulta incómodo, probablemente sea real. Si te resuena, ya sabes por qué estás aquí.
  </p>

  <div class="sobre-ctas">
    <a href="{{ site.baseurl }}/encuentros/" class="btn">Explorar sesiones</a>
    <a href="{{ site.baseurl }}/contacto/" class="btn">Hablemos</a>
  </div>
</div>
