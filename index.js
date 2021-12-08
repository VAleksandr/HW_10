//---1-----------------------------------
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let str = '-';

for (let i = 0; i < array.length; i++) {
  str += array[i] + '-';
}

console.log(str);

//---

let str2 = '-';

array.forEach( (item) => {
  str2 += item + '-';
});

console.log(str2);

//---

let str3 =`-${array.join('-')}-`;
console.log(str3);

//---2-----------------------------------

function createArray(n) {
  const arr = [];
  let randomNumber;

  for (let i = 0; i < n; i++) {
    randomNumber = Math.floor(Math.random()*10);
    arr.push(randomNumber); 
  }

  return arr;
}

console.log(createArray(10));

//---

function createArray2(n) {
  const arr = [];
  let randomNumber;

  for (let i = 0; i < n; i++) {
    randomNumber = Math.floor(Math.random()*10+1);
    arr.push(randomNumber); 
  }

  return arr;
}

console.log(createArray2(10));

//---3-----------------------------------

const user = {
  friends: [
    {
      name: 'name1',
      age: 25
    },
    {
      name: 'name2',
      age: 25
    },
    {
      name: 'name3',
      age: 30
    },
    {
      name: 'name4',
      age: 20
    }
  ]
};
  
let num = 0; 

for (let i = 0; i < user.friends.length; i++) {
  num += user.friends[i].age;

  if (i === user.friends.length-1) {
    num = num / user.friends.length;
  }  
}

console.log(num);

//---

let num2 = 0;

user.friends.forEach((item, i) => {
  num2 += user.friends[i].age;

  if (i === user.friends.length-1) {
    num2 = num2 / user.friends.length;
  }
});

console.log(num2);

//---4-----------------------------------

const arr = [7, 8, 5, 1, 6, 3, 42, 66, 8, 13];

const myFun = (ar) => {
  const arr_new = ar;
  let j = 0;

  for (let i = 0; i < arr_new.length; i++) {
    if (arr_new[i] > arr_new[i+1]) {
    arr_new.splice(i+2, 0, arr_new[i]);
    arr_new.splice(i, 1);
    j++;
    }
    if (i === arr_new.length-1)  {
      if (j === 0) {
      break; 
      } else {
        j = 0;
        i = -1;
      }  
    } 
  }

  return arr_new;
}

console.log(myFun(arr));

//---

const myFun2 = (ar) => {
  const arr_new = ar;
  let z = 0;
  
  for (let i = arr_new.length-1; i > z; i--) {
    if (arr_new[i] > arr_new[i-1]) {
      let y = arr_new[i];
      arr_new[i] = arr_new[i-1];
      arr_new[i-1] = y;
    }
    if (i - 1 === z) {
      z++; 
      i = arr_new.length;
    }
  }

  return arr_new;
}

console.log(myFun2(arr));
