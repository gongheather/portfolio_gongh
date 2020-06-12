console.log("Welcome to the my portfolio website!");

function menuToggle() {
  var nav = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle'){
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
function menuContactToggle() {
    var x = document.getElementById('myNavtoggle');
    console.log('TCL: menuToggle -> x', x);
    if (x.className === 'navtoggle') {
    x.className += ' ';
    } else {
    x.className = 'navtoggle';
    }
}
