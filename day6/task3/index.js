
var p = document.getElementById("PAR");

function ChangeFont(fontName) {
    p.setAttribute("style", "font-family:" + fontName + ";");
}
function ChangeAlign(alignValue) {
    p.setAttribute("style", "text-align:" + alignValue + ";");
}
function ChangeHeight(heightValue) {
    p.setAttribute("style", "height:" + heightValue + ";");
}
function ChangeLSpace(letterSpacingValue) {
    p.setAttribute("style", "letter-spacing:" + letterSpacingValue + ";");
}
function ChangeIndent(textIndentValue) {
    p.setAttribute("style", "text-indent:" + textIndentValue + ";");
}
function ChangeTransform(textTransformValue) {
    p.setAttribute("style", "text-transform:" + textTransformValue + ";");
}
function ChangeDecorate(textDecorationValue) {
    p.setAttribute("style", "text-decoration:" + textDecorationValue + ";");
}

function ChangeBorder(borderValue) {
    p.setAttribute("style", "border:" + borderValue + ";");
}
function ChangeBorderColor(BordercolorValue) {
    var existingStyle = p.getAttribute("style") || "";
    var newStyle = "border-color: " + BordercolorValue + ";";
    p.setAttribute("style", existingStyle + newStyle);
}