import Metrics from "./metrics";

const size = {
    font6: Metrics.screenwidth * (6 / 365),
    font8: Metrics.screenwidth * (8 / 365),
    font10: Metrics.screenwidth * (10 / 365),
    font12: Metrics.screenwidth * (12 / 365),
    font14: Metrics.screenwidth * (14 / 365),
    font16: Metrics.screenwidth * (16 / 365),
    font18: Metrics.screenwidth * (18 / 365),
    font20: Metrics.screenwidth * (20 / 365),
    font22: Metrics.screenwidth * (22 / 365),
    font24: Metrics.screenwidth * (24 / 365),
}

const weight = {
    full: '900',
    semi: '600',
    low: '400',
    bold: 'bold',
    normal: 'normal'
}

export default { size, weight };