$("#jplayer").jPlayer({
    swfPath: "http://www.jplayer.org/latest/js/Jplayer.swf",    //播放器地址
    ready: function () {
        $(this).jPlayer("setMedia", {
             mp3: "/audio/1call.mp3"   //背景音乐文件路径
        });
         $(this).jPlayer('play');
     },
     supplied: "mp3"
  });