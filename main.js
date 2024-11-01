const display = document.querySelector(".value");
const button = document.querySelectorAll("button");

button.forEach((item) => {
  item.onclick = () => {
    try {
      if (item.dataset.button === "C") {
        display.value = "";
      } else if (item.dataset.button === "CE") {
        let string = display.value;
        display.value = string.substr(0, string.length - 1);
      } else if (item.dataset.button === "=") {
        if (item.dataset.button !== "") {
          display.value = eval(display.value);
        }
      } else {
        display.value += item.dataset.button;
      }
    } catch (err) {
      display.value = "Invalid Entry";
      setTimeout((item) => (display.value = ""), 1000);
    }
  };
});
