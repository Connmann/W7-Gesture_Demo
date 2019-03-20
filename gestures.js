var downX = 0;
var downY = 0;

$("#gestureArea").mouseup(function() {
  $("#gestureResult").text("Mouse up.");

  var upX = event.pageX;
  var upY = event.pageY;

  if (upX < downX) {
    $("#gestureResult").text("Swipe left.");
  }
  else if (upX > downX) {
    $("#gestureResult").text("Swipe right.");
  }
  else if (upX == downX) {
    $("#gestureResult").text("Mouse up.");
  }

});

$("#gestureArea").mousedown(function() {
  $("#gestureResult").text("Mouse down.");
  downX = event.pageX;
  downY = event.pageY;
});