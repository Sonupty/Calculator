function btnClick(val) {
  let ez = (document.querySelector(".display").value += val);
}
function rest() {
  document.querySelector(".display").value = "";
}

function equalClick() {
  let text = document.querySelector(".display").value;
  let result = eval(text);
  document.querySelector(".display").value = result;
}

function deleteLast() {
  var currentInput = document.querySelector(".display").value;
  if (currentInput.length > 0) {
    document.querySelector(".display").value = currentInput.slice(0, -1);
  }
}






