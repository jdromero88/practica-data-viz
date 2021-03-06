/*Use Papa parse and Datatables to read Google Spreadsheet*/

let publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSRaO91LVh7cnt2dUYI3qFgheM-rPVG5ARaLbmRFH9q_HdoyLIMsYLlr-6Htka4IvocfPnNnBgQ6PhT/pub?output=csv";

/* Papa parse */
function init() {
  showCurrentYear()
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

/*function to use Datatables to display data */
function displayInfo(dataset) {
  $("#table").DataTable({
    responsive: true,
    data: dataset,
    columns: [
      {
        title: "Año",
        data: "Año",
      },
      {
        title: "Club",
        data: "Club",
      },
      {
        title: "Formato",
        data: "Formato",
      },
    ],
    paging: false,
    searching: true,
    info: false,
    order: [],
    // columnDefs: [
    //   { width: "30%", targets: [1, 2, 3] }
    // ]
  });


  // DataTable
  let table = $("#table").DataTable();
  // Apply the search
  table.columns().every(function () {
    let that = this;
      $("input", this.footer()).on("keyup change", function () {
      that.search(this.value).draw();
      });
    });
}

function showCurrentYear() {
  let currentYear = new Date()
  let timeEl = document.getElementById("currentYear")
  timeEl.textContent = currentYear.getFullYear()
}


window.addEventListener("DOMContentLoaded", init);
