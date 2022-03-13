import styled from "styled-components";
import * as DropdownButton from "../../Dropdown";
import Button from "../../Button";


interface AccountMenuDropdownItemProps {
  width?: string;
  fontSize?: string;
  marginTop?: string;
}

export const AccountMenuDropdownButton = styled(DropdownButton.default)`
  @media (orientation: portrait) {
    display: none;
  }
`;

export const MenuButton = styled(Button)`
  @media (orientation: portrait) {
    display: none;
  }
`;

export const AccountMenuDropdownItem = styled.a<AccountMenuDropdownItemProps>`
  font-family: ${({ theme }) => theme?.fonts?.headline}, sans-serif;
  background-color: #1c1c1c;

  width: ${({ width }) => width || ""};
  border: 0px;

  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || "1.1rem"};
  margin-top: ${({ marginTop }) => marginTop || ""};
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bolder;
`;
