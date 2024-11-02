import React from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./UI/Spinner";

import Header from "./Header";

export default function Home() {
  return (
    <div className="container">
      {false ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </div>
  );
}
