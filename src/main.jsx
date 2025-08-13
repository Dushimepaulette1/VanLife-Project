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
import HostVans from "./Pages/Host/HostVans.jsx";
import HostVanDetails from "./Pages/Host/HostVanDetails.jsx";
import HostVanInfo from "./Pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./Pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./Pages/Host/HostVanPhotos.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Error from "./Components/Error.jsx";
import { loader as vanLoader } from "./Pages/Vans.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vanLoader}
      ></Route>
      <Route path="vans/:id" element={<VanDetails />}></Route>
      <Route path="/host" element={<HostLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="income" element={<Income />}></Route>

        <Route path="reviews" element={<Reviews />}></Route>
        <Route path="vans" element={<HostVans />}></Route>
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />}></Route>
          <Route path="pricing" element={<HostVanPricing />}></Route>
          <Route path="photos" element={<HostVanPhotos />}></Route>
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
