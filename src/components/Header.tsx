import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Header() {
  const popup = () => {
    alert("Hello baby!");
  };
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
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          Google Shop
        </a>
        <form className="form-inline">
          <button
            className="btn btn-primary my-2 my-sm-0 mt-2"
            type="submit"
            style={{ marginRight: "15px" }}
          >
            <Link
              to="addshop"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Shop
            </Link>
          </button>
          <button
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
            style={{ marginRight: "15px" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              View Shop
            </Link>
          </button>
        </form>
      </nav>

      <Outlet />
    </>
  );
}
