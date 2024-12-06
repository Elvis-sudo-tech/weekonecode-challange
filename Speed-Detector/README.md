## Let's finalize the content of the README.md file for the `motionAnalyzer` function in JavaScript.

readme_content = """
# Motion Analyzer

This project provides a JavaScript function, `motionAnalyzer`, to monitor a driver's speed and enforce speed limit rules. It calculates penalty points based on the driver's speed and determines whether the driver's license should be suspended.

## Functionality

The `motionAnalyzer` function evaluates a driver's speed and performs the following actions:
1. If the speed is within the legal limit (70 km/h), it displays: `Ok`.
2. If the speed exceeds the limit:
   - Calculates penalty points (1 point for every 5 km/h over the limit).
   - Displays `License suspended` if the points exceed 12.
   - Otherwise, it displays the number of penalty points.

---

## Code Example

```javascript
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

// Test the function
motionAnalyzer(80);  // Output: Points: 2
motionAnalyzer(350); // Output: License suspended
