$( ".spot" ).show( "slow" );
$( ".spotify-open-btn" ).hide( "slow" );
$( ".spotify-close" ).show( "slow" );

$( ".spotify-open-btn" ).click(function() {
    $( ".spot" ).show( "slow" );
    $( ".spotify-open-btn" ).hide( "slow" );
    $( ".spotify-close" ).show( "slow" );
  });
  $( ".spotify-close" ).click(function() {
    $( ".spot" ).hide( "slow" );
    $( ".spotify-open-btn" ).show( "slow" );
    $( ".spotify-close" ).hide( "slow" );
  });

  $( ".stop" ).toggle(function() {
$( ".dock" ).addClass( "stop_dock" );
$( ".stop" ).addClass( "active-btn" );
  });

$( ".edit-btn" ).click(function() {
    $( ".edit" ).show( "slow" );
    $( ".edit-bg" ).show( "slow" );
    $( ".edit-btn" ).hide( "slow" );
  });
  
  $( ".close-edit" ).click(function() {
    $( ".edit" ).hide( "slow" );
    $( ".edit-bg" ).hide( "slow" );
    $( ".edit-btn" ).show( "slow" );
  });

const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${ y * 4  + 75}deg)
        rotateZ(${ -x * 12  + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);
