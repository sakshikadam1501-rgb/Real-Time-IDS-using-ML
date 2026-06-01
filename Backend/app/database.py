from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient("mongodb://localhost:27017")

db = client["cloud_ids"]

attacks_collection = db["attacks"]