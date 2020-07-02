module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  testRegex: '/__test__/.*(test)\\.js?$'
};
