import React, {useState} from 'react'
import AdventurerCard from './AdventurerCard'
import AddReview from './AddReview'
import HikedTrail from './HikedTrailsList'
import LoginForm from './LoginForm'
import {useFormik} from "formik"
import * as yup from "yup"
import {useNavigate} from "react-router-dom"

function Authorization({adventurers}) {
  // const [signup, setSignup] = useState(true);
	// const [error, setError] = useState(null);

	// const navigate = useNavigate();
	// const toggleSignup = () => setSignup((prev) => !prev)


  // const formSchema = yup.object().shape({
	// 	name: yup.string(),
	// 	username: yup.string().required("Please enter a username"),
	// 	password: yup.string().required("Please enter a password"),
	// });


  // const formik = useFormik({
	// 	initialValues: {
	// 		username: "",
	// 		name: "",
	// 		password: "",
	// 	},
  //   validationSchema: formSchema,
	// 	onSubmit: (values, actions) => {
  //     //only want to make a post to users if signup is true
  //     fetch(signup ? "/signup" : "/login", {
	// 			method: "POST",
	// 			headers: {
	// 				"content-type": "application/json",
	// 			},
	// 			body: JSON.stringify(values),
	// 		}).then((res) => {
	// 			if (res.ok) {
	// 				res.json().then((data) => {
	// 					actions.resetForm()
	// 					updateUser(data)
	// 					navigate("/")
	// 				});
	// 			} else {
  //         res.json().then((err) => setError(err.message))
  //         }
  //       })
  //   }
  // })

  return (
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
  )
}

export default Authorization