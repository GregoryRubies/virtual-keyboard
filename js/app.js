import request from "./modules/getKeys.js";

import transformKeyData from "./modules/transformKeyData.js"

import getKeyValue from "./modules/getKeyValue.js"

//event.preventDefault();

const keysList = {};

const virtualKeyboard = document.querySelector(".virtual-keyboard");
virtualKeyboard.innerHTML = '<div class="wrapper"><div class="screen"><textarea name="screen" id="screen" class="screen__input" autofocus></textarea></div></div>'


request.onload = function() {
  let keys = request.response;

  let keyboard = document.createElement("div");
  keyboard.className = "keyboard";

  keys.forEach((v, i, a) => {

    let row = document.createElement("div");
    row.id = `r_${i}`;
    row.className = `keyboard__row keyboard__row_${i}`;

    v.forEach((v_, i_, a_) => {
      let idx = i_ < 10 ? `${i}0${i_}` : `${i}${i_}`;
      let key = document.createElement("button");
      let data = transformKeyData(v_);
      key.id = `k_${idx}`;
      key.className = `keyboard__btn btn ${ data.type == 3 ? "keyboard__btn_fn" : "" } keyboard__btn_${data.code}`;
      key.appendChild(getKeyValue(data));
      keysList[idx] = key;
      row.appendChild(key);

    });
    keyboard.appendChild(row);
  })
  document.querySelector(".wrapper").appendChild(keyboard);

}

virtualKeyboard.addEventListener("click", (e) => {
  document.querySelector(".screen__input").focus();
})

virtualKeyboard.addEventListener("keyup", (e)=>{
  document.querySelector(`.keyboard__btn_${e.code}`).classList.remove("btn_act");
});
virtualKeyboard.addEventListener("keydown", (e)=>{
  document.querySelector(`.keyboard__btn_${e.code}`).classList.add("btn_act");
});

virtualKeyboard.addEventListener("keyup", (e)=>{
    console.log(e.code);
    console.log(e.ctrlKey || e.metaKey)
});
