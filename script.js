const videos = [
    "videos/APRENDA A JOGAR TRUCO.mp4",
    "videos/TRUCO PAULISTA X TRUCO MINEIRO.mp4",
    "videos/COMO SER O REI DO TRUCO! [FÁCIL] 3 DICAS - TORNE-SE O REI DO TRUCO.mp4",
];

const spinButton = document.getElementById('proximoVideo');
const selectedVideo = document.getElementById('selectedVideo');

let videoAtual = 0;
function avancarVideo() {
    if(videoAtual <2){
        videoAtual ++;
    }
    const videoPath = videos[videoAtual];

    selectedVideo.src = videoPath;
    selectedVideo.play();
    
}
function retrocederVideo() {
    if(videoAtual > 0){
        videoAtual --;
    }
    const videoPath = videos[videoAtual];

    selectedVideo.src = videoPath;
    selectedVideo.play();
    
}

proximoVideo.addEventListener('click', avancarVideo);
anteriorVideo.addEventListener('click', retrocederVideo);