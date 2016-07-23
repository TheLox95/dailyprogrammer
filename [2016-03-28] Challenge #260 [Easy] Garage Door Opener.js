/**
 * Description

You just got a new garage door installed by the Automata™ Garage Door Company. You are having a lot of fun playing with the remote clicker, opening and closing the door, scaring your pets and annoying the neighbors.
The clicker is a one-button remote that works like this:
If the door is OPEN or CLOSED, clicking the button will cause the door to move, until it completes the cycle of opening or closing.
Door: Closed -> Button clicked -> Door: Opening -> Cycle complete -> Door: Open.
If the door is currently opening or closing, clicking the button will make the door stop where it is. When clicked again, the door will go the opposite direction, until complete or the button is clicked again.
We will assume the initial state is CLOSED.

Input description

Input will be a series of commands (can be hard coded, no need to parse):
button_clicked
cycle_complete
button_clicked
button_clicked
button_clicked
button_clicked
button_clicked
cycle_complete

Output description

Output should be the state of the door and the input commands, such as:
Door: CLOSED
> Button clicked.
Door: OPENING
> Cycle complete.
Door: OPEN
> Button clicked.
Door: CLOSING
> Button clicked.
Door: STOPPED_WHILE_CLOSING
> Button clicked.
Door: OPENING
> Button clicked.
Door: STOPPED_WHILE_OPENING
> Button clicked.
Door: CLOSING
> Cycle complete.
Door: CLOSED

Bonus

Bonus challenge - The door has an infrared beam near the bottom, and if something is breaking the beam, (your car, your cat, or a baby in a stroller) the door will be BLOCKED and will add the following rules:
If the door is currently CLOSING, it will reverse to OPENING until completely OPEN. It will remain BLOCKED, however, until the input BLOCK_CLEARED is called.
Any other state, it will remain in that position, until the input BLOCK_CLEARED is called, and then it will revert back to it's prior state before it was blocked. Button clicks will be discarded. If the door was already in the process of opening, it will continue to OPEN until CYCLE_COMPLETE is called.
Bonus Challenge Input
button_clicked
cycle_complete
button_clicked
block_detected
button_clicked
cycle_complete
button_clicked
block_cleared
button_clicked
cycle_complete
Bonus Challenge output:
Door: CLOSED
> Button clicked
Door: OPENING
> Cycle complete
Door: OPEN
> Button Clicked
Door: CLOSING
> Block detected!
Door: EMERGENCY_OPENING
> Button clicked.
Door: EMERGENCY_OPENING
> Cycle complete.
Door: OPEN_BLOCKED
> Button clicked
Door: OPEN_BLOCKED
> Block cleared
Door: OPEN
> Button clicked
Door: CLOSING
> Cycle complete
Door: CLOSED

Personal notes
	I did not have time to implement all the bonuses, it's easy to see that this code is inscalable by itself.
	Älso I see the benefits of a State Pattern [See the book Game Programming Patterns] , simply by adding a new state this can be a headache
	so a adding this pattern can make easier to manage (although yet it will be hard ).

	This were the others solutions that I liked (Though did not explore the whole thread):
	https://www.reddit.com/r/dailyprogrammer/comments/4cb7eh/20160328_challenge_260_easy_garage_door_opener/d1gn1tc?st=iqzofe1o&sh=37df7b23
	https://www.reddit.com/r/dailyprogrammer/comments/4cb7eh/20160328_challenge_260_easy_garage_door_opener/d1i361l?st=iqzogz8j&sh=bab8d883
 */

// TODO: Rewrite this code implmenting the State Pattern
function Command(){
  this.currentDoorState = "Closed";
}


Command.prototype.executeCommand = function (command){
  console.log("Door: "+this.currentDoorState);
  console.log("> "+command);
  
  if(command == "button_clicked"){
    if(this.currentDoorState == "Closed"){
      this.currentDoorState = "Opening...";
    }else if(this.currentDoorState == "Closing..."){
      this.currentDoorState = "Stopped while closing...";
    }else if(this.currentDoorState == "Stopped while closing..."){
      this.currentDoorState = "Opening...";
    }else if(this.currentDoorState == "Opening..."){
      this.currentDoorState = "Stopped while opening...";
    }else if(this.currentDoorState == "Stopped while opening..."){
      this.currentDoorState = "Closing...";
    }else if(this.currentDoorState == "Stopped while opening..."){
      this.currentDoorState = "Closing...";
    }else if(this.currentDoorState == "Open"){
    this.currentDoorState = "Closing...";
    }
  }
  
    
  if(command == "cycle_complete"){
    if(this.currentDoorState == "Closing..."){
      this.currentDoorState = "Closed";
    }else if(this.currentDoorState == "Opening..."){
      this.currentDoorState = "Open";
    }else if(this.currentDoorState == "Open"){
      this.currentDoorState = "Closing...";
    }
  }

}

var command = new Command();

command.executeCommand("button_clicked");
command.executeCommand("cycle_complete");
command.executeCommand("button_clicked");
command.executeCommand("button_clicked");
command.executeCommand("button_clicked");
command.executeCommand("button_clicked");
command.executeCommand("button_clicked");
command.executeCommand("cycle_complete");