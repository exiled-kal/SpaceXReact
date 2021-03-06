import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';



function Launches() {
    const [launchesArray, setLaunchesArray] = useState(null);
    const [hasError, setHasError] = useState(false);

// with empty array it says i dont want to run this callback when the
// component first render
//if second arguemnt omitted, runs whenever anything changes
//if second argument empty array, runs only on first render
//if something in array, runs anytime that thing changes
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches')
// whne promise is resolved
// then launching the property which we use it everytime we use axios
//  (data)array object inside here
            .then(response => setLaunchesArray(response.data))
            .catch(() => setHasError(true));
    }, []);

if(launchesArray == null) return 'loading....';

    if(hasError) {
        return (
            <div>Something went Wrong</div>
        )
    }
    return (
        <div>
            <h1>Launches</h1>
            {launchesArray.map((launch, i) => {
                // as i am mapping through this 
                return (
                    <div key={i}>
                        <h3>
                            <Link to={'/launches/' + launch.flight_number}>
                                {launch.mission_name}
                            </Link>
                            </h3>
                        <p>Launch Date: {launch.launch_date_local}</p>
                        {/* we are using ternary operator */}
    {/* if this thing is a falsy value should be null */}
                        {launch.details ?<p>{launch.details}</p> : null}
                    </div>
                )
            })}
            {/* <button onclick={() =>setLaunchesArray([])}>Click me</button> */}
        </div>
    )
}

export default Launches;