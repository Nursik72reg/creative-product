import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('counter test', () => {
    test('counter render value', () => {
        componentRender(<Counter />, {
            initialState: { count: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { count: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { count: { value: 10 } },
        });
        const decrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
