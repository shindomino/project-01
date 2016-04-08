/* CLIENT-SIDE JS
  THIS IS PUBLIC! WATCH OUT!
 */


$(document).ready(function() {
  //make a phonecall to ajax server
  $.ajax({
    method: "GET",
    url: "api/sanity",
    success: sanitySuccess,
    error: sanityError
  });
});

//these are being loaded when app.js is executed
function sanitySuccess(success){
  console.log("YATTA");
  console.log(success);
}


function sanityError(error){
  console.log("GOMEN NE, ONEE SEMPAI");
  console.log(error);
}
