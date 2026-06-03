# AI-Based Cloud Intrusion Detection System

## Overview
AI-Based Cloud Intrusion Detection System (IDS) is a real-time cybersecurity monitoring platform that captures live network packets, analyzes suspicious traffic using Machine Learning, and displays attack intelligence through an interactive dashboard.

---

## Features

- Real-time packet sniffing
- AI-powered threat detection
- Threat score generation
- Dynamic severity analysis
- Source & destination IP tracking
- MongoDB attack logging
- React cybersecurity dashboard
- FastAPI backend APIs
- Machine Learning intrusion analysis

---

## Technologies Used

### Frontend
- ReactJS
- Axios
- Chart.js

### Backend
- FastAPI
- Python

### Database
- MongoDB

### Machine Learning
- Random Forest Classifier
- Scikit-learn

### Packet Sniffing
- Scapy

---

## Project Architecture

Network Traffic

↓

Packet Sniffer

↓

Feature Extraction

↓

Machine Learning Detection

↓

Threat Analysis Engine

↓

MongoDB Database

↓

FastAPI APIs

↓

React Dashboard

---

## Installation

### Backend Setup

```bash
cd Backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

---

### Run Packet Sniffer

```bash
cd Backend

venv\Scripts\activate

python -m app.packet_sniffer
```

---

## Future Improvements

- Telegram alerts
- Email alerts
- AWS deployment
- Threat geolocation
- AI anomaly detection
- WebSocket live monitoring

---

## Author

Sakshi Kadam
