# HappyTrails - Find a Friend. Take a Hike. 

## User Stories:
- Users can search for trails to hike based on location and user preferences.
- User can rate trails they have hiked.
- User can view previous trails and ratings.
- Trails are suggested to User based on history, preferences and ratings/reviews from friends.
- Find new hiking friends based on location and preferences. 
- View information about each trail

## Wireframe
https://www.figma.com/file/7zUR0oTTuSDc9zeY66zNAW/Happy-Trails-team-library?type=design&node-id=0%3A1&mode=design&t=slX3AmVv58niUTyR-1
![Screenshot 2023-06-22 at 11 13 02 PM](https://github.com/rachelsteiner91/HappyTrails/assets/128323898/41f66e0f-003a-4986-b569-36ed4d5c7f40)


## Schema
![Untitled (1)](https://github.com/rachelsteiner91/HappyTrails/assets/128323898/97128a69-8d55-4e34-a566-c89a23f67764)



## API Routes
| API Route                | Method | Body                                                                                   | Response                                                                                                                                                          |
|--------------------------|--------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /adventurers             | GET    |                                                                                        | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "valCal", "password": ****** }, {..}, {..},...                                                  |
| /adventurers             | POST   | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" } | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" }                                                                            |
| /adventurers/<int:id>    | GET    |                                                                                        | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "valCal", "password": "******"  }                                                               |
| /adventurers/<int:id>    | PATCH  | { "attr":"data"}                                                                       | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "UpdatedvalCal", "password": "******"  }                                                        |
| /adventurers/<int:id>    | DELETE |                                                                                        | {}                                                                                                                                                                |
| /trails                  | GET    |                                                                                        | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }, {..}, {..} |
| /trails/<int:id>         | GET    |                                                                                        | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }             |
| /hiked_trails            | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }, {..}, {..},...                                                            |
| /hiked_trails/<int:id>   | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }                                                                            |
| /hiked_trails/<int:id>   | DELETE |                                                                                        | {}                                                                                                                                                                |
| /trail_reviews           | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }, {..}, {..}, ..                                                                           |
| /trail_reviews           | POST   | {     "review" : "review here",     "adventurer_id" : 2, "rating":4  }                 | {     "review" : "review here",     "adventurer_id" : 2, "rating":4  }                                                                                            |
| /trail_reviews/<int:id>  | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }                                                                                           |
| /trail_reviews/<int:id>  | PATCH  | { "attr" : "data",     "adventurer_id" : 3 }                                           | { "attr" : "data",     "adventurer_id" : 3 }                                                                                                                      |
| /trail_reviews/<int:id>  | DELETE |                                                                                        | {}                                                                                                                                                                |
| /friends                 | GET    |                                                                                        | {     "id" : 5,     "name" : "Beau" }, {..}, {..}, ...                                                                                                            |
| /friends/<int:id>        | GET    |                                                                                        | {     "id" : 5,     "name" : "Beau" }                                                                                                                             |
| /friends/<int:id>        | DELETE |                                                                                        | {}                                                                                                                                                                |
|/logout | | | |
|/authorize_session | | | |

## React Component Tree
<img src='./react-tree.png' alt="React Tree">

## Client-side Routes


## Trello Board
<img src='./Trello.png' alt='Trello'>
