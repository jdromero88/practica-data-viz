/*Use Papa parse and Datatables to read Google Spreadsheet*/
let data = []
let nombres = []
let nombreCampeones = []
let losCampeones = []
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


    // highcharts
    // eslint-disable-next-line
    Highcharts.chart('container', {
        chart: {
            type: 'column',
            styledMode: true
        },

        title: {
            text: 'Styling axes and columns'
        },

        yAxis: [{
            className: 'highcharts-color-0',
            title: {
                text: 'Primary axis'
            }
        }, {
            className: 'highcharts-color-1',
            opposite: true,
            title: {
                text: 'Secondary axis'
            }
        }],

        plotOptions: {
            column: {
                borderRadius: 5
            }
        },

        series: [{
            data: showClubs(data)

        }, {
            data: [324, 124, 547, 221],
            yAxis: 1
        }]

    });
    // highcharts
}

function showInfo(results) {
  data = results.data
  nombreCampeones = showClubs(data)
  losCampeones = campeonatosPorClub(data, showClubs(data))
  console.log("Nombres:", nombreCampeones)
  console.log("Lista campeones: ",losCampeones)
}

function showClubs(data) {
  let clubs = []
  data.forEach( item => {
    if ( item.Club !== "" && item.Club !== "No hubo campeonato" ) {
      clubs.push( item.Club )
    }
  });
  nombres = [...new Set(clubs)]
  return nombres
}

function campeonatosPorClub(data, nombres) {
  let totalCampeonatos = []
  nombres.forEach( name => {
    let porClub = data.filter( nombre => nombre.Club === name)
    totalCampeonatos.push(porClub)
  })
  return totalCampeonatos
}
window.addEventListener("DOMContentLoaded", init);
