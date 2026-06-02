import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [attacks, setAttacks] = useState([]);

  const fetchAttacks = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/attacks"
      );

      setAttacks(response.data);

    } catch (error) {

      console.log(error);

    }
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
        backgroundColor: "#050816",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          color: "#ff3b3b",
          marginBottom: "20px"
        }}
      >
        CLOUD IDS SECURITY CENTER
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            borderLeft: "5px solid red",
            boxShadow: "0px 0px 15px rgba(255,0,0,0.4)"
          }}
        >

          <h3>Total Attacks</h3>

          <h1>{attacks.length}</h1>

        </div>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            borderLeft: "5px solid orange",
            boxShadow: "0px 0px 15px rgba(255,165,0,0.4)"
          }}
        >

          <h3>Threat Status</h3>

          <h2>ACTIVE</h2>

        </div>

      </div>

      <h2
        style={{
          marginTop: "40px",
          color: "#ff4d4d"
        }}
      >
        LIVE THREAT LOGS
      </h2>

      {

        attacks.length === 0 ? (

          <p>No attacks detected.</p>

        ) : (

          attacks.map((attack, index) => (

            <div
              key={index}
              style={{
                backgroundColor: "#111827",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "12px",
                borderLeft: "6px solid red",
                boxShadow:
                  "0px 0px 15px rgba(255,0,0,0.3)"
              }}
            >

              <h2
                style={{
                  color: "#ff4d4d"
                }}
              >
                {attack.attack_type}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(250px,1fr))",
                  gap: "10px"
                }}
              >

                <p>
                  <strong>Severity:</strong>
                  {" "}
                  {attack.severity}
                </p>

                <p>
                  <strong>Source IP:</strong>
                  {" "}
                  {attack.source_ip}
                </p>

                <p>
                  <strong>Destination IP:</strong>
                  {" "}
                  {attack.destination_ip}
                </p>

                <p>
                  <strong>Protocol:</strong>
                  {" "}
                  {attack.protocol}
                </p>

                <p>
                  <strong>Packet Size:</strong>
                  {" "}
                  {attack.packet_size}
                </p>

                <p>
                  <strong>Threat Score:</strong>
                  {" "}
                  {attack.threat_score}%
                </p>

                <p>
                  <strong>Status:</strong>
                  {" "}
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold"
                    }}
                  >
                    {attack.status}
                  </span>
                </p>

                <p>
                  <strong>Timestamp:</strong>
                  {" "}
                  {attack.timestamp}
                </p>

              </div>

            </div>

          ))

        )

      }

    </div>
  );
}

export default Dashboard;