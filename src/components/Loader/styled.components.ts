import { styled } from "styled-components";

export const FullPageLoader = styled.div`
  position: fixed;
  width: 100%;
  top: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  text-align: center;
  @media (max-width: 768px) {
    p {
      margin: 1.2rem;
    }
  }
`;

export const Logo = styled.img`
  background-color: ${({ theme }) => theme.wrapperBack};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  animation: logoSpin 3s ease-in-out infinite, glow 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(255, 165, 0, 0.8));

  @keyframes logoSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes glow {
    0% {
      filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))
        drop-shadow(0 0 10px rgba(173, 216, 230, 0.5));
    }
    50% {
      filter: drop-shadow(0 0 25px rgba(255, 165, 0, 1))
        drop-shadow(0 0 25px rgba(173, 216, 230, 1));
    }
    100% {
      filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))
        drop-shadow(0 0 10px rgba(173, 216, 230, 0.5));
    }
  }

  @media (max-width: 768px) {
    margin: 1.9rem;
  }
`;

export const LoaderText = styled.p`
  background-color: ${({ theme }) => theme.wrapperBack};
  margin-top: 2.5rem;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  color: rgba(10, 21, 228, 0.89);
  text-align: center;
  font-weight: 700;
  border-radius: 15px;
  letter-spacing: 1.2px;
  padding:0.3rem 1rem;
  animation: fadeIn 1.5s ease-in-out infinite alternate,
    scaleUp 1.5s ease-in-out infinite alternate;

  @keyframes fadeIn {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
