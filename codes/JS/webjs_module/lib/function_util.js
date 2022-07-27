window.getCummulativeMutiply = function (arr) {
  let res = [];
  for (let i = arr.length - 1, total = 1; i > 0; i--) {
    total *= arr[i];
    res.unshift(total);
  }
  return res;
}

window.fromIndex = function (num, mul) {
  let res = [];
  let mod = num;
  for (let i = 0; i < mul.length; i++) {
    res.push(Math.floor(mod / mul[i]));
    mod = mod % mul[i];
  }
  res.push(mod);
  return res;
}

window.toIndex = function (arr, mul) {
  let r = 0;
  for (let i = 0; i < mul.length; i++) {
    r += mul[i] * arr[i];
  }
  r += arr[arr.length - 1];
  return r;
}