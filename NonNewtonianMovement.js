#pragma strict

var CI : ControllerInput;
var TB : TimeBending;
var moveMultiplier : float = 0.5;
var rotateMultiplier : float = 3.5;
var jumpSpeed : float = 0.2;
var groundHitFound : boolean;
var groundHit : RaycastHit;
var gravity : float = -0.1;

function Start () {
	CI = gameObject.GetComponent(ControllerInput);
	TB = gameObject.GetComponent(TimeBending);
}

function Update () {
	transform.Translate(Vector3((CI.leftAnalogue.x * moveMultiplier),0,(CI.leftAnalogue.y * moveMultiplier)));
	transform.Rotate(Vector3(0,(CI.rightAnalogue.x * rotateMultiplier),0));
	if (CI.buttonA == true) { transform.Translate(Vector3(0,jumpSpeed,0)); }
	if (CI.buttonB == true) { transform.Translate(Vector3(0,-jumpSpeed,0)); }
	groundHitFound = false;
	if (TB.paused) {
		groundHitFound = Physics.Raycast(transform.position, Vector3.down, groundHit);
		if (groundHitFound == true && groundHit.distance > 1) {
			transform.Translate(Vector3(0,gravity,0));
		}
		//Debug.Log(groundHit.distance);
	}
	
	
	
	/*
	Debug.DrawRay(transform.position, transform.TransformDirection (Vector3.forward * 10), Color.green);
	if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), 10)) {
		Debug.Log("RayCast");
	}
	if (Physics.SphereCast (transform.position, 3, transform.TransformDirection(Vector3.forward), sphereHit)) {
		if (sphereHit.collider.name != "FloorQuad") {
			Debug.Log("SphereCast");
		}
	}
	*/
}

/*function OnCollisionStay(collision : Collision) {
	// Debug-draw all contact points and normals
	for (var contact : ContactPoint in collision.contacts) {
		Debug.DrawRay(contact.point, contact.normal, Color.green, 20);
	}
	if (collision) { Debug.Log("Collision"); }
}

function OnTriggerStay (other : Collider) {
	if (other.attachedRigidbody) {
		Debug.Log("Trigger");
	}
}*/