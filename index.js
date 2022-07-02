// window.onload = function () {
// //   const music = new Audio("1call.mp3");
// //   music.play();
// //   music.loop = true;
// alert('sdfasdf')
// };
window.onload = function () {
    const music = new Audio(
      "https://mason369.github.io/Cai-Xukun-invites-you-to-make-a-video-call/audio/1call.mp3"
    );
    music.play();
    music.loop = true;

    var points=document.getElementsByTagName('span');
    for(var i=0;i<points.length;i++){
        points[i].style.display='none';
        sleep(500);
        points[i].style.display='block';
        if(i===3){
            i=0;
        }
    }
    function sleep(millisecond) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, millisecond)
        })
    }


}
 