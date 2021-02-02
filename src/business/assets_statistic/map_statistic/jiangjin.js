import jiangjinGeo from "./jiangjin.json";

import GeoJSON from 'ol/format/GeoJSON';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import { Fill, Stroke, Style, Text, Icon } from "ol/style";


const areaStyle = new Style({
    fill: new Fill({
        color: "rgba(255, 255, 255, 0.3)"
    }),
    stroke: new Stroke({
        color: "#319FD3",
        width: 3
    }),
    text: new Text({
        font: "14px Calibri,sans-serif",
        fill: new Fill({
            color: "#000"
        }),
        stroke: new Stroke({
            color: "#fff",
            width: 3
        })
    })
});

const  areaSource = new VectorSource({
    features: (new GeoJSON()).readFeatures(jiangjinGeo)
});

const areaLayer = new VectorLayer({
    source: areaSource,
    style: areaStyle
});


export default areaLayer;

