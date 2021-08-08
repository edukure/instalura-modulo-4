import React from 'react';
import Button from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Box from '../src/components/foundation/layout/Box';
import Grid from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';

import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={() => {
        onClose();
      }}
    >
      {children}
    </ModalWrapper>
  );
}

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        Nosso conteúdo pro modal
      </Modal>

      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="center"
            marginBottom={{ xs: '40px', md: '0px' }}
          >
            {/* <Grid.Col value={5} offset={1}> */}
            <Text
              variant="title"
              tag="h1"
              // textAlign={'center'}
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                setModalState(!isModalOpen);
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="Imagem de celular mostrando o perfil do Cage no Instalura"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
