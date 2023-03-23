const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(objArray){
    let foundWin = objArray.find(obj => obj.result === "W");
    if (!!foundWin === true)
        return foundWin.year;
    else
        return;
}