import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [attacks, setAttacks] = useState([]);

  const fetchAttacks = async () => {

    const response = await axios.get(
      "http://127.0.0.1:8000/attacks"
    );

    setAttacks(response.data);
  };

  useEffect(() => {

    fetchAttacks();

    const interval = setInterval(
      fetchAttacks,
      3000
    );

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
        padding: "20px"
      }}
    >

      <h1>
        Cloud IDS Security Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        <div
          style={{
            backgroundColor: "red",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h2>Total Attacks</h2>

          <h1>{attacks.length}</h1>
        </div>

      </div>

      <h2 style={{ marginTop: "30px" }}>
        Live Attack Logs
      </h2>

      {

        attacks.map((attack, index) => (

          <div
            key={index}
            style={{
              backgroundColor: "#222",
              padding: "15px",
              marginTop: "10px",
              borderLeft: "5px solid red",
              borderRadius: "5px"
            }}
          >

            <h3>{attack.attack_type}</h3>

            <p>
              Severity: {attack.severity}
            </p>

            <p>
              Packet Size: {attack.packet_size}
            </p>

          </div>

        ))

      }

    </div>
  );
}

export default Dashboard;