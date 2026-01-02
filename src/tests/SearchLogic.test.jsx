import { describe, test, expect } from 'vitest';

// Mock Data
const mockProperties = [
    { id: '1', price: 100000, type: 'Flat', bedrooms: 1 },
    { id: '2', price: 500000, type: 'House', bedrooms: 3 },
    { id: '3', price: 900000, type: 'House', bedrooms: 5 }
];

describe('Search Logic', () => {

    // Verify exact string matching for property categories
    test('1. Filter by Property Type', () => {
        const result = mockProperties.filter(p => p.type === 'House');
        expect(result).toHaveLength(2); // Should retrieve both 'House' entries
        expect(result[0].id).toBe('2');
    });

    // Verify numeric logic (less than or equal) for budgets
    test('2. Filter by Max Price', () => {
        const maxPrice = 400000;
        const result = mockProperties.filter(p => p.price <= maxPrice);
        expect(result).toHaveLength(1); // Only the flat is within budget
        expect(result[0].id).toBe('1');
    });

    // Verify numeric logic (greater than or equal) for size requirements
    test('3. Filter by Bedroom Range', () => {
        const minBeds = 2;
        const result = mockProperties.filter(p => p.bedrooms >= minBeds);
        expect(result).toHaveLength(2); // Should exclude the 1-bed flat
    });
});