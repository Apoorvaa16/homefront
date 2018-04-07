var myVideo = document.getElementById('myVideo');
            var playButton = document.getElementById('playButton')
	myVideo.onended = function() {
            window.open("next_act.html", "_self");
      };

            playButton.addEventListener('click', function () {
                if (myVideo.paused) {
                    if (myVideo.requestFullscreen) {
                        myVideo.requestFullscreen();
                    }
                    else if (myVideo.msRequestFullscreen) {
                        myVideo.msRequestFullscreen();
                    }
                    else if (myVideo.mozRequestFullScreen) {
                        myVideo.mozRequestFullScreen();
                    }
                    else if (myVideo.webkitRequestFullScreen) {
                        myVideo.webkitRequestFullScreen();
                    }
                    myVideo.play();
                }
                else {
                    myVideo.pause();
                }
            }, false);