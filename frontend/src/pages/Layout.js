import { RequireAuth } from "react-auth-kit";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <RequireAuth loginPath="/login">
      <div className="container h-100">
        <Navbar />
        <Outlet />
      </div>
    </RequireAuth>
  );
}
