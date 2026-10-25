import { useState } from 'react'

const emptyForm = { name: '', email: '', phone: '' }

function ContactForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    onAdd({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    })
    setForm(emptyForm)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form">
      <div className="field">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? 'invalid' : ''}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? 'invalid' : ''}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Contact
      </button>
    </form>
  )
}

export default ContactForm
