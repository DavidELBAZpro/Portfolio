import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { ContactForm } from "./DynamicCmps/contact-form";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <a
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=david.elbaz.pro@gmail.com"
              target="_blank"
            >
              Send me an Email (Gmail)
            </a>
            <div className="link-to-gmail">
              <a href="mailto:david.elbaz.pro@gmail.com" target="_blank">
                Send me an Email (others)
              </a>
            </div>
          </article>

          <article className="contact-option">
            <BsLinkedin />
            <h4>Whatsapp</h4>
            <a href="https://www.linkedin.com/in/davidelbaz1" target="_blank">
              Connect with me on LinkedIn
            </a>
          </article>

          <article className="contact-option">
            <BsTwitter />
            <h4>Twitter</h4>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1144874629"
              target="_blank"
            >
              Reach me on Twitter
            </a>
          </article>

          <article className="contact-option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <a
              href="https://web.whatsapp.com/send?phone=+330767633565"
              target="_blank"
            >
              Reach me on WhatsApp
            </a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name="name" placeholder="Fullname" required />
          <input type="text" name="name" placeholder="Email" required />
          <textarea type="text" rows="10" name="message" placeholder="Type your message ..." required />
          <button type="submit" className="btn btn-primary">Send</button>
        </form> */}
        <ContactForm />
      </div>
    </section>
  );
};
