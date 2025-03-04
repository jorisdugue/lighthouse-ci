/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

module.exports = {
  // Disable prettier because it is not functional at time T following the update of prettier 3.X...
  prettierPath: null,
  preset: 'ts-jest/presets/js-with-ts-esm',
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        // Disable typechecking.
        diagnostics: false,
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/@storybook/.*'],
  // testEnvironment: 'node',
  /**
   * Note of JEST repo :
   * As of Jest 27, jest-circus is the default test runner,
   * so you do not have to install it to use it.
   */
  // testRunner: require.resolve('jest-circus/runner'),
  globalSetup: require.resolve('./packages/server/test/storybook-setup.js'),
  globalTeardown: require.resolve('./packages/server/test/storybook-teardown.js'),
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg)$': '<rootDir>/packages/server/test/__mocks__/file-mock.js',
  },
};
