#pragma strict

var cursorPosition : Vector2 = new Vector2();
var mouse0 : boolean;
var mouse1 : boolean;
var mouse2 : boolean;
var mouseX : float;
var mouseY : float;
var scrollWheel : float;
var cursorHoverRay : Ray = new Ray();
var cursorHover : String;

function Update () {
	cursorPosition = Input.mousePosition;
	mouse0 = Input.GetMouseButton(0);
	mouse1 = Input.GetMouseButton(1);
	mouse2 = Input.GetMouseButton(2);
	mouseX = Input.GetAxis("Mouse X");
	mouseY = Input.GetAxis("Mouse Y");
	scrollWheel = Input.GetAxis("Mouse ScrollWheel");
	cursorHoverRay = Camera.main.ScreenPointToRay (Input.mousePosition);
	cursorHover = cursorHoverRay.ToString();
}