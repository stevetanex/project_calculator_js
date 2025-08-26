// calculator screen display code
function todisplay(content) {
  cal.value += content;
}
function calclear() {
  cal.value = "";
}
function equal() {
  cal.value = eval(cal.value);
}
