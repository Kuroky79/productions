import React from 'react';
import { render, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import ThemProvider from "app/providers/ThemProvider/ui/ThemProvider";

describe('Sidebar', () => {
    test('Test Sidebar', () => {
        render(
            <ThemProvider>
                <Sidebar />
            </ThemProvider>
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});