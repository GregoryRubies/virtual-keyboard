/**
 * get data from key-data.json
 */
let 
  requestURL = "http://127.0.0.1:5500/sources/key-data.json",
  request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

export default request;