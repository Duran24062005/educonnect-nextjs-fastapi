
export const InputSearch = ( filter, setFilter) => {
  return (
    <input 
        type="text" 
        className="flex-grow px-3 py-2 focus:outline-none" 
        placeholder="Buscar Post"
        value={ filter }
        onChange={ (e) => setFilter(e.target.value) }
    />
  )
}
