import { useState } from 'react'
import ContactForm from './components/ContactForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import ContactList from './components/ContactList.jsx'

function App() {
  // Single source of truth: contacts array and filter text
  const [contacts, setContacts] = useState([])
  const [filterText, setFilterText] = useState('')

  function addContact(contact) {
    const newContact = { id: Date.now().toString(), ...contact }
    setContacts((prev) => [...prev, newContact])
  }

  function deleteContact(id) {
    setContacts((prev) => prev.filter((c) => c.id !== id))
  }

  const search = filterText.trim().toLowerCase()
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search) ||
      c.email.toLowerCase().includes(search)
  )

  return (
    <div className="container">
      <header>
        <h1>Contact Book</h1>
      </header>
      <main>
        <section aria-labelledby="add-heading" className="card">
          <h2 id="add-heading">Add Contact</h2>
          <ContactForm onAdd={addContact} />
        </section>
        <section aria-labelledby="list-heading" className="card">
          <h2 id="list-heading">Contacts</h2>
          <SearchBar value={filterText} onChange={setFilterText} />
          <ContactList
            contacts={filteredContacts}
            totalCount={contacts.length}
            filterText={filterText}
            onDelete={deleteContact}
          />
        </section>
      </main>
    </div>
  )
}

export default App
