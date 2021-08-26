/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

const WebsitePageWrapper = ({ children, seoProps }) => {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >

      <SEO {...seoProps} />

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
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
};

WebsitePageWrapper.defaultProps = {
  seoProps: {},
};

export default WebsitePageWrapper;
