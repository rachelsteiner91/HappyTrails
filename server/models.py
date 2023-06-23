from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates

from config import db

db = SQLAlchemy() 
# metadata = MetaData(naming_convention={
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
# })
# db = SQLAlchemy(metadata=metadata)

# Models go here!
class Adventurer(db.Model, SerializerMixin):
    __tablename__ = "adventurers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String)
    #Serializers
    #Relationships
    # the Adventurer has many hiked_trails
    # the Adventurer has many trail_reviews
    # Adventurer has many friends
    trail_reviews = db.relationship('TrailReview', back_populates='adventurer')
    hiked_trails = db.relationship('HikedTrail', back_populates='adventurer')
    # trails = association_proxy
    #Validations
    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError('failed simple email validation')
        return address

class HikedTrail(db.Model, SerializerMixin):
    __tablename__ = "hiked_trails"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date)
    adventurer_id = db.Column(db.Integer, db.ForeignKey('adventurers.id'), nullable=False)
    trail_id = db.Column(db.Integer, db.ForeignKey('trails.id'), nullable=False)
    hiked_trails = db.Column(db.String)
    trail_reviews = db.Column(db.String)
    trails= db.Column(db.String)
    #Serializers
    #Relationships
    #hikedTrail has many adventurers
    adventurers = db.relationship('Adventurer', back_populates='hiked_trail')
    #Validations

class Trail(db.Model, SerializerMixin):
    __tablename__ = "trails"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    difficulty = db.Column(db.String)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    distance = db.Column(db.String)
    altitude = db.Column(db.String)
    description = db.Column(db.String)
    #Serializers
    #Relationships
    # A Trail has many trail reviews
    trail_reviews = db.relationship('TrailReview', back_populates='trail')
    #Validations

class TrailReview(db.Model, SerializerMixin):
    __tablename__ = "trail_reviews"

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String)
    adventurer_id = db.Column(db.Integer, db.ForeignKey('adventurers.id'), nullable=False)
    adventurer = db.Column(db.String)
    trail = db.Column(db.String)
    #Serializers
    #Relationships
    # Trail reviews has many
    #Validations

class Friend(db.Model, SerializerMixin):
    __tablename__ = "friends"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    adventurer_id = db.Column(db.Integer, db.ForeignKey('adventurers.id'), nullable=False)
    #Serializers
    #Relationships
    #Validations

class Location(db.Model, SerializerMixin):
    __tablename__ = "locations"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location_type = db.Column(db.String)
    trail = db.Column(db.String)
    #Serializers
    #Relationships
    #Validations