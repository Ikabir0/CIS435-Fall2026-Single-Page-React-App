function SearchBar({ value, onChange }) {
  return (
    <div className="field search-bar">
      <label htmlFor="search">Search by name or email</label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to filter..."
      />
    </div>
  )
}

export default SearchBar
