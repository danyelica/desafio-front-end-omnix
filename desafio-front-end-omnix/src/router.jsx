import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import useUser from "./hooks/useUser";

export default function MainRoutes() {
  function ProtectedRoutes() {
    const { cep } = useUser();
    return cep ? <Outlet /> : <Navigate to='/home' />;
  }
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />

      <Route element={<ProtectedRoutes />}>
        <Route exact path='/offers' element={<Offers />} />
      </Route>
    </Routes>
  );
}
