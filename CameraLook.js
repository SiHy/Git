#pragma strict

var CI : ControllerInput;
var yAxisInvert : boolean = false;
@System.NonSerialized
var yRotation : float = 0;
@System.NonSerialized
var yAnalogue : float = 0;
var ySensitivity : float = 2;

function Start () {
	CI = transform.parent.GetComponent(ControllerInput);
}

function Update () {
	if (yAxisInvert == true) { yAnalogue = CI.rightAnalogue.y * ySensitivity; }
	else { yAnalogue = -CI.rightAnalogue.y * ySensitivity; }
	yRotation = transform.rotation.eulerAngles.x + yAnalogue;
	if ((yRotation >= -90 && yRotation <= 90) || (yRotation >= 270 && yRotation <= 450)) {
		transform.Rotate(Vector3(yAnalogue,0,0));
	}
}