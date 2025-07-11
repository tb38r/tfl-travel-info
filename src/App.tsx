import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./components/home/home";
import DisplayArrivals from "./components/arrivals/displayArrivals";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/arrivals/:tubestop" element={<DisplayArrivals />} />
        {/* <Route path="*" element={<Invalid route/404 />} /> */}

        {/* <Route path="search" element={<Arrivals />}
      <Route path="plan" element={<JourneyResults />} />  */}
      </Route>
    </Routes>
  );
}

export default App;
