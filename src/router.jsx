// router.js
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import CardForm from "./components/CardForm";
import CardDistribution from "./components/CardDistribution";
import CardCollection from "./components/CardCollection";
import VillageMember from "./components/VillageMember";

const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/card-form/:type",
        element: <CardForm />,
      },
      {
        path: "/card-distribution",
        element: <CardDistribution />,
      },
      {
        path: "/card-collection",
        element: <CardCollection />,
      },
      {
        path: "/member-collection",
        element: <VillageMember />,
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default router;
