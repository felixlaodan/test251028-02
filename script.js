// 等待页面加载完成
window.addEventListener('DOMContentLoaded', function() {
    initCharts();
});

function initCharts() {
    // 1. 季度收入趋势图
    initQuarterlyRevenueChart();
    
    // 2. 市场份额分布
    initMarketShareChart();
    
    // 3. 产品销售对比图
    initProductSalesChart();
    
    // 4. 区域收入分布
    initRegionalRevenueChart();
    
    // 5. 年度财务表现（折线图）
    initAnnualPerformanceChart();
}

// 1. 季度收入趋势图
function initQuarterlyRevenueChart() {
    const chartDom = document.getElementById('quarterlyRevenueChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['收入']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025']
        },
        yAxis: {
            type: 'value',
            name: '收入 (十亿美元)',
            axisLabel: {
                formatter: '{value}B'
            }
        },
        series: [
            {
                name: '收入',
                type: 'bar',
                data: [620, 720, 850, 810],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#667eea' },
                        { offset: 1, color: '#764ba2' }
                    ])
                },
                barWidth: '50%'
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 2. 市场份额分布
function initMarketShareChart() {
    const chartDom = document.getElementById('marketShareChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}% ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: '10%',
            top: 'center'
        },
        series: [
            {
                name: '市场份额',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    formatter: '{b}: {c}%'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
                data: [
                    { value: 28.5, name: 'QuantumTech Corp', itemStyle: { color: '#667eea' } },
                    { value: 24.8, name: 'NeuralNet Systems', itemStyle: { color: '#764ba2' } },
                    { value: 18.7, name: 'CyberDynamics Inc', itemStyle: { color: '#f093fb' } },
                    { value: 16.9, name: 'FusionAI Labs', itemStyle: { color: '#4facfe' } },
                    { value: 11.1, name: '其他', itemStyle: { color: '#43e97b' } }
                ]
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 3. 产品销售对比图
function initProductSalesChart() {
    const chartDom = document.getElementById('productSalesChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Q1销量', 'Q2销量', 'Q3销量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['AI芯片\nX9000', '量子计算机\nQ-Pro', '神经接口\nNeuroLink', '全息投影仪\nHoloPro', '智能机器人\nRoboAssist', '云存储\nCloudMax']
        },
        yAxis: {
            type: 'value',
            name: '销量 (百万)',
            axisLabel: {
                formatter: '{value}M'
            }
        },
        series: [
            {
                name: 'Q1销量',
                type: 'bar',
                data: [1.2, 0.85, 3.5, 0.68, 2.1, 15.2],
                itemStyle: { color: '#667eea' }
            },
            {
                name: 'Q2销量',
                type: 'bar',
                data: [1.8, 0.92, 4.2, 0.75, 2.6, 18.7],
                itemStyle: { color: '#764ba2' }
            },
            {
                name: 'Q3销量',
                type: 'bar',
                data: [2.4, 1.1, 5.8, 0.89, 3.3, 22.4],
                itemStyle: { color: '#f093fb' }
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 4. 区域收入分布
function initRegionalRevenueChart() {
    const chartDom = document.getElementById('regionalRevenueChart');
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
            type: 'value',
            name: '收入 (十亿美元)',
            axisLabel: {
                formatter: '${value}B'
            }
        },
        yAxis: {
            type: 'category',
            data: ['北美', '欧洲', '亚太', '拉丁美洲', '中东非洲']
        },
        series: [
            {
                name: '区域收入',
                type: 'bar',
                data: [980, 720, 1100, 280, 320],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#667eea' },
                        { offset: 1, color: '#764ba2' }
                    ])
                },
                barWidth: '50%',
                label: {
                    show: true,
                    position: 'right',
                    formatter: '${c}B'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// 5. 年度财务表现（折线图）
function initAnnualPerformanceChart() {
    const chartDom = document.getElementById('annualPerformanceChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['收入', '利润', '研发投入']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2020', '2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
            type: 'value',
            name: '金额 (十亿美元)',
            axisLabel: {
                formatter: '${value}B'
            }
        },
        series: [
            {
                name: '收入',
                type: 'line',
                smooth: true,
                data: [1200, 1450, 1680, 2100, 2480, 2800],
                itemStyle: { color: '#667eea' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(102, 126, 234, 0.3)' },
                        { offset: 1, color: 'rgba(102, 126, 234, 0.05)' }
                    ])
                }
            },
            {
                name: '利润',
                type: 'line',
                smooth: true,
                data: [280, 350, 420, 520, 640, 780],
                itemStyle: { color: '#10b981' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(16, 185, 129, 0.3)' },
                        { offset: 1, color: 'rgba(16, 185, 129, 0.05)' }
                    ])
                }
            },
            {
                name: '研发投入',
                type: 'line',
                smooth: true,
                data: [180, 220, 280, 350, 420, 510],
                itemStyle: { color: '#f59e0b' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(245, 158, 11, 0.3)' },
                        { offset: 1, color: 'rgba(245, 158, 11, 0.05)' }
                    ])
                }
            }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

