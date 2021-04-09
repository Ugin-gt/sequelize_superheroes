const res = generate();
function * generate (max =100) {
  let store = 0;
  while (store<max) {
    yield store++;
  }
}
const cycle => () {
while (true) {
  let i = 0;
  res.next(i++) ;console.log(cycle);
}}
 
