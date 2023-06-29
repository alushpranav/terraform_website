import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Help from "./pages/help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <>
      <h1>MAINSCREEN</h1>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/help">HELP</a>
        </li>
        <li>
          <a href="/profile">PROFILE</a>
        </li>
      </ul>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
