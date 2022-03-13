import styled, { StyledComponent } from "styled-components";
import * as Button from "../Button";

interface RoomsProps {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
export const Toggle = styled(Button.default)`
  padding-left: 2rem;
  padding-right: 2rem;
`;
export const Rooms = styled.div<RoomsProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  right: 50%;
  left: -50%;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  z-index: 1;

  & > * {
    color: black;
    border: 1px solid black;
    padding: 12px 16px;
    text-decoration: none;
    text-align: center;
    display: block;

    &:hover,
    &:focus {
      background-color: #ddd;
      color: #000;
    }
  }
`;
