var openbtn = document.querySelectorAll("button")[0];
console.log(open);

openbtn.addEventListener("click", function () {
  var x = open(
    "index2.html",
    "newWindow",
    "height:100,width:300,top:200,left:300"
  );
  setTimeout(function () {
    x.close();
  }, 5000);
});
