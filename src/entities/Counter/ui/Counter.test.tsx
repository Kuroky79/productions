import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import ThemProvider from 'app/providers/ThemProvider/ui/ThemProvider';
import { componentRender } from 'shared/config/tests/renderWithRouter/componentRender';
import { Counter } from './Counter';
import { userEvent } from '@storybook/test';

describe('Counter', () => {
    test('Test Counter', () => {
        componentRender(<ThemProvider><Counter /></ThemProvider>, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title' as any)).toHaveTextContent('10');
    });

    test('Test increment', async () => {
        componentRender(<ThemProvider><Counter /></ThemProvider>, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn' as any));
        await waitFor(() => {
            expect(screen.getByTestId('value-title' as any)).toHaveTextContent('11');
        });
    });

    test('Test decrement', async () => {
        componentRender(<ThemProvider><Counter /></ThemProvider>, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn' as any));
        await waitFor(() => {
            expect(screen.getByTestId('value-title' as any)).toHaveTextContent('9');
        });
    });
});
