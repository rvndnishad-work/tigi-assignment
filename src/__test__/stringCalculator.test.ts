import { add } from '../utility/stringCalculator';
describe('String Calculator', () => {
    // Failing tests first
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
    });

    test('should throw an error for multiple negative numbers', () => {
        expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
    });
});
