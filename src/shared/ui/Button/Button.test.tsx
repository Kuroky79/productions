import {render, screen} from "@testing-library/react";
import Button, {ButtonThem} from "shared/ui/Button/Button";
import React from "react";
describe('Button', () => {
    test('Test Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test Button clear them', () => {
        render(<Button them={ButtonThem.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});