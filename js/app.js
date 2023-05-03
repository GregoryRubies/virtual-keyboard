import request from "./modules/getKeys.js";

const keysList = {};

function transformKeyData (data, lng = "en"){
  let newData = {};
  for(let key in data[lng]){
    newData[key] = data[lng][key];
  }
  Object.keys(data)
    .filter(v => !["ru", "en"].includes(v))
      .forEach(k => newData[k] = data[k]);
  return newData;
}

function getKeyValue (data) {

  let content = document.createDocumentFragment();

  if (data.type = 1) {
    let [main, ext] = [document.createElement('div'), document.createElement('div')];
    [main.innerText, ext.innerText] = [data.main, data.ext];
    content.appendChild(...[main, ext]);
  } else if (data.type = 2) {
    let letter = document.createElement('div');
    letter.innerText = data.letter;
    content.appendChild(letter);
  } else if (data.type = 3) {
    let fn = document.createElement('div');
    fn.innerText = data.fn;
    content.appendChild(fn);
  } else if (data.type = 4) {
    let sign = document.createElement('div');
    sign.innerText = data.sign;
    content.appendChild(sign);
  }
  return content;
}

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
      key.appendChild(getKeyValue(transformKeyData(v_)));
      keysList[idx] = key;
      row.appendChild(key);
    });
    keyboard.appendChild(row);
  })
  document.querySelector(".wrapper").appendChild(keyboard);
}