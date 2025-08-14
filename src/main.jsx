import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Vans from "./Pages/Vans.jsx";
import "../server.js";
import VanDetails from "./Pages/VanDetails.jsx";
import Layout from "./Components/Layout.jsx";
import { Header } from "./Components/Header.jsx";
import Dashboard from "./Pages/Host/Dashboard.jsx";
import Income from "./Pages/Host/Income.jsx";
import Reviews from "./Pages/Host/Reviews.jsx";
import HostLayout from "./Components/HostLayout.jsx";
import HostVans, { loader as HostVansLoader } from "./Pages/Host/HostVans.jsx";
import HostVanDetails, {
  loader as HostVanDetailsLoader,
} from "./Pages/Host/HostVanDetails.jsx";
import HostVanInfo from "./Pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./Pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./Pages/Host/HostVanPhotos.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Error from "./Components/Error.jsx";
import Login from "./Pages/Login.jsx";
import { loader as vanLoader } from "./Pages/Vans.jsx";
import { loader as VanDetailsLoader } from "./Pages/VanDetails.jsx";
import Authentication from "./utils.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vanLoader}
      ></Route>
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={VanDetailsLoader}
      ></Route>
      <Route path="/host" element={<HostLayout />}>
        <Route
          loader={async () => {
            const authResult = await Authentication();
            if (authResult) return authResult;
            return null;
          }}
          index
          element={<Dashboard />}
        ></Route>
        <Route
          loader={async () => {
            const authResult = await Authentication();
            if (authResult) return authResult;
            return null;
          }}
          path="income"
          element={<Income />}
        ></Route>

        <Route
          loader={async () => {
            const authResult = await Authentication();
            if (authResult) return authResult;
            return null;
          }}
          path="reviews"
          element={<Reviews />}
        ></Route>
        <Route
          loader={HostVansLoader}
          path="vans"
          element={<HostVans />}
        ></Route>
        <Route
          loader={HostVanDetailsLoader}
          path="vans/:id"
          element={<HostVanDetails />}
        >
          <Route
            loader={async () => {
              const authResult = await Authentication();
              if (authResult) return authResult;
              return null;
            }}
            index
            element={<HostVanInfo />}
          ></Route>
          <Route
            loader={async () => {
              const authResult = await Authentication();
              if (authResult) return authResult;
              return null;
            }}
            path="pricing"
            element={<HostVanPricing />}
          ></Route>
          <Route
            loader={async () => {
              const authResult = await Authentication();
              if (authResult) return authResult;
              return null;
            }}
            path="photos"
            element={<HostVanPhotos />}
          ></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(<App />);
