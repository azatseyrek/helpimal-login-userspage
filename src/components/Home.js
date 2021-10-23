import React from "react";

import Users from "./Users";

const Home = ({ handleLogout, user }) => {
  return (
    <section className="home">
      <nav>
        <h2>Welcome </h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <Users/>
    </section>
  );
};

export default Home;
