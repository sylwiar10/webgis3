require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Sketch",
   "esri/layers/FeatureLayer"
 ], function(Map, MapView,BasemapToggle, BasemapGallery, GraphicsLayer,Sketch,FeatureLayer) {


  var graphicsLayer = new GraphicsLayer();
      
  var map = new Map({
    basemap: "topo-vector",
    layers: [graphicsLayer]
  });
  
  var view = new MapView({
    container: "containerDown",
    map: map,
    center: [22.57, 51.25],
    zoom: 13
  });
  
  
  var sketch = new Sketch({
    view: view,
    layer: graphicsLayer
  });

  
  view.ui.add(sketch, "top-right");  
   
  var basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
  });
   
  view.ui.add(basemapToggle, "bottom-right");
  var basemapGallery = new BasemapGallery({
    view: view,
    source: {
    portal: {
      url: "https://www.arcgis.com",
      useVectorBasemaps: true
    }
    }
  });
  view.ui.add(basemapGallery, "top-right");
  var basemapGallery = new BasemapGallery({
    view: view,
    source: {
    portal: {
      url: "https://www.arcgis.com",
      useVectorBasemaps: false 
    }
    }
  });
  var trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
  });

  map.add(trailheadsLayer);
  
  
      
 });