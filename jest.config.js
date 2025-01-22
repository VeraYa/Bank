/** @type {import('jest').Config} */

const config = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/App.tsx',
        '!src/main.tsx',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '^@common/(.*)$': '<rootDir>/src/common/$1',
        '^@classNames/(.*)$': '<rootDir>/src/common/lib/classNames/$1',
        // добавьте другие алиасы по аналогии, если они используются в тестах
    },
};

export default config;