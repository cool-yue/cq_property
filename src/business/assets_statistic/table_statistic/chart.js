function radarBarOptionsGen(value, color) {
    const baseOptions =  {
        series: [value],
        chartOptions: {
            chart: {
              height: 500,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '70%',
                },
                dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      fontSize: "24px",
                      offsetY: 5,
                      show: true
                    }
                }
              },
            }
        }
    };
    if (color) {
        baseOptions.chartOptions.colors = color.slice();
    }
    return baseOptions;
}

function barOptionsGen(xAxis, series, name, formatter) {
    const base = {
        chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: xAxis,
              labels: {
                  show: false
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter,
              }
            }
        }
    };
    if (series) {
        base.series = [
            {
                name: (
                    name
                    ? name
                    : ""
                ),
                data: series
            }
        ];
    }
    return base;
}




export default {
    assetUse: radarBarOptionsGen(46),
    assetBroken: radarBarOptionsGen(14, ["#ff9900"]),
    assetFix: radarBarOptionsGen(74, ["#19be6b"]),
    assetInput: barOptionsGen(["2019-11", "2019-12", "2020-01", "2020-02", "2020-03"], [3,4,6,2,5,8,1,3,4,6,2], "资产入库", function (val) {return val + "件"}),
    assetDeprecation: barOptionsGen(["2019-11", "2019-12", "2020-01", "2020-02", "2020-03"], [3,3,5,2,7,4,6,2,5], "资产折旧总值", function (val) {return val + "万元"}),
};