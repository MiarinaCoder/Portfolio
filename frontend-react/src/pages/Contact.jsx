import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import "../styles/pages/Contact.css";
import ContactInfoCard from "../components/ContactInfoCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_3fp1x7h",   // ton service ID
      "template_i1zanxm",  // ton template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "J98gVpMZ350vC_W4L"
    );

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    console.error("Erreur envoi email :", error);
  }

  setIsSubmitting(false);

  setTimeout(() => setSubmitted(false), 5000);
};
  return (
    <div className="contact-page" id="contact">
      <div className="contact-wrap">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-header-inner">
            <div className="contact-header-icon">
              <Mail style={{ width: '32px', height: '32px', color: 'white' }} />
            </div>
            <h2 className="contact-title">Contact</h2>
          </div>
        </div>

        <div className="form-grid">
          {/* Formulaire */}
          <div>
            <div className="form-card">
              {submitted && (
                <div className="submitted-banner animate-slideDown">
                  <div className="submitted-dot animate-pulse"></div>
                  <p style={{ color: '#155724', fontWeight: '600', margin: 0 }}>
                      Message envoyé avec succès ! Je vous répondrai bientôt.
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Nom */}
                <div className="form-field">
                  <label htmlFor="name" className="field-label">
                    <User style={{ width: '16px', height: '16px', color: '#6b9aaf' }} />
                    Nom
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-field">
                  <label htmlFor="email" className="field-label">
                    <Mail style={{ width: '16px', height: '16px', color: '#6b9aaf' }} />
                    Email
                  </label>
                  <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                {/* Message */}
                <div className="form-field">
                  <label htmlFor="message" className="field-label">
                    <MessageSquare style={{ width: '16px', height: '16px', color: '#6b9aaf' }} />
                    Message
                  </label>
                  <textarea
                    className="textarea"
                    id="message"
                    name="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre projet..."
                    required
                  ></textarea>
                </div>

                {/* Bouton */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid white',
                        borderTopColor: 'transparent',
                        borderRadius: '50%'
                      }} className="animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send style={{ width: '20px', height: '20px' }} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="info-column">
            <ContactInfoCard icon={<Mail style={{ width: '24px', height: '24px', color: '#6b9aaf' }} />} title="Email" href="mailto:sendramiarina@gmail.com">sendramiarina@gmail.com</ContactInfoCard>

            <ContactInfoCard icon={<Linkedin style={{ width: '24px', height: '24px', color: '#6b9aaf' }} />} title="LinkedIn" href="https://www.linkedin.com/in/hasinirina-marie-josia-sendramiarina-566508308/">Voir mon profil</ContactInfoCard>

            <ContactInfoCard icon={<Github style={{ width: '24px', height: '24px', color: '#2c3e50' }} />} title="GitHub" href="https://github.com/MiarinaCoder">@MiarinaCoder</ContactInfoCard>

            <ContactInfoCard icon={<MapPin style={{ width: '24px', height: '24px', color: '#28a745' }} />} title="Localisation">Fianarantsoa, Madagascar</ContactInfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;