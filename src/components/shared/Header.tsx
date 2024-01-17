import { Link } from 'react-router-dom';
import {
  Button,
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function Header() {
  return (
    <Navbar
      color="dark"
      dark
    >
      <Link to="/">
        <NavbarBrand>
          <img
            alt="logo"
            src="/logo-white.svg"
            style={{
              height: 40,
              width: 40
            }}
          />
          UserBook
        </NavbarBrand>
      </Link>

      <Button color="warning">
        <Link to="/add-user">Add User</Link>
      </Button>
    </Navbar>
  );
}

export default Header;