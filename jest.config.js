/** @type {import('jest').Config} */

const config = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/index.ts',
        '!src/main.tsx',
        '!src/App.tsx',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '^.+\\.svg\\?react$': '<rootDir>/jest/__mocks__/svgMock.tsx',
        '^.+\\.svg$': 'jest-svg-transformer',
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '^.+\\.(jpg|jpeg|png|gif|webp|ico)$': '<rootDir>/jest/fileMock.js',
        '^@app/(.*)$': '<rootDir>/src/app/$1',
        '^@components/(.*)$': '<rootDir>/src/app/components/$1',
        '^@pages/(.*)$': '<rootDir>/src/app/pages/$1',
        '^@entities/(.*)$': '<rootDir>/src/app/entities/$1',
        '^@widgets/(.*)$': '<rootDir>/src/app/widgets/$1',
        '^@styles/(.*)$': '<rootDir>/src/styles/$1',
        '^@store/(.*)$': '<rootDir>/src/store/$1',
        '^@common/(.*)$': '<rootDir>/src/common/$1',
        '^@assets/(.*)$': '<rootDir>/src/common/assets/$1',
        '^@ui/(.*)$': '<rootDir>/src/common/ui/$1',
        '^@classNames/(.*)$': '<rootDir>/src/common/lib/classNames/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1'
    },
    transformIgnorePatterns: [
        'node_modules/(?!@testing-library/user-event/dist)'
    ],
    globals: {
        'import.meta': {
            env: {
                MODE: 'test'
            }
        },
        'process.env': {
            NODE_ENV: 'test'
        }
    },
};

export default config;