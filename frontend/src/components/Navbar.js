import { useSignOut, useAuthUser } from "react-auth-kit";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const signOut = useSignOut();
  const auth = useAuthUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Nav className="justify-content-end align-items-center gap-3 p-2">
      <Nav.Item className="me-auto">
        Welcome <span className="fw-bold">{auth().email}</span>!
      </Nav.Item>

      <Nav.Item>
        <NavLink
          to="/encoder"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Encoder
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink
          to="/decoder"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Decoder
        </NavLink>
      </Nav.Item>

      <Nav.Item className="ms-5">
        <Button variant="outline-danger" onClick={handleLogout}>
          Logout
        </Button>
      </Nav.Item>
    </Nav>
  );
}
