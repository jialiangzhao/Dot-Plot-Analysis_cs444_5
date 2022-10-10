
/* 
Author: jialiangzhao
class: cs444
content: For this assignment, I used d3 and added some 
animation effects to form a smooth change of colors 
and data. I use the button button to be the trigger of
 the change. In some changes, the axis and color and
  position will be changed. 

*/
var graph=d3.select("#vis1")
.append("svg")
.attr("width",500)
.attr("height",500)
.attr("id","scatterplot_1");

var cxScale = d3.scaleLinear()
.domain([d3.min(scores,d => d.SATV),d3.max(scores,d => d.SATV)])
.range([100,488]);

var cxAdd = d3.scaleLinear()
.domain([d3.min(scores,d => d.SATV+d.SATM),d3.max(scores,d => d.SATV+d.SATM)])
.range([100,488]);

var cyScale = d3.scaleLinear()
.domain([d3.min(scores,d => d.ACT),d3.max(scores,d => d.ACT)])
.range([400,12]);


var rScale= d3.scaleSqrt()
.domain([d3.min(scores,d => d.SATM),d3.max(scores,d => d.SATM)])
.range([2,12]);

var option1 = d3.scaleLinear()
.domain([d3.min(scores,d => d.GPA), d3.max(scores,d => d.GPA)])
.range(["blue", "red"]);

var option2 = d3.scaleLinear()
.domain([d3.min(scores,d => d.GPA), d3.mean(scores,d=> d.GPA), d3.max(scores,d => d.GPA)])
.range(["#2c7bb6","#ffffbf","#d7191c"]);

var option2 = d3.scaleLinear()
.domain([d3.min(scores,d => d.GPA), d3.mean(scores,d=> d.GPA), d3.max(scores,d => d.GPA)])
.range(["#2c7bb6","#ffffbf","#d7191c"]);

var option3 = d3.scaleQuantize()
.domain([d3.min(scores,d => d.GPA), d3.max(scores,d => d.GPA)])
.range(["#2c7bb6","#abd9e9","#ffffbf","#fdae61","#d7191c"]);

var circle=graph.selectAll("circle")
.data(scores)
.enter().append("circle")
.attr("cx",function(d){return cxScale(d.SATV);})
.attr("cy",function(d){return cyScale(d.ACT);})
.attr("r",function(d){return rScale(d.SATM);})
.attr("fill",function(d){return option1(d.GPA);});

var xScale1 = d3.scaleLinear()
.domain([250,d3.max(scores,d => d.SATV)])
.range([50, 487]);

var xScale2 = d3.scaleLinear()
.domain([Math.floor(d3.min(scores,d => d.SATV+d.SATM)/100)*100,
    Math.ceil(d3.max(scores,d => d.SATV+d.SATM)/100)*100])
.range([50, 487]);



var yScale1 = d3.scaleLinear()
.domain([14,36])
.range([425, 4]);

var xLine=graph.append("g").attr("id","x-axis")
.attr("transform","translate(0,425)")
.call(d3.axisBottom(xScale1));

var xWord=graph.append("text").text("SATV")
.attr("id","xWord")
.attr("x",250).attr("y",470);

var yWord=graph.append("text").text("ACT")
.attr("id","yWord")
.attr("x",0).attr("y",0)
.attr("transform", "translate(10,250)rotate(90)");



var yLine=graph.append("g").attr("id","y-axis")
.attr("transform","translate(50,0)")
.call(d3.axisLeft(yScale1));

