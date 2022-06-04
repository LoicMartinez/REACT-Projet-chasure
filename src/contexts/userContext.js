import {createContext} from 'react';


const UserContext = createContext({});

function injectUser(value) {
    return Component => props => (
        <UserContext.Provider value={value}>
            <Component {...props} />
        </UserContext.Provider>
    );
}

function withUser(Component) {
    return props => (
        <UserContext.Consumer>
            {user => <Component {...props} user={user}/>}
        </UserContext.Consumer>
    );
}

export default UserContext;

export {
    injectUser,
    withUser,
};