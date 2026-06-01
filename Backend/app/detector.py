def detect_attack(packet_size, connections):

    if packet_size > 100:

        return {
            "attack": True,
            "attack_type": "DDoS",
            "severity": "High"
        }

    return {
        "attack": False
    }