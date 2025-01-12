import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 
    0 10px 20px ${({ theme }) => theme.heavyBoxShadow}, 
    0 -10px 20px ${({ theme }) => theme.heavyBoxShadow},
    10px 0 20px ${({ theme }) => theme.heavyBoxShadow}, 
    -10px 0 20px ${({ theme }) => theme.heavyBoxShadow};
  border-radius: 10px;
`;


export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 25px auto;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  font-size: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4e73df;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: #e74c3c;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginButton = styled.button`
  background-color: #4e73df;
  color: white;
  padding: 14px;
  font-size: 1.3rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: center;
  width: 60%;
  transition: background-color 0.3s ease;
  margin: 15px 0px;

  &:hover {
    background-color: #2e59d9;
  }
`;

export const SignUpButton = styled.button`
  background-color: #4e73df;
  color: white;
  padding: 14px;
  font-size: 1.3rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: center;
  width: 60%;
  transition: background-color 0.3s ease;
  margin: 15px 0px;

  &:hover {
    background-color: #2e59d9;
  }
`;

export const SignUpText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
`;

export const SignUpLink = styled.span`
  color: #4e73df;
  cursor: pointer;
  font-weight: 500;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ForgotPasswordLink = styled.span`
  font-size: 1.2rem;
  color: #4e73df;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ForgetPasswordContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0px 40px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FgTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 25px auto;
`;

export const ForgetPasswordButton = styled.button`
  padding: 12px 15px;
  background-color: #4e73df;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: center;
  width: 60%;
  transition: background-color 0.3s ease;
  margin: 10px 0px;

  &:hover {
    background-color: #2e59d9;
  }
`;

export const Message = styled.div`
  margin-top: 40px;
  font-weight: bold;
  text-align: center;
  color: red;
  font-size: 1.3rem;
`;

export const PageNotFound = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.errorColor};
  font-size: 18px;
  padding: 20px;
`;
