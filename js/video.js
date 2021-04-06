var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Video");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Normal Video");
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing it Down");
	video.playbackRate *=.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Playing it Faster");
	video.playbackRate *=1.05;
	console.log(video.playbackRate);
});

var skip = document.getElementById("skip");

skip.addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15;
		console.log("New location " + video.currentTime)
	}
	else {
		video.currentTime = 0;
		console.log("New location  + video.currentTime")
	}
})

var mute = document.getElementById("mute");

mute.addEventListener("click", function() {
	console.log("Muting Video")
	if (video.muted == true) {
		this.innerHTML = "Mute";
		video.muted = false;
	}
	else {
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	var slide_value = this.value;
	video.volume = (slide_value/100);
	let vol = document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});


// take console.log(this.value) and connect it with line 11 to update the % volume when you slide

// use classes, dont change CSS style

//challenge 1 and 2 videos using if statements? since we need it for mute and skip ahead button

// use DOM reference link for this homework, use the built in functions 
