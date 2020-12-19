// Checking page title
var runner = function() {
    if (document.URL.includes("instagram.com")) {
        var root_ = document.getElementById('react-root');
        var span_ = root_.querySelector('[data-testid=live-badge]');

        if (span_) {
            var video = root_.getElementsByTagName('video')[0];
            var videoParent = video.closest("div");

            if (videoParent) {
                body.classList.add("with-instagram-landscaper");
                videoParent.classList.add("video-container");

                var node = document.createElement("span"); 
                var textnode = document.createTextNode("Full Screen");
                node.appendChild(textnode);

                node.addEventListener('click', function (e) {
                    root_.classList.add('landscape-width-css');
                });              

                videoParent.appendChild(node); 

                document.body.onkeyup = function(e){
                    if(e.key === 'Escape' && root_.classList.contains('landscape-width-css')){
                        body.classList.remove("with-instagram-landscaper");
                        root_.classList.remove('landscape-width-css');
                    }
                }
            }
        }
    }
}

setTimeout(function() {
    runner();
}, 1000)
