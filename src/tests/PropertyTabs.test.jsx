import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import PropertyTabs from '../components/PropertyTabs/PropertyTabs';

// Mock Data 
const mockProperty = {
    id: '1',
    description: 'A beautiful family home with a large garden.',
    location: 'London',
    type: 'Semi-Detached',
    bedrooms: 4,
    tenure: 'Freehold',
    added: { month: 'October', day: 12, year: 2024 },
    picture: 'floorplan.jpg'
};

describe('PropertyTabs Component', () => {

    test('1. Renders the Description text', () => {
        render(<PropertyTabs property={mockProperty} />);
        
        // Check if the main description is visible immediately
        expect(screen.getByText('A beautiful family home with a large garden.')).toBeInTheDocument();
    });

    test('2. Renders the Key Details (Type, Tenure, Bedrooms)', () => {
        render(<PropertyTabs property={mockProperty} />);

        // Check if the details grid is showing the correct data
        expect(screen.getByText('Semi-Detached')).toBeInTheDocument();
        expect(screen.getByText('Freehold')).toBeInTheDocument(); 
        expect(screen.getByText('4')).toBeInTheDocument(); 
    });

    test('3. Switches to Floor Plan tab and shows image', () => {
        render(<PropertyTabs property={mockProperty} />);

        // Click the "Floor Plan" tab
        const floorPlanTab = screen.getByText('Floor Plan');
        fireEvent.click(floorPlanTab);

        // Check if the image appears using its alt text
        const image = screen.getByAltText('Semi-Detached Floor Plan');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'floorplan.jpg');
    });

    test('4. Switches to Map tab and shows iframe', () => {
        render(<PropertyTabs property={mockProperty} />);

        // Click the "Map" tab
        const mapTab = screen.getByText('Map');
        fireEvent.click(mapTab);

        // Check if the Google Maps iframe appears
        const mapFrame = screen.getByTitle('Property Location');
        expect(mapFrame).toBeInTheDocument();
    });

    test('5. Can navigate back to Description tab', () => {
        render(<PropertyTabs property={mockProperty} />);

        // Go to Map first
        fireEvent.click(screen.getByText('Map'));

        // Confirm description is gone
        expect(screen.queryByText('A beautiful family home with a large garden.')).not.toBeInTheDocument();

        // Click Description again
        fireEvent.click(screen.getByText('Description'));

        // Confirm description is back
        expect(screen.getByText('A beautiful family home with a large garden.')).toBeInTheDocument();
    });

});