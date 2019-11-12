obj1 = {
  last_name: "aoki",first_name: "katsuomi",boolean: false,height: 168.6,
}

obj2 = {
  last_name: "aoki",first_name: "katsuomi",boolean: false,height: 168.6,
}


object_match(obj1,obj2)11

function object_match(obj1,obj2){
  obj1_json = JSON.stringify(obj1)
  obj2_json = JSON.stringify(obj2)
  console.log(obj1.aoki)
  if(obj1_json === obj2_json){
    console.log(true)
  }else{
    console.log(false)
  }
}





// function object_match(obj1,obj2){
//   // まずキーのみをソートする
//   var keys1 = Object.keys(obj1).sort();

//   // 返却する空のオブジェクトを作る
//   var map1 = {};

//   // ソート済みのキー順に返却用のオブジェクトに値を格納する
//   keys1.forEach(function(key){
//     var val1 = obj1[key];

//     // 中身がオブジェクトの場合は再帰呼び出しを行う
//     if(typeof val1 === "object"){
//         val1 = object_match(val1,0);
//     }

//     map1[key] = val1;
//   });

//     // まずキーのみをソートする
//   var keys2 = Object.keys(obj2).sort();

//   // 返却する空のオブジェクトを作る
//   var map2 = {};

//   // ソート済みのキー順に返却用のオブジェクトに値を格納する
//   keys2.forEach(function(key){
//     var val2 = obj2[key];

//     // 中身がオブジェクトの場合は再帰呼び出しを行う
//     if(typeof val2 === "object"){
//         val2 = object_match(0,val2);
//     }

//     map2[key] = val2;
//   });

//   if(JSON.stringify(map1) === JSON.stringify(map2)){
//     return true
//   }else{
//     return false
//   }

// }

// module.exports = object_match



