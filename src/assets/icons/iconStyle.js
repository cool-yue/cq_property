import { Fill, Stroke, Style, Text, Icon, Circle as CircleStyle } from "ol/style";
/**
 *  index 0 正常  1异常
 */

export default {
    rainStyle: [
        new Style({
            image: new Icon({
              src: "/source/雨量站.svg",
            })
        }),
        new Style({
            image: new Icon({
              src: "/source/雨量站异常.svg",
            })
        }),
    ],
    waterStyle: [
        new Style({
            image: new Icon({
              src: "/source/水位站.svg",
            })
        }),
        new Style({
            image: new Icon({
              src: "/source/水位站异常.svg",
            })
        })
    ],
    videoStyle: [
        new Style({
            image: new Icon({
              src: "/source/摄像头.svg",
            })
        }),
        new Style({
            image: new Icon({
              src: "/source/摄像头异常.svg",
            })
        })
    ],
    hightLightStyle: [
      new Style({
      image: new  CircleStyle({
        radius: 30,
        stroke: new Stroke({
          color: 'rgb(255, 0, 0)',
          width: 2,
        }),
      }),
    }),
    new Style({
      image: new  CircleStyle({
        radius: 30,
        stroke: new Stroke({
          color: 'rgba(255, 0, 0)',
          width: 2,
        }),
      }),
    })
  ]
};