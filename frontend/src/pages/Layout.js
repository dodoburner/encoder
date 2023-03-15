import { RequireAuth } from "react-auth-kit";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <RequireAuth loginPath="/login">
      <div className="container">
        <Outlet />
      </div>
    </RequireAuth>
  );
}
