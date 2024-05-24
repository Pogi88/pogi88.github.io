// Viz 1

const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Degree Distribution of the Harry Potter Network",
    "width": 800,  
    "height": 600, 
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/degree_distribution_hp.json",
      "format": {
        "type": "json"
      }
    },
    "transform": [
      {
        "calculate": "datum.degree % 4",  
        "as": "color_group"
      }
    ],
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "degree",
        "type": "quantitative",
        "axis": {
          "title": "Degree"
        }
      },
      "y": {
        "field": "count",
        "type": "quantitative",
        "axis": {
          "title": "Count"
        }
      },
      "color": {
        "field": "color_group",
        "type": "nominal",
        "scale": {
          "domain": [0, 1, 2, 3],
          "range": ["#740001", "#ae0001", "#eeba30", "#d3a625"]  
        },
        "legend": null
        
      }
    },
    "title": "Degree Distribution of the Harry Potter Network"
  }
  
  vegaEmbed('#vis', spec).then(result => {
    console.log(result);
  }).catch(console.error);


  // Viz 2

  const spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Line Plot of Degree Distribution",
    "width": 800,  
    "height": 600, 
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/degree_distribution_hp_2.json",
      "format": {
        "type": "json"
      }
    },
    "mark": {
      "type": "line",
      "point": true
    },
    "encoding": {
      "x": {
        "field": "degree",
        "type": "quantitative",
        "axis": {
          "title": "Degree k"
        }
      },
      "y": {
        "field": "count",
        "type": "quantitative",
        "axis": {
          "title": "P(k)"
        }
      },
      "color": {
        "value": "#740001"  
      }
    },
    "title": "Line Plot of Degree Distribution"
  }

  vegaEmbed('#vis2', spec2).then(result => {
    console.log(result);
  }).catch(console.error);