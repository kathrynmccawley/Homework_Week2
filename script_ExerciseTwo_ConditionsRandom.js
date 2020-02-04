let rolled = Math.ceil(Math.random() * 6);

console.log(rolled);

if (rolled > 3) {
  console.log("This number is greater than 3");
} else if (rolled < 3) {
  console.log("This number is less than 3");
} else if (rolled == 3) {
  console.log("This number is 3");
}
