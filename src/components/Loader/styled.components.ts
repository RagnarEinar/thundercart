import { styled } from "styled-components";

export const FullPageLoader = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: calc(100% - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  @media (max-width: 768px) {
    top: 225px;
    height: calc(100% - 225px);
    align-items: baseline;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
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
        drop-shadow(0 0 10px rgba(173, 216, 230, 0.5)); /* Orange and light blue glow */
    }
    50% {
      filter: drop-shadow(0 0 25px rgba(255, 165, 0, 1))
        drop-shadow(0 0 25px rgba(173, 216, 230, 1)); /* Brighter glow */
    }
    100% {
      filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))
        drop-shadow(0 0 10px rgba(173, 216, 230, 0.5)); /* Back to subtle glow */
    }
  }

  @media (max-width: 768px) {
    margin: 30px;
  }
`;
