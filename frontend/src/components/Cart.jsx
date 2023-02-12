import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./admin/CommonStyled";
import Dashboard from "./company/Dashboard";
const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <Dashboard/>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Products;
