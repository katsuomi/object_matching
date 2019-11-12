function object_match(obj1,obj2){
  const obj1Sorted = objectSort(obj1)
  const obj2Sorted = objectSort(obj2)
  obj1Json = JSON.stringify(obj1Sorted)
  obj2Lson = JSON.stringify(obj2Sorted)
  if(obj1Json === obj2Lson){
    return true
  }else{
    return false
  }
}

function objectSort(object) {
  var newObject = {};
  var keyArray = [];
  for (key in object) {
    keyArray.push(key);
  }
  keyArray.sort()
  for (var i = 0; i < keyArray.length; i++) {
    newObject[keyArray[i]] = object[keyArray[i]];
  }
  return newObject;
}

module.exports = object_match
module.exports = objectSort
