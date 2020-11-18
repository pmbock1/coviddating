

     function randombg() {

            var random = Math.floor(Math.random() * 4);
            var images = ["url('date1.jpg')", "url('date2.jpg')", "url('date3.jpg')", "url('date4.jpg')"];
            document.getElementById("random").style.backgroundImage = images[random];
        }

        function randomgame() {

            var randomg = Math.floor(Math.random() * 2);
            var results = ["COVID-19 Special: Put a mask on for 5 minutes","Teach the other person how to dougie"];
            document.getElementById("wheel"). innerHTML= results[randomg];
        }

        function start() {
            randombg();
            
        }
        var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};