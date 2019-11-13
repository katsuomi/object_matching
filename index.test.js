const objectMatch = require('./index');

const object1 = {
  name: "aoki",gender: 1,height: 168.5
}

const object2 = {
  gender: 1,name: "aoki",height: 168.5
}

const object3 = {
  gender: 1,name: "aoki",height: 168.6
}

const object4 = {
  gender: 1,name: "aoki",profile: {hobby: {sports: ["soccer","baseball","basketball"]}}
}

const object5 = {
  gender: 1,profile: {hobby: {sports: ["soccer","baseball","basketball"]}},name: "aoki"
}

//キーバリューの組み合わせは同じだが、順番が異なる時、trueを返す。
test('object1 and object2 is equal', () => {
  expect(objectMatch(object1,object2)).toBe(true);
});

//キーに対してバリューが異なる時、falseを返す。
test('object1 and object3 is not equal', () => {
  expect(objectMatch(object1,object3)).toBe(false);
});

//バリューが複雑でも、同じならtrueを返す。
test('object4 and object5 is equal', () => {
  expect(objectMatch(object4,object5)).toBe(true);
});
