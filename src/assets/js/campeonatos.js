/*Use Papa parse and Datatables to read Google Spreadsheet*/

let publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSRaO91LVh7cnt2dUYI3qFgheM-rPVG5ARaLbmRFH9q_HdoyLIMsYLlr-6Htka4IvocfPnNnBgQ6PhT/pub?output=csv";

/* Papa parse */
function init() {
  // eslint-disable-next-line
  Papa.parse(publicSpreadsheetUrl, {
      download: true,
      header: true,
      complete: showInfo
    })
}

function showInfo(results) {
  let data = results.data
  displayInfo(data);
}

function displayInfo(data) {
  console.log(data);
  let olimpia = data.filter( club => club.Club === "Olimpia")
  console.log(olimpia);
}

window.addEventListener("DOMContentLoaded", init);
