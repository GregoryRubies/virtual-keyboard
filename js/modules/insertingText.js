

function insertingText (data) {
  let 
    textArea = document.querySelector(".screen__input"),
    cursor = textArea.selectionStart;
  textArea.focus();
  textArea.value = textArea.value.substr(0, cursor) 
    + (data.main || data.letter || data.sign || '')
    + textArea.value.substring(cursor);
  textArea.selectionStart = cursor + 1;
}

export default insertingText;