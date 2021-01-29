
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import View from "ol/View";
import { Fill, Stroke, Style, Text, Icon } from "ol/style";

const kunming_style = new Style({
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

const kunming_source = new VectorSource({
    url: "/source/kunming.geojson",
    format: new GeoJSON()
});

const kunming_layer = new VectorLayer({
    source: kunming_source,
    style: function (feature) {
        kunming_style.getText().setText(feature.get("name"));
        return kunming_style;
    },
    name: "kunming"
});


const view = new View({
    center: [102.729044, 25.070239],
    zoom: 10,
    projection: 'EPSG:4326'
});

function render_base_map_to_html(taget_id) {
    return new Map({
        layers: [
            new TileLayer({
                source: new OSM()
            }),
            kunming_layer
        ],
        target: taget_id,
        view
    });
}

export default render_base_map_to_html;