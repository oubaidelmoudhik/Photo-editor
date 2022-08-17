const inputs = document.querySelectorAll(".controls input");

function changeValue() {
  let suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", changeValue);
  input.addEventListener("input", changeValue);
});
