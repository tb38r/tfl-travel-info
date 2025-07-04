import { Outlet } from "react-router-dom";
import SearchStatus from "../search-bar/searchStatus";
import Header from "../header/header";
import JourneyPlanner from "../journey-planner/journeyPlanner";

export default function Layout() {
  return (
    <>
    <Header/>
      <div style={{ display: "flex", height: "100vh", }}>
        <aside
          style={{ width: "25%", padding: "0.5rem", backgroundColor: "#f5f5f5", }}
        >
          {<>
            <SearchStatus />
            <JourneyPlanner/>
            </>
            /*
        <JourneyInput />
        <JourneyOptions /> */
          }
        </aside>

        {/* Right 2/3 (dynamic content) */}
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
