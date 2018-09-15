/* global d3 */
(function () {
  // Here is your data
  var countries = [
    {
      name: 'Blahstia',
      continent: 'North America',
      gdp: 40
    },
    {
      name: 'Bleers',
      continent: 'Europe',
      gdp: 12
    },
    {
      name: 'Blolo',
      continent: 'Antarctica',
      gdp: 35
    },
    {
      name: 'Blurben',
      continent: 'North America',
      gdp: 90
    }
  ]

  // Set scale for rectangle width
  var widthScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 400])

  // Get the svg with the id of 'chart2'
  var svg = d3.select('#chart2')
    .attr('width', 400)
    .attr('height', 200)

  var colorScale = d3.scaleOrdinal()
    .domain(countries)
    .range(['#ae017e', '#fbb4b9', '#f768a1'])

  // Get the rectangles inside of it
  svg.selectAll('rect')
    .data(countries)
    .attr('height', 50)
    .attr('width', function (d) {
      return widthScale(d.gdp)
    })
    .attr('fill', function (d) {
      return colorScale(d.continent)
    })
})()
