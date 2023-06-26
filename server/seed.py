#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc, randrange
from models import Adventurer, Trail, HikedTrail, TrailReview, Location

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db

fake = Faker()
#review, adventurer_id, trail_id, adventurer, trail 
# def create_review():
#     reviews=[]
#     for _ in range(20):

if __name__ == '__main__':
    with app.app_context():
        print("Clearing db...")
        Adventurer.query.delete()
        Trail.query.delete()
        HikedTrail.query.delete()
        TrailReview.query.delete()
        Location.query.delete()

        print("Seeding adventurers...")
        adventurers = [
            Adventurer(name="Val Caliguire", username="Val", email="val@happytrails.com"),
            Adventurer(name="Rachel Steiner", username="Rachel", email="rachel@happytrails.com"),
            Adventurer(name="Matty Brouwer", username="Matty", email="matty@happytrails.com"),
            Adventurer(name="Sarah Dean", username="Sarah", email="sarah@happytrails.com"),
            Adventurer(name="Cole Levy", username="Cole", email="cole@happytrails.com")
        ]

        db.session.add_all(adventurers)
        print("Seeding trails...")
        trails = [
            Trail(name="Angels Landing", difficulty="Strenuous",  distance="8.7 km", altitude="1488m", description="This iconic hike offers breathtaking views of Zion Canyon."),
            Trail(name="Delicate Arch", difficulty="Moderate", distance="4.8 km", altitude="1630m", description="This hike leads to the famous Delicate Arch, a symbol of Utah."),
            Trail(name="The Narrows", difficulty="Moderate", distance="Varies", altitude="Varies", description="The Narrows hike is a unique experience where you wade through the Virgin River, surrounded by towering canyon walls."),
            Trail(name="Bryce Canyon Rim Trail", difficulty="Easy to Moderate", distance="8.0 km", altitude="Varies", description="This scenic trail follows the rim of Bryce Canyon, providing stunning views of the iconic hoodoos."),
            Trail(name="Observation Point", difficulty="Strenuous",  distance="13.7 km", altitude="2148m", description="This challenging hike rewards you with spectacular views from one of the highest points in Zion National Park."),
            Trail(name="Canyon Overlook Trail", difficulty="Easy", distance="1.0 mile", altitude="Varies", description="This short but scenic trail offers stunning views of Zion Canyon."),
            Trail(name="Devils Garden Loop Trail", difficulty="Moderate",  distance="7.2 miles", altitude="Varies", description="Explore a variety of unique rock formations on this loop trail in Arches National Park."),
            Trail(name="Queens Garden Trail", difficulty="Moderate", distance="2.9 miles", altitude="Varies", description="Descend into the surreal landscape of Bryce Canyon and encounter whimsical hoodoos."),
            Trail(name="Angel's Palace Trail", difficulty="Easy", distance="1.5 miles", altitude="Varies", description="Discover the fascinating rock formations known as goblins in Goblin Valley State Park."),
            Trail(name="Calf Creek Falls", difficulty="Moderate", distance="5.8 miles", altitude="Varies", description="Hike to a beautiful waterfall and enjoy the lush oasis of Calf Creek."),
            Trail(name="Zion Narrows", difficulty="Strenuous", distance="16 miles", altitude="Varies", description="Hike through the narrowest section of Zion Canyon, wading through the Virgin River."),
            Trail(name="Delicate Arch Viewpoint", difficulty="Easy", distance="1.5 miles", altitude="Varies", description="Enjoy a scenic hike to a viewpoint overlooking the iconic Delicate Arch."),
            Trail(name="Emerald Pools", difficulty="Moderate", distance="3 miles", altitude="Varies", description="Discover a series of beautiful pools and waterfalls nestled in Zion Canyon."),
            Trail(name="Bryce Point", difficulty="Easy", distance="1 mile", altitude="Varies", description="Take in panoramic views of Bryce Canyon's stunning amphitheater from this overlook."),
            Trail(name="The Wave", difficulty="Strenuous", distance="6 miles", altitude="Varies", description="Embark on a challenging hike to witness the unique sandstone formation known as The Wave."),
            Trail(name="Coyote Gulch", difficulty="Strenuous", distance="11 miles", altitude="Varies", description="Explore the stunning Coyote Gulch slot canyon in the Escalante area."),
            Trail(name="Fisher Towers", difficulty="Moderate",  distance="4.4 miles", altitude="Varies", description="Hike among the towering rock formations of the Fisher Towers near Moab."),
            Trail(name="Kanarra Falls", difficulty="Moderate", distance="4.8 miles", altitude="Varies", description="Hike through a slot canyon and enjoy the beautiful Kanarra Falls."),
            Trail(name="Devils Garden Primitive Loop", difficulty="Strenuous", distance="7.2 miles", altitude="Varies", description="Explore the primitive trail and visit several arches in Arches National Park."),
            Trail(name="Cataract Canyon", difficulty="Strenuous", distance="Varies", altitude="Varies", description="Embark on a multi-day rafting adventure through the scenic Cataract Canyon.")
        ]

        db.session.add_all(trails)

        print("Seeding locations...")
        locations = [
            Location(name="Zion National Park", location_type="National Park System"),
            Location(name="Arches National Park", location_type="National Park System"),
            Location(name="Bryce Canyon National Park", location_type="National Park System"),
            Location(name="Goblin Valley State Park", location_type="State Park"),
            Location(name="Grand Staircase-Escalante National Monument", location_type="National Park System"),
            Location(name="Vermilion Cliffs National Monument", location_type="National Park System"),
            Location(name="Escalante", location_type="City Park"),
            Location(name="Moab", location_type="City Park"),
            Location(name="Kanarraville", location_type="City Park"),
        ]

        db.session.add_all(locations)

        hiked_trails = []
        for trail in trails:
            adventurer = rc(Adventurer)
            trail = rc(Trail)
            hiked_trails.append(
                HikedTrail(trail=trail, adventurer=adventurer)
            )
            db.session.add_all(hiked_trails)
            
        
        reviews = []
        for review in reviews:
            trail = rc(trails)
            adventurer = rc(adventurer)
            review = fake.text(10)
            reviews.append(
                TrailReview(trail=trail, adventurer=adventurer, review=review)
            )
            
        db.session.add_all(reviews)
        db.session.commit()
        print("Done Seeding!")



        # Seed code goes here!
