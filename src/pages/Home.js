import React from "react";
import Auth from "../utils/auth";
import GameBoard from "../components/GameBoard";

const Home = () => {

    const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <GameBoard />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
