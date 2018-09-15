/* global d3 */
(function () {
  // Build your SVG here
  // using all of that cut-and-paste magic
  var margin = { top: 40, right: 40, bottom: 40, left: 40 }

  var width = 400 - margin.left - margin.right

  var height = 400 - margin.top - margin.bottom

  var svg = d3
    .select('#chart11')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  const xPositionScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, width])

  const yPositionScale = d3.scalePoint()
    .domain(['', 'cat', 'cow', 'dog', ' '])
    .range([height, 0])

  d3.csv(require('./eating-data.csv')).then(ready)
    .then(ready)
    .catch(function (err) {
      console.log('Failed with', err)
    })

  function ready (datapoints) {
    // Add and style your marks here
    svg
      .selectAll('circle')
      .data(datapoints)
      .enter().append('circle')
      .attr('r', 7)
      .attr('fill', '#FFB6C1')
      .attr('cx', d => {
        return xPositionScale(d.hamburgers)
      })
      .attr('cy', d => {
        return yPositionScale(d.animal)
      })

    var yAxis = d3
      .axisLeft(yPositionScale)
    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)

    d3.select('.y-axis .domain').remove()

    var xAxis = d3.axisBottom(xPositionScale).ticks(7)

    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
