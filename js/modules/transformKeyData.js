/**
 * 
 * @param {object} data 
 * @param {string} lng 
 * @returns object
 */
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

export default transformKeyData;