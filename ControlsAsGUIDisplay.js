#pragma strict

var customSkin : GUISkin;
var CI : ControllerInput;
var GUIBox1a : int = 0;
var GUIBox1b : int = 0;
var GUIBox1c : int = 400;
var GUIBox1d : int = 400;

function Start () {
	CI = gameObject.GetComponent(ControllerInput);
}

function OnGUI () {
	// Set style
	GUI.skin = customSkin;
	// Make a background box
	GUI.Box (Rect (GUIBox1a,GUIBox1b,GUIBox1c,GUIBox1d),
	"Controller Input:\n" +
	"Left Analogue: " + CI.leftAnalogue + "\n" +
	"Right Analogue: " + CI.rightAnalogue + "\n" +
	"dPad: " + CI.dPad + "\n" +
	"Triggers: " + CI.triggers + "\n" +
	"A: " + CI.buttonA + "\n" +
	"B: " + CI.buttonB + "\n" +
	"X: " + CI.buttonX + "\n" +
	"Y: " + CI.buttonY + "\n" +
	"LB: " + CI.buttonLB + "\n" +
	"RB: " + CI.buttonRB + "\n" +
	"Back: " + CI.buttonBack + "\n" +
	"Start: " + CI.buttonStart + "\n" +
	"L3: " + CI.buttonL3 + "\n" +
	"R3: " + CI.buttonR3 + "\n"
	);
}