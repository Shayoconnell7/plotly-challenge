


// function for initial default chart
function initialize_page() {

  var dropdown_menu = d3.select("#selDataset")

  d3.json("StarterCode/static/js/samples.json").then((data) => {
    console.log(data);

    data.names.forEach(function(subject){
      dropdown_menu.append("option").text(subject).property("value", subject);
    });

    subject_plots(data.names[0]);
    subject_info(data.names[0]);
});
};

// run initialization
initialize_page();

// function for changing with selection
function optionChanged(subject_id) {
  subject_plots(subject_id);
  subject_info(subject_id);
};

// function for plotting
function subject_plots(subject_id){
  d3.json("StarterCode/static/js/samples.json").then((data) => {
    console.log(data);
    
    // set up variables
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

    // bar chart   
    var bar_trace = {
      x: sample_values.slice(0,10).reverse(),
      y: otu_ids.slice(0,10).map(otuID => `Species ${otuID}`).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      type: "bar",
      orientation: 'h',
      name: "Top Ten Microbial Species Found"      
      };

    var bar_data = [bar_trace];

    var bar_layout = {
      title: `Top 10 Microbial Species Found for Subject ${subject_id}`,
      xaxis: {
        title: "Number Present"
      }
    };

    Plotly.newPlot("bar", bar_data, bar_layout);

    // bubble chart
    var bubble_trace = {
      x : otu_ids,
      y : sample_values,
      text : otu_labels,
      mode : "markers",
      marker : {
        size: sample_values,
        color: otu_ids,
      }
    };

    var bubble_data = [bubble_trace];

    var bubble_layout = {
      title : 'Microbial Species Found Per Sample',
      xaxis : {
        title : "Species Number"
      },
      yaxis : {
        title: "Number Found"
      },
      hovermode: "closest"
    };

    Plotly.newPlot("bubble", bubble_data, bubble_layout);

});
};


// function for metadata info panel

function subject_info(subject_id) {
  d3.json("StarterCode/static/js/samples.json").then((data) => {
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

 