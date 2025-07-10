import { Outlet } from "react-router-dom";
import Arrivals from "../arrivals/arrival";
import Header from "../header/header";
import JourneyPlanner from "../journey-planner/journeyPlanner";
import Lines from "../line-status/lines";

export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      <div className="layout-container">
        <div className="sidebar-section">
          <div className="top-left-section">
            <div className="search-component">
              <Arrivals />
            </div>
            <div
              className="journey-component"
              style={{ backgroundColor: "#E1EBEE" }}
            >
              <JourneyPlanner />
            </div>
          </div>
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
          <div className="bottom-left-section">
            <div className="lines-component">
              <Lines />
            </div>
          </div>
        </div>

        <div className="right-section">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
