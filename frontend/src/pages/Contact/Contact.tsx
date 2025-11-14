import React from "react";

const Contact: React.FC = () => {
  return (
    <section aria-labelledby="contact-heading" style={{ padding: "32px 0" }}>
      <h1 id="contact-heading" style={{ marginTop: 0 }}>
        Contact Us
      </h1>
      <p>
        Na shkruani për porosi dhe pyetje rreth uniformave të personalizuara.
      </p>
      <ul style={{ paddingLeft: 18 }}>
        <li>Email: info@fijeperpe.example</li>
        <li>Telefon: +355 6X XXX XXXX</li>
      </ul>
    </section>
  );
};

export default Contact;
