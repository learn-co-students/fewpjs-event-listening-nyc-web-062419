function addingEventListener() {
  let input = document.querySelector("#input");
  input.addEventListener("click", function(event) {
    console.log("%c ITS PRESSED!", "color:blue");
  });
}

addingEventListener;
