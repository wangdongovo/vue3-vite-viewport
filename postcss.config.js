import autoprefixer from 'autoprefixer'
import postcssMobileForever from 'postcss-mobile-forever'
import postcssPresetEnv from 'postcss-preset-env'

// 修改配置后重启服务生效
export default {
  plugins: [
    // 自动添加浏览器前缀
    autoprefixer(),
    // 移动端适配插件
    postcssMobileForever({
      // UI 设计稿宽度
      viewportWidth: 375,
      // 页面最外层选择器
      appSelector: '#app',
      // 是否对「页面最外层选择器」对应的元素进行描边
      border: true,
      // 转换单位后保留的小数点位数
      unitPrecision: 3,
      // 转换后的单位
      mobileUnit: 'vw',
      // 需要转换的属性
      propList: ['*'],
      // 忽略的选择器
      selectorBlackList: ['.ignore', '.keep-px'],
      // 忽略的属性
      propertyBlackList: {
        '.m-icon': 'font',
      },
      // 忽略的属性值
      valueBlackList: ['1px'],
      // 忽略的目录或文件
      exclude: [],
      // 包含块是根元素的选择器列表
      rootContainingBlockSelectorList: ['.m-tabbar', '.m-popup'],
      // 矫正 fixed 定位元素
      appContainingBlock: 'auto',
      // 当 appContainingBlock 设为 auto 时，需要指定该属性
      necessarySelectorWhenAuto: 'body',
    }),
    postcssPresetEnv({
      stage: 2,
      features: {
        'has-pseudo-class': true,
      },
    }),
  ],
}
