import React, { useEffect, useState, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import esriConfig from "@arcgis/core/config.js";

const key = process.env.REACT_APP_ESRI_API_KEY;

const MapDisplay = ({}) => {

  const mapRef = useRef();
  const [view, setView] = useState(null);

  useEffect(() => {
    esriConfig.apiKey = key;
    const map = new Map({
      basemap: "arcgis-topographic",
      // Can also create a basemap using the Class
    });
    const eartquakePopupTemplate = {
      title: "Earthquake Info",
      content: "Magnitude {mag} {type} {place}",
    };
    const earthquakeGeojsonlayer = new GeoJSONLayer({
      url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
      copyright: "USGS Earthquakes",
      title: "USGS Earthquakes",
      popupTemplate: eartquakePopupTemplate,
    });
    map.add(earthquakeGeojsonlayer);
    // const WhiteDoveTemplate = {
    //   title: "Creature Habitat",
    //   content: "White-Tailed Dove",
    // };
    // const WhiteDoveGeojsonlayer = new GeoJSONLayer({
    //   url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Whitewinged_Dove_Habitat/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
    //   title: "White Doves Habitat",
    //   popupTemplate: WhiteDoveTemplate,
    // });
    // WhiteDoveGeojsonlayer.renderer = {
    //   type: "simple",
    //   symbol: {
    //     type: "simple-fill",
    //     color: "green",
    //     outline: {
    //       color: "black",
    //       width: 1,
    //     },
    //   },
    // };
    // map.add(WhiteDoveGeojsonlayer);
    // const WeatherStationTemplate = {
    //   title: "Weather Station",
    //   content: "{STATION_NA}, {COUNTY}",
    // };
    // const WeatherStationGeojsonlayer = new GeoJSONLayer({
    //   url: "https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/WeatherStations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
    //   title: "Weather Stations",
    //   popupTemplate: WeatherStationTemplate,
    // });
    // WeatherStationGeojsonlayer.renderer = {
    //   type: "simple",
    //   symbol: {
    //     type: "simple-marker",
    //     color: "blue",
    //     size: 5,
    //   },
    // };
    // map.add(WeatherStationGeojsonlayer);
    const view = new MapView({
      map: map,
      center: [-111.93659193092192, 39.5], // Longitude, latitude
      zoom: 7,
      container: mapRef.current,
    });
    let layerList = new LayerList({
      view: view,
    });
    view.ui.add(layerList, {
      position: "top-right",
    });
    setView(view);

    return () => {
      view.container = null;
    };
  }, []);

  return( 
      <div style={{ height: '100%', width: '100%'}} ref={mapRef} />
  )
}

export default MapDisplay
