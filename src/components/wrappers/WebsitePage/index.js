import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';

const WebsitePageWrapper = ({ children }) => {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
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
  );
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WebsitePageWrapper;
