import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

const WebsitePageWrapper = ({ children }) => {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <Box display="flex" flex="1" flexDirection="column">
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>

        <Menu
          onCadastrarClick={() => setModalState(true)}
        />
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WebsitePageWrapper;
