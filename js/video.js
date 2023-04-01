// rohit bollampally
var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	if(video.paused){
		video.play()
	}
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%"
});
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	if(!video.paused){
		video.pause()
	}
});
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9
	console.log("Speed is now " + video.playbackRate);
});
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9
	console.log("Speed is now " + video.playbackRate);
});
document.getElementById("skip").addEventListener("click", function() {
	console.log("Skip ahead");
	
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0
		if(!video.paused){
			video.play()
		}
		
	}else {
		video.currentTime += 10
	}
	console.log("Video current time is now " + video.currentTime);
});
document.getElementById("mute").addEventListener("click", function() {
	var muter = document.getElementById("mute")
	if(video.muted){
		video.muted = !video.muted

		muter.innerHTML = "Mute"
		console.log('Unmute')
	}
	else if(!video.muted){
		video.muted = !video.muted
		muter.innerHTML = "Unmute"
		console.log('Mute')
	}

});
document.getElementById("slider").addEventListener("change", function() {
	video.volume = this.value / 100
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%"
	console.log("The current value is " + video.volume)
});
document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});
document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});