import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Fill, Stroke, Style, Text, Icon } from "ol/style";
let i = 0;
const iconStyleList = {
    rainStyle: new Style({
            image: new Icon({
              src: require("@icons/雨量站.svg"),
            })
    }),
    waterStyle: new Style({
            image: new Icon({
              src: require("@icons/水位站.svg"),
            })
    }),
    videoStyle: new Style({
            image: new Icon({
              src: require("@icons/摄像头.svg"),
            })
    })
};

function typeToKey(type) {
    if (type.indexOf("视频站") >= 0) {
        return "videoStyle";
    } else if (type.indexOf("水位站") >= 0) {
        return "waterStyle";
    } else if (type.indexOf("雨量站") >= 0) {
        return "rainStyle";
    }
}

function IconFeatureGen(type, key = typeToKey(type)) {
    return function (coordinates) {
        if (
            !Array.isArray(coordinates)
            || !key
        ) {
            return;
        }
        const iconFeature = new Feature({
            geometry: new Point(coordinates),
            name: type + "-" +(i += 1)
        });
        iconFeature.setStyle(iconStyleList[key]);
        return iconFeature;
    }
}


export default {
    rainIconFeature: IconFeatureGen("雨量站"),
    waterIconFeature: IconFeatureGen("水位站"),
    videoIconFeature: IconFeatureGen("视频站")
};