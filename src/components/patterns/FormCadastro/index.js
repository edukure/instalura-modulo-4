import React from 'react';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'omariosouto',
    email: 'devsoutinho@gmail.com',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');

    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  return (
    <form>
      <div>
        <input placeholder="Email" name="email" value={userInfo.email} onChange={handleChange} />
      </div>
      <div>
        <input
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
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
