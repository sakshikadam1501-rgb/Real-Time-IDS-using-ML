from scapy.all import sniff
from app.detector import detect_attack
from app.database import attacks_collection
from app.threat_engine import analyze_threat
from datetime import datetime

print("===================================")
print(" AI CLOUD IDS PACKET SNIFFER ")
print("===================================")
print("Packet Sniffer Running...\n")


def process_packet(packet):

    try:

        # Packet Size
        packet_size = len(packet)

        # Dummy Connections
        connections = 10

        # ML Prediction
        prediction = detect_attack(
            packet_size,
            connections
        )

        # Source IP
        source_ip = (
            packet[0][1].src
            if packet.haslayer(1)
            else "Unknown"
        )

        # Destination IP
        destination_ip = (
            packet[0][1].dst
            if packet.haslayer(1)
            else "Unknown"
        )

        # Protocol
        protocol = (
            packet.proto
            if hasattr(packet, "proto")
            else -1
        )

        # Threat Analysis Engine
        analysis = analyze_threat(
            packet_size,
            protocol
        )

        attack_type = analysis["attack_type"]

        severity = analysis["severity"]

        threat_score = analysis["threat_score"]

        # Threat Detection Logic
        if prediction == 1 or packet_size > 100:

            # Attack Status
            status = "ACTIVE"

            # Timestamp
            timestamp = str(datetime.now())

            # Attack Data
            attack_data = {

                "attack_type": attack_type,

                "severity": severity,

                "packet_size": packet_size,

                "source_ip": source_ip,

                "destination_ip": destination_ip,

                "protocol": protocol,

                "threat_score": threat_score,

                "status": status,

                "timestamp": timestamp
            }

            # Store Attack
            attacks_collection.insert_one(
                attack_data
            )

            # Console Alert
            print(
                f"""

==================================================
⚠ THREAT DETECTED
==================================================

Attack Type     : {attack_type}

Severity Level  : {severity}

Threat Score    : {threat_score}%

Source IP       : {source_ip}

Destination IP  : {destination_ip}

Protocol        : {protocol}

Packet Size     : {packet_size}

Status          : {status}

Timestamp       : {timestamp}

==================================================
"""
            )

    except Exception as e:

        print("Error:", e)


# Start Packet Sniffing
sniff(
    prn=process_packet,
    store=False
)