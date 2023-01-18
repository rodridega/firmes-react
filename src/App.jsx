import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/Layout/ErrorPage";
import { FirmesLayout } from "./components/Layout/FirmesLayout";
import { MouseTracker } from "./components/UI/MouseTracker";
import { AboutUs } from "./pages/About Us/AboutUs";
import { ChillLayout } from "./pages/Chill/ChillLayout";
import { CreatorsLayout } from "./pages/Creators/CreatorsLayout";
import { HomeLayout } from "./pages/Home/HomeLayout";
import { SouvenirsLayout } from "./pages/Souvenirs/SouvenirsLayout";
import { WorkLayout } from "./pages/Work/WorkLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirmesLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomeLayout /> },
        {
          path: "creators",
          element: <CreatorsLayout />,
        },
        {
          path: "work",
          element: <WorkLayout />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "skills",
          element: <CreatorsLayout />,
        },
        {
          path: "souvenirs",
          element: <SouvenirsLayout />,
        },
        ,
        {
          path: "chill",
          element: <ChillLayout />,
        },
      ],
    },
  ]);

  return (
    <div>
      <MouseTracker />
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
