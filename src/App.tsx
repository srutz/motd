import { LuLogIn, LuLogOut } from "react-icons/lu";
import { Menubar } from "./components/Menubar";
import { AboutPage } from "./pages/AboutPage";
import { MainPage } from "./pages/MainPage";

import { createBrowserRouter, Link, Outlet, RouterProvider, useLocation, useNavigate } from "react-router";
import { useMyAccount } from "./hooks/useMyAccount";
import { useLogin } from "./hooks/useLogin";
import { LoginDialog } from "./pages/LoginDialog";
import { NotAuthorizedPage } from "./pages/NotAuthorizedPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainUi />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/login",
        element: <LoginDialog />
      },
      {
        path: "/notauthorized",
        element: <NotAuthorizedPage />
      },
      {
        path: "*",
        element: <div>Not Found</div>
      }
    ]
  }
])


export function App() {
  return (
    <RouterProvider router={routes} />
  )
}

function MainUi() {
  const navigate = useNavigate();
  const location = useLocation();
  const myAccount = useMyAccount();
  const loggedIn = !!myAccount

  const { login: logout } = useLogin();

  if (["/notauthorized", "/login"].indexOf(location.pathname) == -1 && !myAccount) {
    navigate("/notauthorized");
  }

  return (
    <div className="flex flex-col gap-2 w-screen h-screen">
      <Menubar>
        <div className="text-lg font-bold mr-8">My App</div>
        {loggedIn && (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </>
        )}
        <div className="grow" />
        {loggedIn ? (
          <>
            <div>Logged in as <span className="font-semibold">{myAccount.email}</span></div>
            <button className="ml-2 mr-4" onClick={() => {
              logout(
                { loggedIn: false, user: null },
                { onSuccess: () => navigate("/") }
              );
            }}>
              <LuLogOut size={18} />
            </button>
          </>
        ) : (
          <button className="mr-4" onClick={() => navigate("/login")}>
            <LuLogIn size={18} />
          </button>
        )}
      </Menubar>
      <Outlet></Outlet>
    </div>
  )
}

