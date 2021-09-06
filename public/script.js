
const socket = io('/')

let myVedioStream;
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;

var peer = new Peer();

var peer =  new Peer(undefined, {
  path: '/peerjs',
  host: '/',
  port: '3030',
})

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream => {
    myVedioStream = stream;
    addVideoStream(myVideo, stream)
})
// socket.myVedioStream('join-room');

peer.on('open', id=>{
  socket.emit('join-room',ROOM_ID);
})


socket.on('user-connected',(userId)=>{
  connectToNewUser(userId);
})

const connectToNewUser = (userId) =>{
  
}

const addVideoStream = (video, stream) => {
    video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
} 