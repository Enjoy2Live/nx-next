import Link from "next/link";
import { Logout, User } from "@devlaunchers/utils";
import { env } from "@devlaunchers/utils";
import {
  AccountMenuDropdownItem,
  AccountMenuDropdownButton,
  MenuButton,
} from "./StyledAccountDropdown";


const AccountDropdown: React.FC<{userData: User}> = (props) => {
  
  return (
    <div>
      {props?.userData?.id ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              {" "}
              <AccountMenuDropdownItem>
                <Link href="/user-profile" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={Logout}>
                Logout{" "}
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <MenuButton fontSize={1.2} href={env().GOOGLE_AUTH_URL}>
          Sign In{" "}
        </MenuButton>
      )}
    </div>
  );
}
export default AccountDropdown;