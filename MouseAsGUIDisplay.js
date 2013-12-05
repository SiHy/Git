#pragma strict

var customSkin : GUISkin;
var MI : MouseInput;
var GUIBox1a : int = 0;
var GUIBox1b : int = 0;
var GUIBox1c : int = 400;
var GUIBox1d : int = 400;

function Start () {
	MI = gameObject.GetComponent(MouseInput);
}

function OnGUI () {
	// Set style
	GUI.skin = customSkin;
	// Make a background box
	GUI.Box (Rect (GUIBox1a,GUIBox1b,GUIBox1c,GUIBox1d),
	"Mouse Input:\n" +
	"Cursor Position: " + MI.cursorPosition + "\n" +
	"Mouse0: " + MI.mouse0 + "\n" +
	"Mouse1: " + MI.mouse1 + "\n" +
	"Mouse2: " + MI.mouse2 + "\n" +
	"MouseX: " + MI.mouseX + "\n" +
	"MouseY: " + MI.mouseY + "\n" +
	"ScrollWheel: " + MI.scrollWheel + "\n" +
	"Cursor Hover: " + MI.cursorHover + "\n"
	);
}