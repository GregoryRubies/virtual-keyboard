import request from "./modules/getKeys.js";

import transformKeyData from "./modules/transformKeyData.js"

import getKeyValue from "./modules/getKeyValue.js"

import insertingText from "./modules/insertingText.js"


const keysList = {};

const virtualKeyboard = document.querySelector(".virtual-keyboard");
virtualKeyboard.innerHTML = '<div class="wrapper"><div class="screen"><textarea name="text-input" id="text-area" class="screen__input" autofocus></textarea></div></div>'


request.onload = function() {
  let keys = request.response;

  let keyboard = document.createElement("div");
  keyboard.className = "keyboard";

  keys.forEach((v, i) => {

    let row = document.createElement("div");
    row.className = `keyboard__row keyboard__row_${i}`;

    v.forEach((v_) => {
      let key = document.createElement("button");
      let data = transformKeyData(v_);
      key.className = `keyboard__btn btn ${ data.type == 3 ? "keyboard__btn_fn" : "" } keyboard__btn_${data.code}`;
      key.appendChild(getKeyValue(data));
      keysList[data.code] = key;
      row.appendChild(key);
      key.addEventListener("click", (e) => {
        insertingText(data);
      })
    });
    keyboard.appendChild(row);
  })
  document.querySelector(".wrapper").appendChild(keyboard);
}

virtualKeyboard.addEventListener("keyup", (e)=> {
  e.preventDefault();
})
virtualKeyboard.addEventListener("keydown", (e)=> {
  e.preventDefault();
})


virtualKeyboard.addEventListener("keyup", (e)=>{
  document.querySelector(`.keyboard__btn_${e.code}`).classList.remove("btn_act");

});
virtualKeyboard.addEventListener("keydown", (e)=>{
  document.querySelector(`.keyboard__btn_${e.code}`).classList.add("btn_act");
  document.querySelector(`.keyboard__btn_${e.code}`).click();
});

virtualKeyboard.addEventListener("keyup", (e)=>{
    console.log(e.code);
    console.log(e.ctrlKey || e.metaKey)
});
