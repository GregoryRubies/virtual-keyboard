import request from "./modules/getKeys.js";

const keysList = {};

request.onload = function() {
  let keys = request.response;

  let keyboard = document.createElement("div");
  keyboard.className = "keyboard";

  keys.forEach((v, i, a) => {

    let row = document.createElement("div");
    row.id = `r_${i}`;
    row.className = "keyboard__row";

    v.forEach((v_, i_, a_) => {
      let idx = i_ < 10 ? `${i}0${i_}` : `${i}${i_}`;
      let key = document.createElement("button");
      key.id = `k_${idx}`;
      key.className = "keyboard__btn btn";
      key.innerText = "test";
      keysList[idx] = key;
      row.appendChild(key);
    });
    keyboard.appendChild(row);
  })
  document.querySelector(".wrapper").appendChild(keyboard);
}