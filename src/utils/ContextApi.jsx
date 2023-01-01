import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch,setImageSearch]=useState(false);
    const [videoSearch,setVideoSearch]=useState(false);
    return (
        <Context.Provider  value={{
            imageSearch,setImageSearch,videoSearch,setVideoSearch
        }}>
            {props.children}
        </Context.Provider>
    );
};
