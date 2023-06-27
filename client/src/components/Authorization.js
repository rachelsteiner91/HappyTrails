import React, {useState} from 'react'
import AdventurerCard from './AdventurerCard'
import AddReview from './AddReview'
import HikedTrail from './HikedTrailsList'
import LoginForm from './LoginForm'

function Authorization({adventurers}) {
  return (
    <>
      <div>Authorization
        {/*adventurer card*/}
          <div>
            {
              [...adventurers].map((el) => {
                return <AdventurerCard key = {el.id} adventurer={el} />
              })
            }
          </div>
          <AddReview />
          <HikedTrail />
          <LoginForm />
      </div>
    </>
  )
}

export default Authorization