function getKeyValue (data) {

  let content = document.createDocumentFragment();

  if (data.type == 1) {
    let [main, ext] = [document.createElement('div'), document.createElement('div')];
    [main.innerText, ext.innerText] = [data.main, data.ext];
    main.classList = "btn__text btn__text_main";
    ext.classList = "btn__text btn__text_ext";
    content.appendChild(ext);
    content.appendChild(main);
  } else if (data.type == 2) {
    let letter = document.createElement('div');
    letter.innerText = data.letter.toUpperCase();
    content.appendChild(letter);
  } else if (data.type == 3) {
    let fn = document.createElement('div');
    fn.innerText = data.fn;
    content.appendChild(fn);
  } else if (data.type == 4) {
    let sign = document.createElement('div');
    sign.innerText = data.sign;
    content.appendChild(sign);
  }
  return content;
}

export default getKeyValue;