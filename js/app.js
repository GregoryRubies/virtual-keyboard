import request from "./modules/getKeys.js";

import transformKeyData from "./modules/transformKeyData.js"

import getKeyValue from "./modules/getKeyValue.js"

const keysList = {};

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
      key.className = `keyboard__btn btn ${ data.type == 3 ? "keyboard__btn_fn" : "" }`;
      key.appendChild(getKeyValue(data));
      keysList[idx] = key;
      row.appendChild(key);
    });
    keyboard.appendChild(row);
  })
  document.querySelector(".wrapper").appendChild(keyboard);
}