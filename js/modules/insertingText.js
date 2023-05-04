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

export default insertingText;