import React, {useEffect} from 'react';
import TrailCard from './TrailCard';

function HikedTrailsList(props)  {
    console.log(props)
    return(
      <div>Hi</div>

    )}
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trails: [],
    //         error: null,
    //         isLoading: false,
    //     };
    // // }

    // useEffect(() => {
    //   this.setState({ isLoading: true });
    //   fetch('/hiked_trails')
    //       .then(response => response.json())
    //       .then(data => this.setState({ trails: data, isLoading: false }))
    //       .catch(error => this.setState({ error, isLoading: false }));

    // }, [])

    

    // handleHiked = (trail) => {
    //   const updatedHikedStatus = !trail.hiked;
  
    //   fetch(`/hiked_trails/${trail.id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({hiked: updatedHikedStatus}),
    //   })
    //   .then(() => {
    //       this.setState(prevState => ({
    //           trails: prevState.trails.map(t =>
    //               t.id !== trail.id ? t : { ...t, hiked: updatedHikedStatus }
    //           )
    //       }));
    //   })
    //   .catch((error) => {
    //       console.error('Error:', error);
    //   });
    // }
  

    
    //     const { trails, isLoading, error } = this.state;

    //     if (isLoading) {
    //         return <p>Loading ...</p>;
    //     }

    //     if (error) {
    //         return <p>{error.message}</p>;
    //     }

    //     return (
    //         <div>
    //             <h2>Hiked Trails</h2>
    //             {trails.map((trail) => (
    //                 <div key={trail.id}>
    //                     <TrailCard trail={trail} />
    //                     <button onClick={() => this.handleHiked(trail)}>
    //                         {trail.hiked ? "Not Hiked" : "Hiked"}
    //                     </button>
    //                 </div>
    //             ))}
    //         </div>
    //     );
    // }


export default HikedTrailsList;
