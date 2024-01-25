import {render, screen} from "@testing-library/react";
import Button, {ThemButton} from "shared/ui/Button/Button";

describe('Button', () => {
    test('Test Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test Button add them', () => {
        render(<Button them={ThemButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});