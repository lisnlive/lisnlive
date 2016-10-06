function playClick(index, flag = false) {
	previousTrack = currentTrack;
	currentTrack = index;
	var previousPlayID = 'play' + String(previousTrack);

	if (previousTrack == -1) {}
	else if (currentTrack != previousTrack) {
		document.getElementById(previousPlayID).style.display = null;
	}

	if (playing){
		pauseClick(previousTrack);
		document.getElementById(previousPlayID).style.display = null;
	}

	if (flag) {
		document.getElementById(previousPlayID).style.display = 'none';
		document.getElementById(previousPlayID).style.display = null;
	}

	var playID = 'play' + String(index);
	var pauseID = 'pause' + String(index);
	var audioID = 'preview' + String(index);

	document.getElementById(audioID).play();
	document.getElementById(playID).style.display = 'none';
	document.getElementById(pauseID).style.display = 'block';

	playing = true;
}

function pauseClick(index) {
	var playID = 'play' + String(index);
	var pauseID = 'pause' + String(index);
	var audioID = 'preview' + String(index);

	document.getElementById(audioID).pause();
	document.getElementById(playID).style.display = 'block';
	document.getElementById(pauseID).style.display = 'none';

	playing = false;
}

function playNext(index) {
	pauseClick(index);
	playClick(index + 1, true);
}

function playerjsPlay(index) {
	if (index == -1) {playClick(0);}
	else {playClick(currentTrack);}
}

function playerjsPause(index) {
	if (index > -1) {pauseClick(currentTrack);}
}


var playing = false;
var currentTrack = -1;
var previousTrack = -1;

var receiver = new playerjs.Receiver();

receiver.on('play', playerjsPlay(currentTrack));
receiver.on('pause', playerjsPause(currentTrack));