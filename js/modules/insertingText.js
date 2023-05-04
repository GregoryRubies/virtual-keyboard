/**
 * 
 * @param {Object} data
 */

function insertingText (data, shift) {
  let 
    textArea = document.querySelector(".screen__input"),
    cursor = textArea.selectionStart;
  textArea.focus();
  textArea.value = textArea.value.substr(0, cursor) 
    + ((shift ? data.ext : data.main) || (data.letter && (shift ? data.letter.toUpperCase() : data.letter )) || data.sign || '')
    + textArea.value.substring(cursor);
  textArea.selectionStart = cursor + 1;
}
/**
 * 
 * @param {bool} shift 
 */

function backspace(shift = false){
  let 
    textArea = document.querySelector(".screen__input"),
    cursor = textArea.selectionStart,
    newCursor = Math.max(cursor - 1, 0);
  textArea.value = shift ? textArea.value.substring(cursor) : textArea.value.substr(0, newCursor) + textArea.value.substring(cursor);
  textArea.selectionStart = shift ? 0 : newCursor;
  textArea.focus();
}

function enter(){
  let 
    textArea = document.querySelector(".screen__input"),
    cursor = textArea.selectionStart;
  textArea.focus();
  textArea.value = textArea.value.substr(0, cursor) 
    + '\r\n'
    + textArea.value.substring(cursor);
  textArea.selectionStart = cursor + 1;
}

function tab(){
  let 
    textArea = document.querySelector(".screen__input"),
    cursor = textArea.selectionStart;
  textArea.focus();
  textArea.value = textArea.value.substr(0, cursor) 
    + '\t'
    + textArea.value.substring(cursor);
  textArea.selectionStart = cursor + 1;
}

export {insertingText, backspace, enter, tab};