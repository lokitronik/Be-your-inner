---
layout: default
title: Contact | Be Your Inner
lang: en
permalink: /en/contact/
---

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

<style>
  /* Base Container */
  .container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 0 1.5rem; 
    box-sizing: border-box;
  }

  .contact-h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; 
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }
  
  .contact-body {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 3.5rem;
  }

  .contact-label {
    font-family: 'Lora', serif;
    font-size: 0.92rem;
    font-weight: 600;
    color: #B5835A;
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
  }

  /* Select and Input Styles */
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
    color: #888;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23B5835A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
    background-size: 0.65em auto;
  }

  .form-input:focus, .form-select:focus {
    border-bottom-color: #B5835A;
  }

  textarea.form-input { min-height: 100px; resize: none; }

  .contact-hint { font-size: 0.8rem; color: #aaa; margin-top: 0.4rem; font-style: italic; }

  .btn-container { text-align: center; margin-top: 3.5rem; }

  .btn-submit {
    display: inline-block;
    background: #4a5944; 
    color: #fff !important;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1.1rem 3rem;
    border-radius: 50px; 
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
  }

  .btn-submit:hover { background: #3e4a39; }

  /* Success Message Container */
  #success-msg {
    display: none;
    text-align: center;
    padding: 2rem 0;
  }

  @media (max-width: 600px) {
    .contact-h1 { font-size: 2.2rem; }
  }
</style>

<div class="container" style="margin-top: 4rem; margin-bottom: 6rem;">

  <p style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #B5835A; margin-bottom: 1.2rem;">Drop me a line</p>

  <h1 class="contact-h1">Let's Talk</h1>

  <div id="contact-content">
    <div class="contact-body">
      <p>Before writing, take a breath. You don't need to have perfect words, just the intention to connect.</p>
      <p>Tell me what brought you here and let's find a moment to talk.</p>
    </div>

    <form id="contact-form" action="https://formspree.io/f/mlgozrlj" method="POST">

      <div style="margin-bottom: 2.5rem;">
        <label class="contact-label" for="name">What's your name?</label>
        <input class="form-input" type="text" name="name" id="name" placeholder="Your name..." required>
      </div>

      <div style="margin-bottom: 2.5rem;">
        <label class="contact-label" for="email">Where can I reply to you?</label>
        <input class="form-input" type="email" name="_replyto" id="email" placeholder="you@email.com" required>
      </div>

      <div style="margin-bottom: 2.5rem;">
        <label class="contact-label" for="reason">How can I help you?</label>
        <select class="form-select" name="reason" id="reason" required>
          <option value="" disabled selected>Select an option...</option>
          <option value="Sessions">Inquiry about sessions</option>
          <option value="Collaboration">Collaboration proposal</option>
          <option value="General">General questions</option>
        </select>
      </div>

      <div style="margin-bottom: 2.5rem;">
        <label class="contact-label" for="message">What would you like to share?</label>
        <textarea class="form-input" name="message" id="message" placeholder="Write whatever you need here..." required></textarea>
        <p class="contact-hint">It doesn't have to be perfect. A few lines are enough.</p>
      </div>

      <input type="hidden" name="_subject" value="New message from the web — Be Your Inner (EN)">

      <div class="btn-container">
        <button type="submit" class="btn-submit" id="submit-btn">Send Message</button>
        <p class="contact-after" style="font-size: 0.8rem; color: #bbb; margin-top: 1.2rem; font-style: italic; text-align: center;">I usually respond in 1–2 days</p>
      </div>
    </form>
  </div>

  <div id="success-msg">
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kz9pjc9v.json" background="transparent" speed="1" style="width: 200px; height: 200px; margin: 0 auto;" autoplay></lottie-player>
    <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: #1a1a1a;">Thank you for connecting!</h2>
    <p style="font-family: 'Lora', serif; color: #555; margin-top: 1rem;">I have received your message correctly. I will get back to you very soon.</p>
  </div>

</div>

<script>
  const form = document.getElementById('contact-form');
  const contactContent = document.getElementById('contact-content');
  const successMsg = document.getElementById('success-msg');

  form.onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.innerHTML = "Sending...";
    btn.disabled = true;

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        contactContent.style.display = 'none';
        successMsg.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        btn.innerHTML = "Send Message";
        btn.disabled = false;
        alert("There was an error sending. Please try again.");
      }
    });
  };
</script>
