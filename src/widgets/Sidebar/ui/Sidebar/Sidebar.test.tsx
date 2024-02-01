import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import ThemProvider from "app/providers/ThemProvider/ui/ThemProvider";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation";
import {componentRender} from "shared/config/tests/renderWithRouter/componentRender";

describe('Sidebar', () => {
    test('Test Sidebar', () => {
        componentRender(
            <ThemProvider>
                <Sidebar />
            </ThemProvider>
        );
        expect(screen.getByTestId('sidebar' as any)).toBeInTheDocument();
    });

    test('Test Sidebar two variant + translation', () => {
        componentRender(
            <ThemProvider>
                <Sidebar />
            </ThemProvider>
        )
        expect(screen.getByTestId('sidebar' as any)).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRender(
            <ThemProvider>
                <Sidebar />
            </ThemProvider>
        )
        const toggleBtn = screen.getByTestId('sidebar-toggle' as any);
        expect(screen.getByTestId('sidebar' as any)).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar' as any)).toHaveClass('collapsed');

    });
});