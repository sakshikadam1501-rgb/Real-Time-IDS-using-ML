from scapy.all import sniff
from app.detector import detect_attack
from app.database import attacks_collection
from app.alerts import send_telegram_alert


def process_packet(packet):
    packet_size = len(packet)

    result = detect_attack(packet_size, 10)

    if result["attack"]:

        attack_data = {
            "attack_type": result["attack_type"],
            "severity": result["severity"],
            "packet_size": packet_size
        }

        attacks_collection.insert_one(attack_data)

        message = f"ALERT: {result['attack_type']} detected"

        print(message)

        send_telegram_alert(message)


print("Packet Sniffer Running...")

sniff(prn=process_packet, store=False)