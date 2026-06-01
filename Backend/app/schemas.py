from pydantic import BaseModel

class AttackSchema(BaseModel):
    source_ip: str
    protocol: str
    packet_size: int
    attack_type: str
    severity: str