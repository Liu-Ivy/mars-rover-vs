// Rover Object Goes Here
//iteration 1

var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

// iteration 2

function turnLeft(rover){
  //facing the North
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

// iteration 3
function moveForward(rover){
  if (rover.direction === "N") {
    rover.y -= 1;//facing the North and go up
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else if (rover.direction === "S") {
    rover.y += 1;
  } else {
    rover.x -= 1;
  }
};

//iteration 4
function command(stringOfCommands){
  for (var i = 0; i < stringOfCommands.length; i++){
    var theCommands = stringOfCommands[i];
    switch (theCommands){
      case "f":
        moveForward(rover);
        break;
      case "b":
        movebackwards(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
    }}
}
command(rffrfflfrff);

//iteration 5
function travelLog(rover) {
  var travelLog = [];
  travelLog.push([rover.x,rover.y]);
travelLog(rover);
