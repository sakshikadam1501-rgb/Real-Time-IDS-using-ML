import React, { useState } from "react";
import axios from "axios";

function Login({ setToken }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      setToken(response.data.access_token);

    } catch (error) {

      alert("Unauthorized Access Detected");
    }
  };

  return (

    <div
      style={{
        backgroundColor: "#050816",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        color: "white"
      }}
    >

      <div
        style={{
          width: "400px",
          backgroundColor: "#0f172a",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 0px 20px red",
          border: "1px solid red"
        }}
      >

        <div style={{ textAlign: "center" }}>

          <h1
            style={{
              color: "#ff3b3b",
              marginBottom: "5px"
            }}
          >
            CLOUD IDS
          </h1>

          <h3
            style={{
              color: "#94a3b8",
              marginBottom: "30px"
            }}
          >
            Intrusion Detection System
          </h3>

        </div>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            borderLeft: "4px solid red"
          }}
        >

          <p style={{ margin: 0 }}>
            🔒 Secure SOC Authentication
          </p>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "13px",
              marginTop: "5px"
            }}
          >
            Authorized Security Personnel Only
          </p>

        </div>

        <input
          type="text"
          placeholder="Security Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #334155",
            backgroundColor: "#1e293b",
            color: "white",
            outline: "none",
            fontSize: "15px"
          }}
        />

        <input
          type="password"
          placeholder="Access Key"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "25px",
            borderRadius: "8px",
            border: "1px solid #334155",
            backgroundColor: "#1e293b",
            color: "white",
            outline: "none",
            fontSize: "15px"
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ff3b3b",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "0.3s"
          }}
        >
          ACCESS SECURITY DASHBOARD
        </button>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "12px"
          }}
        >

          <p>
            AI-Powered Threat Monitoring System
          </p>

          <p>
            Real-Time Cloud Intrusion Protection
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;