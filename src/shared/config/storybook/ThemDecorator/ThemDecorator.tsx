import {Story} from "@storybook/react";
import {Them} from "app/providers/ThemProvider";
import React from "react";
import ThemProvider from "app/providers/ThemProvider/ui/ThemProvider";

export const ThemDecorator = (them: Them) => (StoryComponent:  Story) => {
    return (
        <ThemProvider initialThem={them}>
            <div className={`app ${them}`}>
                <StoryComponent/>
            </div>
        </ThemProvider>

    )
};
