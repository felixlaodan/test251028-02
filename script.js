// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    initCharts();
    updateTime();
    setInterval(updateTime, 1000); // 每秒更新时间
});

// 更新时间显示（模拟实时数据）
function updateTime() {
    const now = new Date();
    const timeString = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('updateTime').textContent = timeString;
}

// 初始化所有图表
function initCharts() {
    initTemperatureTrendChart();
    initGreenhouseGasChart();
    initCityAQIChart();
    initRenewableEnergyChart();
    initCarbonEmissionsChart();
}

// 1. 全球气温变化趋势图
function initTemperatureTrendChart() {
    const chartDom = document.getElementById('temperatureTrendChart');
    const myChart = echarts.init(chartDom);
    
    // 生成1880-2025年的数据
    const years = [];
    const temperatureAnomaly = [];
    
    for (let year = 1880; year <= 2025; year++) {
        years.push(year.toString());
        
        // 模拟气温变化趋势：早期变化小，近期变化大
        if (year < 1950) {
            temperatureAnomaly.push(-0.3 + Math.random() * 0.2);
        } else if (year < 1980) {
            temperatureAnomaly.push(-0.1 + Math.random() * 0.3);
        } else if (year < 2000) {
            temperatureAnomaly.push(0.2 + Math.random() * 0.4);
        } else {
            temperatureAnomaly.push(0.6 + (year - 2000) * 0.04 + Math.random() * 0.2);
        }
    }
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                return `${params[0].axisValue}年<br/>温度异常: ${params[0].value.toFixed(2)}°C`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: years,
            axisLabel: {
                interval: 19, // 每20年显示一次
                rotate: 0
            }
        },
        yAxis: {
            type: 'value',
            name: '温度异常 (°C)',
            axisLabel: {
                formatter: '{value}°C'
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 80,
                end: 100
            },
            {
                start: 80,
                end: 100
            }
        ],
        series: [
            {
                name: '温度异常',
                type: 'line',
                smooth: true,
                data: temperatureAnomaly,
                itemStyle: { 
                    color: '#ef4444' 
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(239, 68, 68, 0.4)' },
                        { offset: 1, color: 'rgba(239, 68, 68, 0.05)' }
                    ])
                },
                lineStyle: {
                    width: 2
                }
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 2. 温室气体排放构成
function initGreenhouseGasChart() {
    const chartDom = document.getElementById('greenhouseGasChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}% ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            textStyle: {
                fontSize: 12
            }
        },
        series: [
            {
                name: '排放占比',
                type: 'pie',
                radius: ['45%', '75%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 8,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 14,
                        fontWeight: 'bold'
                    }
                },
                data: [
                    { value: 76, name: 'CO₂二氧化碳', itemStyle: { color: '#ef4444' } },
                    { value: 16, name: 'CH₄甲烷', itemStyle: { color: '#f59e0b' } },
                    { value: 6, name: 'N₂O氧化亚氮', itemStyle: { color: '#3b82f6' } },
                    { value: 2, name: '氟化气体', itemStyle: { color: '#8b5cf6' } }
                ]
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 3. 主要城市空气质量指数
function initCityAQIChart() {
    const chartDom = document.getElementById('cityAQIChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['斯德哥尔摩', '温哥华', '东京', '巴黎', '洛杉矶', '圣保罗', '北京', '新德里'],
            axisLabel: {
                interval: 0,
                rotate: 30,
                fontSize: 11
            }
        },
        yAxis: {
            type: 'value',
            name: 'AQI指数',
            max: 200
        },
        series: [
            {
                name: 'AQI',
                type: 'bar',
                data: [
                    { value: 28, itemStyle: { color: '#10b981' } },
                    { value: 35, itemStyle: { color: '#10b981' } },
                    { value: 58, itemStyle: { color: '#fbbf24' } },
                    { value: 62, itemStyle: { color: '#fbbf24' } },
                    { value: 78, itemStyle: { color: '#f59e0b' } },
                    { value: 85, itemStyle: { color: '#f59e0b' } },
                    { value: 95, itemStyle: { color: '#f97316' } },
                    { value: 168, itemStyle: { color: '#ef4444' } }
                ],
                barWidth: '60%',
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 11
                }
            }
        ],
        visualMap: {
            show: false,
            min: 0,
            max: 200,
            inRange: {
                color: ['#10b981', '#fbbf24', '#f59e0b', '#ef4444']
            }
        }
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 4. 可再生能源发电量趋势
function initRenewableEnergyChart() {
    const chartDom = document.getElementById('renewableEnergyChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['太阳能', '风能', '水能', '地热能']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
            type: 'value',
            name: '发电量 (TWh)',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                name: '太阳能',
                type: 'line',
                smooth: true,
                data: [256, 340, 445, 585, 720, 855, 1020, 1250, 1485, 1750, 2100],
                itemStyle: { color: '#fbbf24' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(251, 191, 36, 0.3)' },
                        { offset: 1, color: 'rgba(251, 191, 36, 0.05)' }
                    ])
                }
            },
            {
                name: '风能',
                type: 'line',
                smooth: true,
                data: [432, 497, 540, 621, 715, 836, 985, 1145, 1320, 1510, 1720],
                itemStyle: { color: '#3b82f6' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
                        { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
                    ])
                }
            },
            {
                name: '水能',
                type: 'line',
                smooth: true,
                data: [3970, 4020, 4080, 4150, 4200, 4265, 4320, 4380, 4455, 4520, 4600],
                itemStyle: { color: '#06b6d4' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(6, 182, 212, 0.3)' },
                        { offset: 1, color: 'rgba(6, 182, 212, 0.05)' }
                    ])
                }
            },
            {
                name: '地热能',
                type: 'line',
                smooth: true,
                data: [76, 81, 87, 92, 98, 104, 112, 121, 130, 142, 155],
                itemStyle: { color: '#f97316' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(249, 115, 22, 0.3)' },
                        { offset: 1, color: 'rgba(249, 115, 22, 0.05)' }
                    ])
                }
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 5. 全球主要国家碳排放量对比
function initCarbonEmissionsChart() {
    const chartDom = document.getElementById('carbonEmissionsChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                let result = params[0].axisValue + '<br/>';
                params.forEach(item => {
                    result += `${item.marker}${item.seriesName}: ${item.value} Mt<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: ['2020', '2023', '2025']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: '碳排放量 (Mt)',
            axisLabel: {
                formatter: '{value}'
            }
        },
        yAxis: {
            type: 'category',
            data: ['加拿大', '韩国', '德国', '日本', '俄罗斯', '印度', '美国', '中国']
        },
        series: [
            {
                name: '2020',
                type: 'bar',
                data: [565, 600, 702, 1149, 1711, 2456, 4713, 9899],
                itemStyle: { 
                    color: '#94a3b8',
                    borderRadius: [0, 4, 4, 0]
                }
            },
            {
                name: '2023',
                type: 'bar',
                data: [582, 610, 690, 1125, 1738, 2630, 4920, 10080],
                itemStyle: { 
                    color: '#f59e0b',
                    borderRadius: [0, 4, 4, 0]
                }
            },
            {
                name: '2025',
                type: 'bar',
                data: [573, 616, 675, 1107, 1754, 2709, 5007, 10175],
                itemStyle: { 
                    color: '#ef4444',
                    borderRadius: [0, 4, 4, 0]
                }
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

