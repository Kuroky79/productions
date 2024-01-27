// preview.ts
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import type {Preview} from "@storybook/react";

import {Them} from "../../src/app/providers/ThemProvider";
import {ThemDecorator} from "../../src/shared/config/storybook/ThemDecorator/ThemDecorator";
import SidebarDecorator from "../../src/shared/config/storybook/SidebarDecorator/Sidebardecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

// // Add your decorator to the global decorators array
// addDecorator(StyleDecorator);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
      StyleDecorator,
      ThemDecorator(Them.LIGHT),
      SidebarDecorator,
      RouterDecorator,
  ],
};

export default preview;
