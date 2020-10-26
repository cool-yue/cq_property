export default {
    title: {
        text: '资产收支图'
    },
    subtitle: {
        text: ''
    },
    yAxis: {
        title: {
            text: '金额(元)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: '资产支出',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: '资产收入',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 200
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
}