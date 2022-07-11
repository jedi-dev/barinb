const { defaults } = require('jest-config');
module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: 'coverage',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testRunner: 'jest-jasmine2',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '@app/ui/theme/layout': ['<rootDir>/src/app/ui/theme/layout/index.ts'],
    '@app/ui/icons': ['<rootDir>/src/app/ui/icons/index.ts'],
    '@app/core/common': ['<rootDir>/src/app/core/common/index.ts'],
  },
};
