


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

    var subjects = data.samples;
    var subjectData = subjects.filter(s => s.id == subject_id);
    console.log(subjectData);

    var result = subjectData[0];
    console.log(result);
    
    var sample_values = result.sample_values;
    console.log(sample_values);

    var otu_ids = result.otu_ids;
    console.log(otu_ids);

    var otu_labels = result.otu_labels;
    console.log(otu_labels);

    var bar_trace = {
      x: sample_values,
      y: otu_ids,
      text: otu_labels,
      type: "bar",
      orientation: 'h',
      name: "Top Ten OTUs"      
      };

    var bar_data = [bar_trace];

    var bar_layout = {
      title: `Top 10 OTUs for ${subject_id}`,
      xaxis: {
        title: "OTUs"
      }
    };

    Plotly.newPlot("bar", bar_data, bar_layout);
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


function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
    PANEL.html("");
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(${key.toUpperCase()}: ${value});
    });
    buildGauge(result.wfreq);
  });
 }
 function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      margin: { t: 30}
    };
    var bubbleData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      }
    ];
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    var yticks = otu_ids.slice(0, 10).map(otuID => OTU ${otuID}).reverse();
    var barData = [
      {
        y: yticks,
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
      }
    ];
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };
    Plotly.newPlot("bar", barData, barLayout);
  });
 }
 function init() {
  var selector = d3.select("#selDataset");
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
 }
 function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
 }
 init();
 
 try this
 2:04
 // Filter the data for the object with the desired sample number
        // Use d3 to select the panel with id of #sample-metadata
    // Use `.html("") to clear any existing metadata
    // Use Object.entries to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    // Build a Bubble Chart
  // Grab a reference to the dropdown select element
  // Use the list of sample names to populate the select option.
    // Use the first sample from the list to build the initial plots
  // Fetch new data each time a new sample is selected
 // Initialize the dashboard
 