class LineChart {
    constructor(ele, option1 = {}) {
        this.container = ele;
        this.createCanvas();
        this.ctx = this.canvas.getContext('2d')
        const totalDuration = 1;
        const delayBetweenPoints = totalDuration;
        const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
        this.default = {
            option: {
                type: 'line',
                label: [],
                data: {},
                options: {
                    tootltips:{
                        enable:false
                    },
                    hover:{
                        mode:null
                    },
                    events:[],
                    animation: {
                        x: {
                            type: 'number',
                            easing: 'linear',
                            duration: delayBetweenPoints,
                            from: NaN,
                            delay(ctx) {
                                if (ctx.type !== 'data' || ctx.xStarted) {
                                    return 0;
                                }
                                ctx.xStarted = true;
                                return ctx.index * delayBetweenPoints;
                            }
                        },
                        y: {
                            type: 'number',
                            easing: 'linear',
                            duration: delayBetweenPoints,
                            from: previousY,
                            delay(ctx) {
                                if (ctx.type !== 'data' || ctx.yStarted) {
                                    return 0;
                                }
                                ctx.yStarted = true;
                                return ctx.index * delayBetweenPoints;
                            }
                        }
                    },
                    scales: {
                        x: {
                            type: 'linear'
                        }
                    },
                    interaction: {
                        intersect: false
                    },
                    plugins: {
                        legend: false
                    },
                    responsive: true,
                    aspectRatio: 4,
                },
                ...option1
            }
        };
        this.chart = new Chart(this.ctx, this.default["option"]);
    }

    createCanvas() {
        let e = document.createElement("canvas");
        this.canvas = e;
        this.container.append(e);
    }

    static createLine(...b) {
        let obj = [];
        for (let i = 0; i < b.length; i++) {
            let a = {
                label: [b[i].label],
                data: b[i].data,
                backgroundColor: [
                    b[i].backgroundColor
                ],
                borderColor: [
                    b[i].borderColor
                ],
                borderWidth: b[i].borderWidth
            };
            obj.push(a);
        }
        return obj;
    }

    update(x, ...y) {
        this.chart.data.labels = x;
        for (let i in y) {
            this.chart.data.datasets[i].data[i] = y[i];
        }
        this.chart.update();
    }

    add(x, ...y) {
        if (x != "") {
            this.chart.data.labels.push(x);
        }
        for (let i in this.chart.data.datasets) {
            this.chart.data.datasets[i].data.push(y[i]);
        }
        this.chart.update();
    }

    remove(x = 1, haslabel) {
        if (haslabel) {
            this.chart.data.labels = this.chart.data.labels.slice(x);
        }
        for (let i in this.chart.data.datasets) {
            this.chart.data.datasets[i].data = this.chart.data.datasets[i].data.slice(x);
        }
        this.chart.update();
    }
}