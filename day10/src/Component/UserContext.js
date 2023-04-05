import React from "react";

const UserContext=React.createContext("Nirmi Nagori")
// creating a  context object by creating createcontext gives us the  provider and consumer component
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext