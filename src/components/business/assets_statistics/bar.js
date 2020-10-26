export default {
    chart: {
        type: 'column'
    },
    title: {
        text: '资产入库'
    },
    subtitle: {
        text: '数据截止 2017-03'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45  // 设置轴标签旋转角度
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '件数'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '入库件数: <b>{point.y:.1f} 件</b>'
    },
    series: [{
        name: '总人口',
        data: [
            ['住建局', 24],
            ['水利局', 23],
            ['部门1', 51],
            ['部门2', 78],
            ['部门3', 16],
            ['部门4', 20],
            ['部门5', 16],
            ['部门6', 51],
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // :.1f 为保留 1 位小数
            y: 10
        }
    }]
};
