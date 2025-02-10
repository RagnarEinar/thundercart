import styled, { css, keyframes } from "styled-components";

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-15px); }
  50% { transform: translateX(15px); }
  75% { transform: translateX(-15px); }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 67px);
  padding: 10px;
  width: 100%;
    font-size: 1rem;
     @media (max-width: 768px) {  font-size: 0.8rem;}
  }
`;

export const Container = styled.div<{ hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 10px;
  margin: 15px auto;
  background-color: ${({ theme }) => theme.sidebarBackground};
  box-shadow: 0 10px 20px ${({ theme }) => theme.heavyBoxShadow};
  ${({ hasError }) =>
    hasError &&
    css`
      animation: ${shake} 0.3s ease;
    `}
  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  text-align: center;
  margin: 10px 0px;
  font-style: italic;
  line-height: 1.4;
`;

export const Form = styled.form`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0px 30px;
  gap: 5px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  line-height: 1.3;
  font-style: italic;
`;

export const Input = styled.input`
  padding: 12px 16px;

  border: 1px solid ${({ theme }) => theme.mediumBoxShadow};
  border-radius: 15px;
  width: 90%;
  margin: 0px auto;
  font-style: italic;
  border: none;
  &:focus {
    outline: 0.5px solid rgba(45, 223, 255, 0.92);
  }
`;

export const ErrorMessage = styled.span`
  color: rgb(234, 26, 26);
  margin: 8px auto 0px auto;
  line-height: 1.5;
  font-style: italic;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.cartAddToCartBtnBackground};
  color: ${({ theme }) => theme.cartBtnTextColor};
  padding: 10px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 180px;
  margin: 5px auto;
  text-align: center;
  font-style: italic;
  box-shadow: 0 10px 10px ${({ theme }) => theme.mediumBoxShadow};
`;

export const LoginButton = Button;
export const SignUpButton = Button;

export const SignUpText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color};
  font-weight: 500;
  font-style: italic;
`;

export const SignUpLink = styled.span`
  color: ${({ theme }) => theme.cartAddToCartBtnColor};

  cursor: pointer;
  font-weight: 600;
  margin-left: 5px;
  font-style: italic;

  &:hover {
    text-decoration: underline;
  }
`;

export const ForgotPasswordLink = styled(SignUpLink)`
  margin: 10px auto 0px auto;
`;

export const ForgetPasswordContainer = styled.div`
  width: 100%;
  padding: 0 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FgTitle = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.color};
  text-align: center;
  margin: 20px 0;
  line-height: 1.4;
  font-size: 1rem;
  font-style: italic;
`;

export const ForgetPasswordButton = styled(Button)`
  padding: 12px 14px;
`;

export const PageNotFound = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.badgeBackground};
  font-size: 1.2rem;
  padding: 20px;
  font-weight: 600;
  line-height: 1.6;
`;
