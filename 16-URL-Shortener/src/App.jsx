import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css"
import AppLayout from "./layouts/AppLayout";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import DashBoard from "./pages/DashBoard";
import Links from "./pages/Links";
import RedirectLink from "./pages/RedirectLink";
import { AuthContext } from "@/hooks/context.jsx";
import { CustomProvider } from "./hooks/useContext";

let router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: '/',
      element: <Landing />
    },
    {
      path: '/auth',
      element: <Auth />,
    },
    {
      path: '/dashboard',
      element: <DashBoard />
    },
    {
      path: '/link/:id',
      element: <Links />
    },
    { path: '/:id', element: <RedirectLink /> }]
  },
  {

  }
]);

function App() {

  return (
    <CustomProvider>
    <AuthContext value={{authData:{name: 'a'}}}>
      <RouterProvider router={router} />
    </AuthContext>
    </CustomProvider>
  )
}

export default App
