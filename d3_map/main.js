/* eslint-disable no-undef */
/* eslint-disable camelcase */
const county_geomap_api = 'https://hexschool.github.io/tw_revenue/taiwan-geomap.json';
const county_revenue_api = 'https://hexschool.github.io/tw_revenue/tw_revenue.json';
let taiwan = [];
let sale = [];
const city = '';
axios.get(county_geomap_api).then((res) => {
  taiwan = res.data;
  draw(taiwan);
});
axios.get(county_revenue_api).then((res) => {
  sale = res.data; console.log(sale);
});

const colorScale = d3.scaleLinear()
  .domain([min, max])
// I goofed, so this has to be in reverse order
  .range(['#00806D', '#00BC4C', '#00F200', '#85FB44'].reverse());

function draw(jsn) {
  const projection = d3.geoMercator()
    .center([121.5, 25])
    .scale(8000);
  console.log(projection);
  const path = d3.geoPath(projection);

  d3.select('g.counties')
    .selectAll('path')
    .data(topojson.feature(jsn, jsn.objects.COUNTY_MOI_1090820).features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('stroke', '#3f2ab2')
    .style('background', '#d6d6d7')
    .attr('fill', '#d6d6d7')
    .attr('class', 'rect')
    .append('title');

  // .text(d=>console.log(d.properties.COUNTYNAME))
  // .on('click', () => {
  //   city = jsn.objects.COUNTY_MOI_1090820.geometries[0].properties.COUNTYNAME;
  //   console.log(city);
  // });
}
