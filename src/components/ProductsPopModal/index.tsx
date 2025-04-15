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
  border-radius: 10px;
  max-width: 900px;
  width: 90%;
  box-shadow: 0 4px 20px ${({ theme }) => theme.mediumBoxShadow};
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.wrapperBack};
`;

export const CloseIcon = styled(RiCloseLine)`
  position: sticky;
  top: 0;
  left: 100%;
  margin: 0.1rem 0.3rem 0 0.3rem;
  cursor: pointer;
  z-index: 10;
  width: 26px;
  height: 26px;
  @media (max-width: 786px) {
    width: 22px;
    height: 22px;
    margin: 0.5rem 0.15rem;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 80vh;
  padding: 0rem 0.6rem 0.6rem 0.6rem;
  @media (max-width: 786px) {
    max-height: 85vh;
  }
  @media (max-width: 480px) {
    max-height: 90vh;
    padding: 0rem 0.6rem 1.2rem 0.6rem;
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
