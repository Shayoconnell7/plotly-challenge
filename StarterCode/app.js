
// function for plotting

function subject_plot(subject_id){
  d3.json("samples.json").then((data) => {
    console.log(data);
    var subject_ids = data.names;
    console.log(subject_ids);

    var samples = data.samples.filter(s => s.subject_id.toString() === subject_id)[0];;
    consoles.log(samples)
    
    var sample_values = samples.sample_values;
    console.log(sample_values);

    var otu_ids = samples.otu_ids;
    console.log(otu_ids);

    var otu_labels = samples.otu_labels;
    console.log(otu_labels);

  
});
};


// function for info panel



// function for changing with selection

function optionChanged(subject_id) {
  subject_plot(subject_id);
  subject_info(subject_id);
};


// subject_ids.forEach(add_to_list);

  

// function add_to_list(subject){
//   selection = d3.select("selDataset");
//   let newOption = new Option (subject, subject);
//   selection.add(newOption,undefined);


// function for initial default chart

function initialize_page() {

  var dropdown_menu = d3.select("selDataset")

  d3.json("samples.json").then((data) => {
    console.log(data);

    data.names.forEach(function(subject_name){
      dropdown_menu.append("option").text(subject_name).property("value");
    });

    subject_plot(data.names[0]);
    subject_info(data.names[0]);
});
};


// d3.json("data/data.json").then((data) => {
//   //  Create the Traces
//   var trace1 = {
//     x: data.organ,
//     y: data.survival.map(val => Math.sqrt(val)),
//     type: "box",
//     name: "Cancer Survival",
//     boxpoints: "all"
//   };

//   // Create the data array for the plot
//   var data = [trace1];

//   // Define the plot layout
//   var layout = {
//     title: "Square Root of Cancer Survival by Organ",
//     xaxis: { title: "Organ" },
//     yaxis: { title: "Square Root of Survival" }
//   };

//   // Plot the chart to a div tag with id "plot"
//   Plotly.newPlot("plot", data, layout);
// });


	// // create the drop down menu of cities
	// var selector = d3.select("body")
  // .append("select")
  // .attr("id", "cityselector")
  // .selectAll("option")
  // .data(data)
  // .enter().append("option")
  // .text(function(d) { return d.city; })
  // .attr("value", function (d, i) {
  //   return i;
  // });

  // // generate a random index value and set the selector to the city
	// // at that index value in the data array
	// var index = Math.round(Math.random() * data.length);
	// d3.select("#cityselector").property("selectedIndex", index);

	// // append a paragraph tag to the body that shows the city name and it's population
	// d3.select("body")
	// 			.append("p")
	// 			.data(data)
	// 			.text(function(d){ 
	// 				return data[index]['city'] + " - population " + comma(data[index]['population']); 
	// 			})

	// // when the user selects a city, set the value of the index variable
	// // and call the update(); function
	// d3.select("#cityselector")
	// .on("change", function(d) {
	// 	index = this.value;
	// 	update();
	// })

	// // update the paragraph text to match the selection made by the user
	// function update(){
	// 	d3.selectAll("p")
	// 		.data(data)
	// 		.text(function(d){ 
	// 			return data[index]['city'] + " - population " + comma(data[index]['population']); 
	// 		})
	// }

