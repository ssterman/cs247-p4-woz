

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

function showcontrolpanel_rm() {

	var cp = document.getElementById("controlpanel_rm");
	if (cp.style.display == 'inline') {
		cp.style.display = 'none';
	} else {
		cp.style.display = 'inline';
	}
}


function fakerecord() {
	var vid = document.getElementById("videoElement");
	if (!vid.paused) {
		vid.pause();
		document.getElementById("friendscontainer").style.display = "inline";
		document.getElementById("send").style.display = "inline";
		document.getElementById("play_stop").src="images/icon-play.png";
	} else {
		document.getElementById("friendscontainer").style.display = "none";
		document.getElementById("send").style.display = "none";
		vid.play();
		document.getElementById("play_stop").src="images/icon-stop.png";
	}
}

function send() {
	var vid_container = document.getElementById("container");
	var friendscontainer = document.getElementById("friendscontainer");
	vid_container.style.display = "none";
	friendscontainer.style.display = "none";
	var sent_msg = document.getElementById("sent_msg");
	sent_msg.style.display = "inline"; 
	var sent = document.getElementById("send");
	sent.style.opacity = "0.5"; 
	var controlpanel = document.getElementById("controlpanel");
	var emily = document.getElementById("emily_pic");
	var mj = document.getElementById("mj_pic");
	var sarah = document.getElementById("sarah_pic");
	emily.style.opacity = 0.5;
	emily.style.borderColor = "black";
	mj.style.opacity = 0.5;
	mj.style.borderColor = "black";
	sarah.style.opacity = 0.5;
	sarah.style.borderColor = "black";
	$(controlpanel).delay(700).fadeOut();
}


function highlight(img) {
	if (img.style.opacity == "0.5") {
		img.style.opacity = "1.0";
		img.style.borderColor = "green";
		img.style.borderWidth = "2px";
		img.style.borderStyle = "solid";
	} else {
		img.style.opacity = "0.5";
		img.style.borderColor = "black";
		img.style.borderWidth = "2px";
		img.style.borderStyle = "solid";
	}
}

function resetAll() {
	var sent = document.getElementById("send");
	sent.style.opacity = "1.0"; 
	var emily = document.getElementById("emily_pic");
	var mj = document.getElementById("mj_pic");
	var sarah = document.getElementById("sarah_pic");
	emily.style.opacity = "0.5";
	emily.style.borderColor = "black";
	mj.style.opacity = "0.5";
	mj.style.borderColor = "black";
	sarah.style.opacity = "0.5";
	sarah.style.borderColor = "black";
	var vid_container = document.getElementById("container");
	var friendscontainer = document.getElementById("friendscontainer");
	vid_container.style.display = "block";
	friendscontainer.style.display = "none";
	var sent_msg = document.getElementById("sent_msg");
	sent_msg.style.display = "none"; 
	var vid = document.getElementById("videoElement");
	vid.pause();
}


function playvid() {
	var vid = document.getElementById("videoElement");
	vid.play();
}