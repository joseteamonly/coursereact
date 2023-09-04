import React  from 'react'

const Filtro = ({ value, onChange }) => {
    return (
      <form>
        <div>
          Filtrar con: <input value={value} onChange={onChange} />
        </div>
      </form>
    );
  }

export default Filtro