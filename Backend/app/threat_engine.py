def analyze_threat(
    packet_size,
    protocol
):

    # Attack Type Detection
    if packet_size > 1400:

        attack_type = "DDoS Attack"

    elif protocol == 1:

        attack_type = "ICMP Flood"

    elif protocol == 6:

        attack_type = "TCP Suspicious Traffic"

    elif protocol == 17:

        attack_type = "UDP Flood"

    else:

        attack_type = "Unknown Threat"

    # Dynamic Threat Score
    threat_score = min(
        100,
        int(packet_size / 15)
    )

    # Dynamic Severity
    if threat_score > 85:

        severity = "Critical"

    elif threat_score > 60:

        severity = "High"

    elif threat_score > 30:

        severity = "Medium"

    else:

        severity = "Low"

    return {

        "attack_type": attack_type,

        "severity": severity,

        "threat_score": threat_score
    }