module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    semi: [1, 'always'],
    'no-param-reassign': ['error', { props: false }],
    'max-len': ['error', { code: 120 }],
  },
};
