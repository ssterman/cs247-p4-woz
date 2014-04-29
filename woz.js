

function showcontrolpanel() {
	var cp = document.getElementById("controlpanel");
	if (cp.style.display == 'inline') {
		cp.style.display = 'none';
		resetAll();
	} else {
		resetAll();
		cp.style.display = 'inline';
		fakerecord();
	}
}

function fakerecord() {
	var vid = document.getElementById("videoElement");
	if (!vid.paused) {
		vid.pause();
		document.getElementById("friendscontainer").style.display = "inline";
	} else {
		document.getElementById("friendscontainer").style.display = "none";
		vid.play();
	}
}

function send() {
	var vid_container = document.getElementById("container");
	var friendscontainer = document.getElementById("friendscontainer");
	vid_container.style.display = "none";
	friendscontainer.style.display = "none";
	var sent_msg = document.getElementById("sent_msg");
	sent_msg.style.display = "inline"; 
	var controlpanel = document.getElementById("controlpanel");
	$(controlpanel).delay(700).fadeOut();
}

function highlight(div) {
	console.log(div.style.backgroundColor);
	if (div.style.backgroundColor == "red") {
		div.style.backgroundColor = 'grey';
	} else {
		div.style.backgroundColor = 'red';
	}
}

function resetAll() {
	var vid_container = document.getElementById("container");
	var friendscontainer = document.getElementById("friendscontainer");
	vid_container.style.display = "block";
	friendscontainer.style.display = "none";
	var sent_msg = document.getElementById("sent_msg");
	sent_msg.style.display = "none"; 
	var vid = document.getElementById("videoElement");
	vid.pause();
}