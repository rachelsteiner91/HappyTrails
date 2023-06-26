#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, jsonify, make_response, abort, session
from flask_cors import CORS
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
# from flask_bcrypt import Bcrypt

app = Flask(__name__)

# bcrypt = Bcrypt(app) ## not sure what this is - it was from the lecture 
# Local imports
# from config import app, db, api
# Instantiate app, set attributes
from models import db, Adventurer, HikedTrail, Trail, TrailReview, Location

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)

# Views go here!

if __name__ == '__main__':
    app.run(port=5555, debug=True)
