import { Outlet } from "react-router-dom";
import SearchStatus from "../search-bar/searchStatus";
import Header from "../header/header";
import JourneyPlanner from "../journey-planner/journeyPlanner";
import Line from "../line-status/line";
import Lines from "../line-status/lines";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout-container">
        <div className="sidebar-section">
          <div className="search-component">
            <SearchStatus />
          </div>
          <div
            className="journey-component"
            style={{ backgroundColor: "#E1EBEE" }}
          >
            <JourneyPlanner />
          </div>
          <div className="lines-component">
            <div
              style={{
                padding: "5px",
                borderRadius: "4px",
                color: "black",
                fontWeight: "500",
                fontSize: "1.2rem",
              }}
            >
              Status Updates
            </div>
            <Lines />
          </div>
        </div>

        <main className="content-section">
          <Outlet />
        </main>
      </div>
    </>
  );
}
