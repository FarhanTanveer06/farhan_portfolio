import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  const isConfigured = Boolean(WEB3FORMS_ACCESS_KEY)

  const onSubmit = async (data) => {
    setSubmitting(true)
    setSubmitStatus(null)

    if (!isConfigured) {
      setSubmitStatus({ success: false, message: 'Contact form is not configured. Set VITE_WEB3FORMS_ACCESS_KEY.' })
      setSubmitting(false)
      return
    }

    try {
      const formData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data.name,
        email: data.email,
        message: data.message,
        subject: 'New Contact Form Message from Portfolio'
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ success: true, message: 'Thank you! Your message has been sent successfully.' })
        reset()
      } else {
        setSubmitStatus({ success: false, message: 'Something went wrong. Please try again later.' })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Error sending message. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Send a message</h2>

      <div className="contact-map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps?q=Suvastu+Chirontoni,+26+Indira+Road,+Farmgate&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows="6"
              {...register('message', { required: 'Message is required' })}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>

        <div className="contact-info">
          <div className="contact-avatar">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Profile"
            />
          </div>
          <h3 className="contact-info-title">Get in touch</h3>
          
          <div className="contact-info-item">
            <strong>Phone:</strong>
            <span>+ (880) 1882975833</span>
          </div>

          <div className="contact-info-item">
            <strong>Address:</strong>
            <span>Suvastu Chirontoni, 26 Indira Road , Farmgate</span>
          </div>

          <div className="contact-info-item">
            <strong>Email:</strong>
            <span>tanveer.shihab.sarkar@g.bracu.ac.bd</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

