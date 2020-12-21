# plotly-challenge

# Plot.ly Homework - Belly Button Biodiversity

In this assignment, I have built an interactive dashboard to explore the "Belly Button Biodiversity dataset"(found at http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The dashboard allows for visualization of number and variety of microbial species found in each subject.

## Step 1: Plotly

1. I used the D3 library to read in my `samples.json` file containing the result and test subject data.

2. I created a horizontal bar chart displaying the top 10 Microbial Species found in each subject. 

3. I reated a bubble chart that displays the frequency of all Microbial Species found in that subject.

4. I created a panel to display the subject's demographic information and metadata.

5. I created a dropdown menu so users can navigate through test subject by ID Number, and view the demographic/metadata information as well as bar and bubble charts for each subject.

6. Although the plot defaults to subject 940 upon page initialization, the plots and info panel will update any time a new subject is selected through the dropdown.


## Deployment

* I have deployed this dashboard to GitHub Pages. 

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)


