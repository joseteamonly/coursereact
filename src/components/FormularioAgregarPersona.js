import React from 'react';

const FormularioAgregarPersona = ({ onSubmit, name, phone, onNameChange, onPhoneChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={name} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={phone} onChange={onPhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default FormularioAgregarPersona;