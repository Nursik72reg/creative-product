import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button-ui', () => {
    test('button render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button with class', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
