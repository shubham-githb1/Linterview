const socket = io('/')

let myVedioStream;
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream => {
    myVedioStream = stream;
    addVideoStream(myVideo, stream)
})
// socket.myVedioStream('join-room');

socket.emit('join-room')

const addVideoStream = (video, stream) => {
    video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
} 