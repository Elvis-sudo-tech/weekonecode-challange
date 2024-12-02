 // we will declare const becouse we dont want to change anything  since it it cannot be declared or reasigned
function motionAnalyzer(speed) { 
    
    const Motionlimit = 70; // This is the speed set as the limite  for drivers not to exceed.
    const distancePerPoint = 5; // This is a declararion of when the driver over speeds the vehicle by  5 eg 75
    
    if (speed <= velocityLimit) {//This a conditional statement. it checks if the speed is <= the motionlimit
    console.log("Ok"); //If true it will display the string "ok" 
    } else if (speed > motionLimit) {
    
    let points = ((speed -Motionlimit) / distancePerPoint);
    
    if (points > 12) {
    console.log("License suspended"); // this is a condition that says if the driver passes 12 point licence 
    console.log(`Points: ${points}`);//If points are not exceeded,it displays the value in the points container.
    }
    }
    }
    // AT this part  we are going to execute what we were declaring on the function and condition
    motionAnalyzer(80);
    motionAnalyzer(350);
    