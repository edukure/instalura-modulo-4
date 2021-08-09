import React from 'react';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'omariosouto',
    nome: 'Mario Souto',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');

    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormValid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('O formulário ta pronto, vamos cadastrar de fato o usuario');

        // Data Transfer Object
        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((respostaConvertidaEmObjeto) => {
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            console.error(error);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>

      <Text variant="paragraph1" tag="p" color="tertiary.light" marginBottom="32px">
        Você está a um passo de saber tudo que está rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField placeholder="Nome" name="nome" value={userInfo.nome} onChange={handleChange} />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button variant="primary.main" type="submit" disabled={isFormValid} fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col display="flex" paddingRight={{ md: '0' }} flex={1} value={{ xs: 12, md: 5, lg: 4 }}>
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
