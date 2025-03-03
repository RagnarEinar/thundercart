import React from "react";
import { styled } from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

export interface ProductsPopModalProps {
  enableOutsideClick?: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

export const OrderModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  max-width: 900px;
  width: 90%;
  box-shadow: 0 4px 20px ${({ theme }) => theme.mediumBoxShadow};
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CloseIcon = styled(RiCloseLine)`
  position: sticky;
  top: 0;
  left: 100%;
  margin: 2px 5px 0px 5px;
  cursor: pointer;
  z-index: 10;
  width: 26px;
  height: 26px;
  @media (max-width: 786px) {
    width: 22px;
    height: 22px;
    margin: 1px 3px;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 80vh;
  padding: 0px 20px 20px 20px;
  @media (max-width: 786px) {
    max-height: 85vh;
  }
  @media (max-width: 480px) {
    max-height: 90vh;
    padding: 0px 10px 20px 10px;
  }
`;

const ProductsPopModal: React.FC<ProductsPopModalProps> = ({
  closeModal,
  children,
}) => {
  return (
    <OrderModal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContent
        initial={{ y: -50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CloseIcon onClick={closeModal} />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </OrderModal>
  );
};

export default ProductsPopModal;
