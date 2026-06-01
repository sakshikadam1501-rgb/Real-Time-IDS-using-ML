import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  return (

    <div>

      {

        token ? (

          <Dashboard />

        ) : (

          <Login setToken={setToken} />

        )

      }

    </div>

  );
}

export default App;