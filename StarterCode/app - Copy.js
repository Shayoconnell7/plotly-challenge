


// function for initial default chart
function initialize_page() {

  var dropdown_menu = d3.select("#selDataset")

  d3.json("samples.json").then((data) => {
    console.log(data);

    data.names.forEach(function(subject_name){
      dropdown_menu.append(option).text(subject_name).property("value");
    });

    subject_plot(data.names[0]);
    subject_info(data.names[0]);
});
};

// function for changing with selection
function optionChanged(subject_id) {
  subject_plot(subject_id);
  subject_info(subject_id);
};

// function for plotting

function subject_plot(subject_id){
  d3.json("samples.json").then((data) => {
    console.log(data);

    var subject_ids = data.names;
    console.log(subject_ids);

    var samples = data.samples.filter(s => s.subject_id.toString() === subject_id)[0];
    consoles.log(samples)
    
    var sample_values = samples.sample_values;
    console.log(sample_values);

    var otu_ids = samples.otu_ids;
    console.log(otu_ids);

    var otu_labels = samples.otu_labels;
    console.log(otu_labels);

    var trace1 = {
      x: sample_values,
      y: otu_ids,
      text: otu_labels,
      type: "bar",
      orientation: 'h',
      name: "Top Ten OTUs"      
      };

    var data = [trace1];

    var layout = {
      title: `Top 10 OTUs for ${subject_id}`,
      xaxis: {
        title: "OTUs"
      }
    }
});
};


// function for info panel

function subject_info(subject_id) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == subject_id);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
    PANEL.html("");
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`); 
    });
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


