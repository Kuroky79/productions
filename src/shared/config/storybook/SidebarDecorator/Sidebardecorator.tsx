// .storybook/yourContextDecorator.js (create this file if it doesn't exist)
import React from 'react';
import ThemProvider from "app/providers/ThemProvider/ui/ThemProvider";


export const SidebarDecorator = (Story) => (
    <ThemProvider>
        <Story />
    </ThemProvider>
);

export default SidebarDecorator;
