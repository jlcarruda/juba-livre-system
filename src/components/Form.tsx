import styled from 'styled-components';

interface FormProps {
  marginTop: number | string;
}

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form.attrs((props: FormProps) => ({ marginTop: props.marginTop ?? '1em' }))`
  width: 100%;
  margin-top: ${(props) => props.marginTop};
`;
