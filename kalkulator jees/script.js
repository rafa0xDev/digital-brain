const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let current = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      current = "";
      screen.textContent = "0";
    } else if (value === "=") {
      try {
        current = eval(current).toString(); // jangan pakai eval di project serius ya
        screen.textContent = current;
      } catch {
        screen.textContent = "Blog";
      }
    } else {
      current += value;
      screen.textContent = current;
    }
  });
});
