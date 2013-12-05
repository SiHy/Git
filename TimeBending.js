#pragma strict

var CI : ControllerInput;
var timeConstantlyMoves : boolean = false;
var minimumConstantTime : float = 0.0002;
var paused : boolean = true;

function Start () {
	CI = gameObject.GetComponent(ControllerInput);
}

function Update () {
	if (timeConstantlyMoves == true) { Time.timeScale = Mathf.Clamp((CI.triggers.x * CI.triggers.x),minimumConstantTime,1); }
	else { Time.timeScale = CI.triggers.x * CI.triggers.x; }
	if (Time.timeScale == 0) { paused = true; }
	else { paused = false; }
//	Debug.Log(Time.time);
}