export default {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿宽度
      viewportHeight: 812, // 设计稿高度
      unitPrecision: 5, // 转换后的小数位数
      viewportUnit: 'vw', // 转换后的单位
      selectorBlackList: [], // 需要忽略的选择器
      minPixelValue: 1, // 最小转换像素值
      mediaQuery: false, // 是否在媒体查询中转换
    },
  },
}
