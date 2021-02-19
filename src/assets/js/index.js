function init() {
  showCurrentYear()
}
function showCurrentYear() {
  let currentYear = new Date()
  let timeEl = document.getElementById("currentYear")
  timeEl.textContent = currentYear.getFullYear()
}


window.addEventListener("DOMContentLoaded", init);
