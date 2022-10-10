// 
// buttons.js
// Buttons Example for CSC444 Assignment 05
// Joshua A. Levine <josh@email.arizona.edu
//
// This file provides a simple example of using d3 to create buttons in
// an html webpage.  The buttons are created from a list of buttons
// (called buttonList) that specifies the id, display text, and
// event-handler function that should be called for each button click.
//
// All buttons are inserted by d3 within a div whose id is main
//

// Here is a list with objects that specify some buttons.
var buttonList = [
    {
        id: "colormap-button-1",
        text: "Button 1",
        click: function() { d3.selectAll("circle")
        .transition().duration(1500)
        .attr("fill",function(d){return option1(d.GPA);}); }
    },
    {
        id: "colormap-button-2",
        text: "Button 2",
        click: function() { d3.selectAll("circle")
        .transition().duration(1500)
        .attr("fill",function(d){return option2(d.GPA);}); }
    },
    {
        id: "colormap-button-3",
        text: "Button 3",
        click: function() { d3.selectAll("circle")
        .transition().duration(1500)
        .attr("fill",function(d){return option3(d.GPA);});}
    },
    {
        id: "SAT-cumulative",
        text: "SAT-cumulative",
        click: function() { d3.selectAll("circle")
        .transition().duration(1500)
        .attr("cx",function(d){return cxAdd(d.SATV+d.SATM);});
        d3.select("#x-axis").transition().duration(1500).call(d3.axisBottom(xScale2));
        d3.select("#xWord").transition().duration(1500).text("SAT-cumulative");
        }
    },
    {
        id: "SATV for X",
        text: "SATV for X",
        click: function() { d3.selectAll("circle")
        .transition().duration(1500)
        .attr("cx",function(d){return cxScale(d.SATV);});
        d3.select("#x-axis").transition().duration(1500).call(d3.axisBottom(xScale1));
        d3.select("#xWord").transition().duration(1500).text("SATV");
        }
    }

];

// In the same way that we have been using d3 to create SVG elements,
// we can use d3 to create buttons and give them attributes.
//
// The only new feature in the code below is the use of the on()
// method, which defines *event handlers*.  In this case, we are
// telling d3 to call a function in the event that a button is
// clicked.

d3.select("#controls")
    .selectAll("button")
    .data(buttonList)
    .enter()
    .append("button")
    .attr("id", function(d) { return d.id; })
    .text(function(d) { return d.text; })
    .on("click", function(event, d) {
        // Since the button is bound to the objects from buttonList,
        // the expression below calls the click function from either
        // of the two button specifications in the list.
        return d.click();
    });
