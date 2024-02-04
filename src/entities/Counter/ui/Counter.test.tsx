import React from 'react';
import {screen} from '@testing-library/react';
import ThemProvider from "app/providers/ThemProvider/ui/ThemProvider";
import {componentRender} from "shared/config/tests/renderWithRouter/componentRender";
import {Counter} from "./Counter";

describe('Counter', () => {
    test('Test Counter', () => {
        componentRender(<ThemProvider><Counter/></ThemProvider>, {
            initialState: {counter: {value: 10}},
        });
        expect(screen.getByTestId('value-title' as any)).toHaveTextContent('10');
    });
});