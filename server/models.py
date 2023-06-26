from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy import MetaData
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

db = SQLAlchemy() 
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)

# Models go here!
class Adventurer(db.Model, SerializerMixin):
    __tablename__ = "adventurers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String)
    #####validate password#### 

    #RELATIONSHIP
    #the Adventurer has many hiked_trails
    #the adventuruer has many reviews 
    trail_reviews = db.relationship('TrailReview', back_populates='adventurer')
    hiked_trails = db.relationship('HikedTrail', back_populates='adventurer')


    #ASSOCIATION PROXY
    # the Adventurer has many trails through hiked_trails
    trails_list = association_proxy('hiked_trails', 'trail')
    
    #SERIALIZER



    
     
    #VALIDATIONS
    @validates("name")
    def validate_name(self, key, name):
        if not name:
            raise ValueError("Must include a name.")
        if len(name) < 1:
            raise ValueError("Name must be at least 1 character.")
        return name
    
    @validates("username")
    def validate_username(self, key, username):
        if not username:
            raise ValueError("Must include a username.")
        if len(username) < 5:
            raise ValueError("Username must be at least 5 characters.")
        return username

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
    
    #RELATIONSHIPS
    #hikedTrail has one adventurer and one trail
    adventurer = db.relationship('Adventurer', back_populates='hiked_trails')
    trail = db.relationship('Trail', back_populates='hiked_trails')

    #SERIALIZER
    serialize_rules = (
        "-adventurer.hiked_trails",
        "-trail.hiked_trails"
    )
    #VALIDATIONS
    @validates("date")
    def validate_date(self, key, date):
        pass
    # #checks if it is in proper date time format
    # def valid_date(date):
    #     try:
    #         datetime.datetime.strptime(date, "%Y-%m-%d")
    #         return True
    #     except ValueError:
    #         return False
    # def valid_string(name):
    #     if len(name) >= 1:
    #         return True
    #     else:
    #         return False




class Trail(db.Model, SerializerMixin):
    __tablename__ = "trails"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    difficulty = db.Column(db.String)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    distance = db.Column(db.String)
    altitude = db.Column(db.String)
    description = db.Column(db.String)
    trail_reviews_id = db.Column(db.Integer)
    location_id = db.Column(db.Integer)

    #RELATIONSHIPS
    # A Trail has many hikes (hiked_trails)
    # a trail has a location 
    # a Trail has many Reviews through Trail_Reviews 
    hiked_trails = db.relationship('HikedTrail', back_populates='trail')
    location = db.relationship('Location', back_populates='trails_list')
    trail_reviews = db.relationship('TrailReview', back_populates='trail')   

    #VALIDATION
    #do we need to validate?


class TrailReview(db.Model, SerializerMixin):
    __tablename__ = "trail_reviews"

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String)
    adventurer_id = db.Column(db.Integer, db.ForeignKey('adventurers.id'), nullable=False)
    trail_id = db.Column(db.Integer, db.ForeignKey('trails.id'), nullable=False)

    #RELATIONSHIPS
        # Each review has one Trail and one Adventurer 
    adventurer = db.relationship('Adventurer', back_populates='trail_reviews')
    trail = db.relationship('Trail', back_populates='trail_reviews')

    #SERIALIZER
    serialize_rules = (
        "-adventurer.trail_reviews",
        "-trail.trail_reviews"
    )


    #VALIDATIONS
    @validates("review")
    def validate_review(self, key, review):
        if not review:
            raise ValueError("Must include a review.")
        if len(review) < 25:
            raise ValueError("Review must be at least 25 characters.")
        return review




class Location(db.Model, SerializerMixin):
    __tablename__ = "locations"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location_type = db.Column(db.String)
    
    #RELATIONSHIPS
    #Each Location has many Trails (trails_list)
    trails_list = db.relationship('Trail', back_populates='location')

    #SERIALIZER


    #VALIDATIONS
    #do we need validations?