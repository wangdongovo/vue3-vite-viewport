export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['bug', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'merge'],
    ],
    'subject-empty': [2, 'never', '提交信息不能为空'], // 自定义空主题提示信息
    'type-empty': [2, 'never', '类型不能为空'], // 自定义空类型提示信息
    'header-max-length': [2, 'always', '标题长度不能超过72个字符'], // 自定义标题长度提示信息
  },
}
