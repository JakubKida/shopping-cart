import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2 className="contact-card__logo">FakeStore</h2>
        <p className="contact-card__address">
          536 Depot St.Fake,
          <br /> Fake City 1234
          <br /> 111 222 333
          <br /> fakestore@gmail.com
        </p>
        <div className="contact-card__links">
          <a
            href="https://github.com/JakubKida/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <i class="contact-card__icon fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/JakubKida/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <i class="contact-card__icon fas fa-phone"></i>
          </a>
          <a
            href="https://github.com/JakubKida/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <i class="contact-card__icon fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com/JakubKida/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <i class="contact-card__icon fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/JakubKida/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <i class="contact-card__icon fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/JakubKida/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <i class="contact-card__icon fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
