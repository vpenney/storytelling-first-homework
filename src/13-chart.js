/* global d3 */
(function () {
  // Build your SVG here
  // using all of that cut-and-paste magic
  var margin = {
    top: 40,
    right: 20,
    bottom: 40,
    left: 65
  }

  var width = 410 - margin.left - margin.right

  var height = 450 - margin.top - margin.bottom

  var svg = d3
    .select('#chart13')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.right + ')')

  // Build your scales here
  const widthScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, width])

  const scaleBand = d3.scaleBand()
    .range([height, 0])

  const colorScale = d3.scaleOrdinal()
    .domain(['cat', 'cow', 'dog'])
    .range(['#a6cee3', '#1f78b4', '#b2df8a'])

  d3.csv(require('./eating-data.csv')).then(ready)
    .then(ready)
    .catch(function (err) {
      console.log('Failed with', err)
    })

  function ready (datapoints) {
    // Add and style your marks here
    var names = datapoints.map(function (d) { return d.name })

    scaleBand.domain(names)

    svg
      .selectAll('rect')
      .data(datapoints)
      .enter().append('rect')
      .attr('height', 50)
      .attr('width', d => {
        return widthScale(d.hamburgers)
      })
      .attr('y', d => {
        return scaleBand(d.name)
      })
      .attr('fill', d => {
        return colorScale(d.animal)
      })

    var yAxis = d3.axisLeft(scaleBand)
    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)

    var xAxis = d3.axisBottom(widthScale)
    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
