var spec = "js/choropleth_map.vg.json";
vegaEmbed('#map', spec).then(function(result) {}).catch(console.error);

var spec = "js/filter_bar.vg.json";
vegaEmbed('#map2', spec).then(function(result) {}).catch(console.error);

var spec = "js/filter_bar_birth.vg.json";
vegaEmbed('#map3', spec).then(function(result) {}).catch(console.error);