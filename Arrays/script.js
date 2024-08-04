function traversal() {
  let arr = [10, 2, 15, 4, 20, 7, 23, 9, 42, 89];
  let elem = document.getElementById("elem").value;
  let text = document.getElementById("text").value;

  let newText = parseInt(text);
  let newId = parseInt(elem);
  for (let newId of arr) {
    console.log(newId);
  }
  return;
}
