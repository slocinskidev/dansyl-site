import type { Config } from 'jest';

const config: Config = {
  globals: {
    __PATH_PREFIX__: '',
  },
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>jest/__mocks__/file-mock.js`,
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-plugin-utils/(.*)$': [`gatsby-plugin-utils/dist/$1`, `gatsby-plugin-utils/$1`], // Workaround for https://github.com/facebook/jest/issues/9771
  },
  setupFiles: ['<rootDir>/jest/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/__tests__/**?(*.)+(test).[jt]s?(x)'],
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  testEnvironmentOptions: {
    url: 'http://localhost:8000',
  },
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest/jest-preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  verbose: true,
};

export default config;
