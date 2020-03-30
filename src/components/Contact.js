import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

function Contact() {

	function sendEmail(e) {
	  e.preventDefault();
  
	  emailjs.sendForm('krystal_guzman', 'template_Yltl5BJG', e.target, 'user_WS8bau9KlsmGoRfstHP6V')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	}

    return (
		<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
        <div class="box">
          <h1 className="p-heading1">Get in Touch</h1>

		  <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label><br/>
      <input class="inputForm" type="text" name="user_name" />
	  <br />
      <label>Email</label><br/>
      <input class="inputForm" type="email" name="user_email" />
	  <br/>
      <label>Message</label><br/>
      <textarea class="inputForm" name="message" />
	  <br/>
      <input class="inputForm" type="submit" value="Send" /><br/><br/>
    </form>

        </div>
	</section>
    )
  }
export default Contact;