import React, {useEffect, useState} from 'react';
import axios from 'axios';


// taking id as props comes from link path 
function SingleLaunch ({id}) {
    const [launch, setLaunch] = useState(null);


    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/' + id)
        // when i get my data i wanna do response take in that response with a data
        .then(response => setLaunch(response.data))
        .catch(console.log);
    }, []);

    if(launch == null) return 'loading......';

    return (
        <div>
            <h1>{launch.mission_name}</h1>
            <h3>{launch.rocket.rocket_data}</h3>
            <p>{launch.details}</p>
            <p>Rocket Name: {launch.rocket.rocket_name}</p>
            
            
        </div>
    );


}


export default SingleLaunch;