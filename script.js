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


// Viz 3

  const spec3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Log-Log Plot of Degree Distribution",
    "width": 800,
    "height": 600,
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/degree_distribution_hp_3.json",
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
        "scale": {"type": "log"},
        "axis": {
          "title": "Degree k"
        }
      },
      "y": {
        "field": "count",
        "type": "quantitative",
        "scale": {"type": "log"},
        "axis": {
          "title": "P(k)"
        }
      },
      "color": {
        "value": "#2ca02c"
      }
    },
    "title": "Log-Log Plot of Degree Distribution"
  }

  vegaEmbed('#vis3', spec3).then(result => {
    console.log(result);
  }).catch(console.error);


  // Viz 4

  const spec4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Clustering Coefficient Distribution of the Harry Potter Network",
    "width": 800,
    "height": 600,
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/clust_coeff_distribution_hp.json",
      "format": {
        "type": "json"
      }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "clustering_coefficient",
        "type": "quantitative",
        "axis": {
          "title": "Clustering Coefficient"
        }
      },
      "y": {
        "field": "frequency",
        "type": "quantitative",
        "axis": {
          "title": "Frequency"
        }
      },
      "color": {
        "field": "bin_index",
        "type": "nominal",
        "scale": {
          "domain": [0, 1, 2, 3],
          "range": ["#1a472a", "#2a623d", "#5d5d5d", "#aaaaaa"]
        },
        "legend": null
      }
    },
    "title": "Clustering Coefficient Distribution of the Harry Potter Network"
  }

  vegaEmbed('#vis4', spec4).then(result => {
    console.log(result);
  }).catch(console.error);


  // Viz 5

  const spec5 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Degree Centrality Distribution of the Harry Potter Network",
    "width": 800,
    "height": 600,
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/degree_centrality_distribution_hp.json",
      "format": {
        "type": "json"
      }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "degree_centrality",
        "type": "quantitative",
        "axis": {
          "title": "Degree Centrality"
        }
      },
      "y": {
        "field": "frequency",
        "type": "quantitative",
        "axis": {
          "title": "Frequency"
        }
      },
      "color": {
        "field": "bin_index",
        "type": "nominal",
        "scale": {
          "domain": [0, 1, 2, 3],
          "range": ["#0e1a40", "#222f5b", "#bebebe", "#946b2d"]
        },
        "legend": null
      }
    },
    "title": "Degree Centrality Distribution of the Harry Potter Network"
  }

  vegaEmbed('#vis5', spec5).then(result => {
    console.log(result);
  }).catch(console.error);


  // Viz 6

  const spec6 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Betweenness Centrality Distribution of the Harry Potter Network",
    "width": 800,
    "height": 600,
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/betweenness_centrality_distribution_hp.json",
      "format": {
        "type": "json"
      }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "betweenness_centrality",
        "type": "quantitative",
        "axis": {
          "title": "Betweenness Centrality"
        }
      },
      "y": {
        "field": "frequency",
        "type": "quantitative",
        "axis": {
          "title": "Frequency"
        }
      },
      "color": {
        "field": "bin_index",
        "type": "nominal",
        "scale": {
          "domain": [0, 1, 2, 3],
          "range": ["#0e1a40", "#222f5b", "#bebebe", "#946b2d"]
        },
        "legend": null
      }
    },
    "title": "Betweenness Centrality Distribution of the Harry Potter Network"
  }
  

  vegaEmbed('#vis6', spec6).then(result => {
    console.log(result);
  }).catch(console.error);


   // Viz 7

   const spec7 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Eigenvector Centrality Distribution of the Harry Potter Network",
    "width": 800,
    "height": 600,
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/eigenvector_centrality_distribution_hp.json",
      "format": {
        "type": "json"
      }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "eigenvector_centrality",
        "type": "quantitative",
        "axis": {
          "title": "Eigenvector Centrality"
        }
      },
      "y": {
        "field": "frequency",
        "type": "quantitative",
        "axis": {
          "title": "Frequency"
        }
      },
      "color": {
        "field": "bin_index",
        "type": "nominal",
        "scale": {
          "domain": [0, 1, 2, 3],
          "range": ["#0e1a40", "#222f5b", "#bebebe", "#946b2d"]
        },
        "legend": null
      }
    },
    "title": "Eigenvector Centrality Distribution of the Harry Potter Network"
  }
  
  

  vegaEmbed('#vis7', spec7).then(result => {
    console.log(result);
  }).catch(console.error);


  // Viz 8

  const spec8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Scatter plots of centrality measures for the Harry Potter Network",
    "data": {
      "url": "https://raw.githubusercontent.com/Pogi88/pogi88.github.io/main/centralities_correlations_hp.json",
      "format": {
        "type": "json"
      }
    },
    "repeat": {
      "row": ["degree", "between", "closeness", "eigenvector", "pagerank", "harmonic", "load"],
      "column": ["degree", "between", "closeness", "eigenvector", "pagerank", "harmonic", "load"]
    },
    "spec": {
      "mark": "point",
      "encoding": {
        "x": {
          "field": {"repeat": "column"},
          "type": "quantitative"
        },
        "y": {
          "field": {"repeat": "row"},
          "type": "quantitative"
        },
        "color": {
          "datum": {"repeat": "column"},
          "type": "nominal",
          "scale": {
            "domain": ["degree", "between", "closeness", "eigenvector", "pagerank", "harmonic", "load"],
            "range": ["#740001", "#eeba30", "#1a472a", "#5d5d5d", "#0e1a40", "#946b2d", "#aaaaaa"]
          }
        }
      }
    },
    "resolve": {
      "scale": {
        "independent": true
      }
    }
  }
  
  
  

  vegaEmbed('#vis8', spec8).then(result => {
    console.log(result);
  }).catch(console.error);