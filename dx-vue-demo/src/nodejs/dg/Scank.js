var opt = {
  audio: true,
  video: {
    width: 375,
    height: 603
  }
};
navigator.mediaDevices.getUserMedia(opt)
    .then(function (mediaStream) {
      var video = document.querySelector('video');
      video.srcObject = mediaStream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });
