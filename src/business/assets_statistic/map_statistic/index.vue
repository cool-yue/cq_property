<template>
<div class="map-statistic">
    <div id="map-statistic__map" class="map-statistis__map"></div>
    <div class="map-statistic__board">
        <div>资产统计</div>
        <div>水位站:5</div>
        <div>雨量站:4</div>
        <div>视频站:2</div>
    </div>
</div>
</template>

<script>
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {Vector as VectorLayer} from 'ol/layer';
import VectorSource from "ol/source/Vector";
import OSM from 'ol/source/OSM'
import targetLayer from "./jiangjin.js";
import iconUtil from "./icon.js";

let view;
let map;

const coordinatesOptions = {
  water: [
    [
          106.02012634277344,
          29.0879768288535
    ],
    [
          106.12518310546875,
          29.147963524990146
        ],
         [
          106.23641967773436,
          29.23068767152792
        ],
         [
          106.21393203735352,
          29.007239599465834
        ],
          [
          106.42679214477539,
          28.817303927633976
        ],
  ],
  video: [
        [
          106.43674850463867,
          28.807376854704703
        ],
        [
          106.42679214477539,
          28.822267109307035
        ]
  ],
  rain: [
    [
          106.18337631225586,
          29.04746604321728
    ],
    [
          106.41529083251952,
          28.824523022775733
    ],
    [
          106.10956192016602,
          29.061421555729968
    ],
    [
          106.12604141235352,
          29.11662484011938

    ],
    [
          106.29529953002928,
          29.100276951798868
    ]
  ]
};

export default {
  name: "mapStatisc",
  methods: {
    locateTarget() {
        const source = targetLayer.getSource();
        const feature = source.getFeatures()[0];
        const polygon = feature.getGeometry();
        view.fit(polygon, {padding: [170, 50, 30, 150]});
    },
    renderIconLayer(source) {
      return new VectorLayer({
        source
      });
    },
    renderIconSource(features) {
      return new VectorSource({
          features
      });
    },
    genRainFeature(coordinates) {
      return iconUtil.rainIconFeature(coordinates);
    },
    genWaterFeature(coordinates) {
      return iconUtil.waterIconFeature(coordinates);
    },
    genVideoFeature(coordinates) {
      return iconUtil.videoIconFeature(coordinates);
    },
    genFeatures(options) {
      const {rain, water, video} = options;
      const features = [];
      rain.forEach(coords => {
          features.push(this.genRainFeature(coords));
      });
      water.forEach(coords => {
          features.push(this.genWaterFeature(coords));
      });
      video.forEach(coords => {
          features.push(this.genVideoFeature(coords));
      });
      return features;
    }
  },
  mounted() {
    view = new View({
      center: [0, 0],
      zoom: 7,
      projection: 'EPSG:4326'
    });
    map = new Map({
      target: 'map-statistic__map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view,
    });
    map.addLayer(targetLayer);
    map.addLayer(this.renderIconLayer(this.renderIconSource(this.genFeatures(coordinatesOptions))));
    this.locateTarget();
  }
}
</script>

<style>
.map-statistic {
  height: 100%;
  position: relative;
}
.map-statistis__map {
  height: 100%;
}
.map-statistic__board {
  padding: 1em;
  position: absolute;
  top: 5em;
  left: 1em;
  width: 20em;
  background-color: rgba(255, 255, 255, 0.7);
  text-align:center;

}
</style>