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
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
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
    margin: 30px;
  }
`;

export const LoaderText = styled.p`
  margin-top: 40px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: rgb(39, 10, 228);
  text-align: center;
  letter-spacing: 1.2px;
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
