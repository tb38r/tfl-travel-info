import { Outlet } from "react-router-dom";
import SearchStatus from "../search-bar/searchStatus";
import Header from "../header/header";
import JourneyPlanner from "../journey-planner/journeyPlanner";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout-container">
        <div className="sidebar-section">
          <div className="search-component">
            <SearchStatus />
          </div>
          <div className="journey-component">
            <JourneyPlanner />
          </div>
          <div className="additional-component">
            <div style={{ padding: "1rem", backgroundColor: "#e9ecef", borderRadius: "4px" }}>
              Additional Component Placeholder
            </div>
          </div>
        </div>

        <main className="content-section">
          <Outlet />
        </main>
      </div>
    </>
  );
}