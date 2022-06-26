import PropTypes from "prop-types";

class User {
    constructor(user) {
        this.isConnected = Boolean(user);
        this.level = user?.level;
        this.surname = user?.surname;
        this.firstname = user?.firstname;
        this.email = user?.email;
    }
}

const userShape = PropTypes.instanceOf(User);

export default User;

export {userShape};
