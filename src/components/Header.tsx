import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-dark"
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          marginBottom: "30px",
        }}
      >
        <p className="navbar-brand" style={{ color: "white" }}>
          Google Shop
        </p>

        <form className="form-inline">
          <button
            data-testid="add-shop"
            className="btn btn-primary my-2 my-sm-0 mt-2"
            type="submit"
            style={{ marginRight: "15px" }}
            onClick={(e) => e.preventDefault()}
          >
            <Link
              to="/addshop"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Shop
            </Link>
          </button>
          <button
            data-testid="view-shop"
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
            style={{ marginRight: "15px" }}
            onClick={(e) => e.preventDefault()}
          >
            <Link
              to="/viewshop"
              style={{ textDecoration: "none", color: "white" }}
            >
              View Shop
            </Link>
          </button>
        </form>
      </nav>

      <Outlet />
    </>
  );
}
