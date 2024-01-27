import {Story} from "@storybook/react";
import {Them} from "app/providers/ThemProvider";
import React from "react";

export const ThemDecorator = (them: Them) => (StoryComponent:  Story) => {
    return (
        <div className={`app ${them}`}>
            <StoryComponent/>
        </div>
    )
};
