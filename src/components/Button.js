import styled from "styled-components";

export const BtnContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  font-size: 1.4rem;
  border: 0.06rem solid var(--defaultLightYellow);

  color: ${(props) =>
    props.cart ? "var(--defaulPink)" : "var(--defaultPink)"};
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  border-radius: 0.5rem;
  color: var(--defaultLightYellow);
  border-color: ${(props) =>
    props.cart ? "var(--defaulPink)" : "var(--defaultLightYellow)"};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    /* background: var(--defaultLightYellow); */
    background: ${(props) =>
      props.cart ? "var(--defaultLightPink)" : "var(--defaultLightYellow)"};
    color: var(--defaulPink);
  }
  &:focus {
    outline: none;
  }
`;
