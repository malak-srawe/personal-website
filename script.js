/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

  var images = ["https://cdn.glitch.com/b5fb3928-a363-4fcc-9fa3-a81fb8a85a70%2Fmmm.jpg?v=1606939354563","https://cdn.glitch.com/b5fb3928-a363-4fcc-9fa3-a81fb8a85a70%2Fmm.jpg?v=1606936662687", "https://cdn.glitch.com/b5fb3928-a363-4fcc-9fa3-a81fb8a85a70%2Fm.jpg?v=1606939425109"]
var i=0


function next(){
  i = (i+1)%images.length;
  document.getElementById("image").src = images[i];
  document.getElementById("number").innerHTML = "image: #"+(i+1);
}

function back(){
  i = (i-1+images.length)%images.length;
  document.getElementById("image").src = images[i];
  document.getElementById("number").innerHTML = "image: #"+(i+1);
}


