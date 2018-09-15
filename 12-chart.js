/* global d3 */
(function () {
  // Build your SVG here
  // using all of that cut-and-paste magic
  var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }

  var width = 400 - margin.left - margin.right

  var height = 200 - margin.top - margin.bottom

  var svg = d3
    .select('#chart12')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  const xPositionScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, width])

  const colorScale = d3.scaleOrdinal()
    .domain(['cat', 'cow', 'dog'])
    .range(['#a6cee3', '#1f78b4', '#b2df8a'])

  const sqrtScale = d3.scaleSqrt()
    .domain([0, 10])
    .range([0, 50])

  d3.csv('eating-data.csv')
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
      .attr('r', d => {
        return sqrtScale(d.hotdogs)
      })
      .attr('fill', d => {
        return colorScale(d.animal)
      })
      .attr('cx', d => {
        return xPositionScale(d.hamburgers)
      })
      .attr('cy', (height + 40) / 2)
      .attr('opacity', 0.25)

    var xAxis = d3.axisBottom(xPositionScale).ticks(11)

    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
