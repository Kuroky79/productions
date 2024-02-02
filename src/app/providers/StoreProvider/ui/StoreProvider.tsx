import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";

interface StoreProviderProps {
    children?: ReactNode;
}


const store = createReduxStore()
export const StoreProvider = (props: StoreProviderProps) => {
    const {children} = props;
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;