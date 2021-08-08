import React from 'react';

function FormContent() {
  return (
    <form>
      <div>
        <input placeholder="Email" name="email" value="devsoutinho@gmail.com" />
      </div>
      <div>
        <input placeholder="Usuário" name="usuario" value="omariosouto" />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...propsDoModal}>
      <FormContent />
    </div>
  );
}
