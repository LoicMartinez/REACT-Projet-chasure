import { createContext } from "react";

const userContext = createContext({
    authenticated: false,
    setAuthenticated: (auth) => {}
});

export default userContext;
