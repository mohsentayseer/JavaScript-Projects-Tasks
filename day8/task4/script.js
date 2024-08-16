var h2 = document.querySelectorAll("h2");
var h1 = document.querySelectorAll("h1");

function Rectangle(w, h) {
  this.width = w;
  this.height = h;
}
Rectangle.prototype.area = function () {
  area = this.width * this.height;
  return area;
};
Rectangle.prototype.area = function () {
  area = this.width * this.height;
  return area;
};
Rectangle.prototype.perimeter = function () {
  perimeter = 2 * (this.width + this.height);
  return perimeter;
};
Rectangle.prototype.displayInfo = function () {
  h2[0].textContent += this.width;
  h2[1].textContent += this.height;
  h1[0].textContent += this.area();
  h1[1].textContent += this.perimeter();
};
Rectangle.prototype.draw = function () {
  var w = this.width * 100;
  var h = this.height * 100;
  var div = document.getElementById("rec");
  div.style.width = w + "px";
  div.style.height = h + "px";
  div.style.border = "2px solid blue";
};

var obj = new Rectangle(1, 2);
obj.displayInfo();
obj.draw();
