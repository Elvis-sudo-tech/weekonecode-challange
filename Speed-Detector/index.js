function motionAnalyzer(speed) { 
    const motionLimit = 70; // This is the speed set as the limit for drivers not to exceed.
    const distancePerPoint = 5; // This is a declaration of when the driver overspeeds the vehicle by 5 (e.g., 75).

    if (speed <= motionLimit) { // This is a conditional statement. It checks if the speed is <= the motionLimit.
        console.log("Ok"); // If true, it will display the string "Ok".
    } else { 
        let points = Math.floor((speed - motionLimit) / distancePerPoint); // This calculates how many points the driver should get for overspeeding.

        if (points > 12) { 
            console.log("License suspended"); // This is a condition that says if the driver accumulates more than 12 points, their license is suspended.
        } else {
            console.log(`Points: ${points}`); // If points are not exceeded, it displays the value in the points container.
        }
    }
}

// At this part, we are going to execute what we declared in the function and conditions.
motionAnalyzer(80); // Test case 1: Speed = 80
motionAnalyzer(350); // Test case 2: Speed = 350

 