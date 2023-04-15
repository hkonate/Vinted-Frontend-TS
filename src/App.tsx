import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useRoutes,
  useMatch,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./home/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./singUp/SignUp";
import Offer from "./offer/Offer";
import { Publish } from "./publish/Publish";
import { Payment } from "./payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { RootState, Authentificated } from "./redux/Types";
import { Buttons } from "./components/Buttons/Buttons";

export function App() {
  const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Promise);
  const user = useSelector(
    (state: RootState) => state.user
  ) as unknown as Authentificated;

  function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Buttons />
      </>
    );
  }
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    if (!user.user && location) return <SignIn path={location?.pathname} />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/offer/:id",
          element: <Offer />,
        },
        {
          path: "/publish",
          element: (
            <ProtectedRoute>
              <Publish />
            </ProtectedRoute>
          ),
        },
        {
          path: "/payment",
          element: (
            <ProtectedRoute>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
