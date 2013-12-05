#pragma strict

var leftAnalogue : Vector2 = new Vector2();
var rightAnalogue : Vector2 = new Vector2();
var dPad : Vector2 = new Vector2();
var triggers : Vector2 = new Vector2();
var buttonA : boolean;
var buttonB : boolean;
var buttonX : boolean;
var buttonY : boolean;
var buttonLB : boolean;
var buttonRB : boolean;
var buttonBack : boolean;
var buttonStart : boolean;
var buttonL3 : boolean;
var buttonR3 : boolean;

function Update () {
	leftAnalogue.x = Input.GetAxis("leftAnalogueX");
		if (leftAnalogue.x < 0) { leftAnalogue.x *= -leftAnalogue.x; }
		else { leftAnalogue.x *= leftAnalogue.x; }
	leftAnalogue.y = Input.GetAxis("leftAnalogueY");
		if (leftAnalogue.y < 0) { leftAnalogue.y *= leftAnalogue.y; }
		else { leftAnalogue.y *= -leftAnalogue.y; }
	rightAnalogue.x = Input.GetAxis("rightAnalogueX");
		if (rightAnalogue.x < 0) { rightAnalogue.x *= -rightAnalogue.x; }
		else { rightAnalogue.x *= rightAnalogue.x; }
	rightAnalogue.y = Input.GetAxis("rightAnalogueY");
		if (rightAnalogue.y < 0) { rightAnalogue.y *= rightAnalogue.y; }
		else { rightAnalogue.y *= -rightAnalogue.y; }
	dPad.x = Input.GetAxis("dPadX");
	dPad.y = Input.GetAxis("dPadY");
	triggers.x = Input.GetAxis("leftTrigger");
	triggers.y = Input.GetAxis("rightTrigger");
	buttonA = Input.GetButton("buttonA");
	buttonB = Input.GetButton("buttonB");
	buttonX = Input.GetButton("buttonX");
	buttonY = Input.GetButton("buttonY");
	buttonLB = Input.GetButton("buttonLB");
	buttonRB = Input.GetButton("buttonRB");
	buttonBack = Input.GetButton("buttonBack");
	buttonStart = Input.GetButton("buttonStart");
	buttonL3 = Input.GetButton("buttonL3");
	buttonR3 = Input.GetButton("buttonR3");
}