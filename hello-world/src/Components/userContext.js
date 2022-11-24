// create context method from react to create user context.
import React from 'react'

// step 1: create the context
const UserContext = React.createContext('Codeevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer}

// step 2; provide context value to root component that is App.js
// <UserProvider value='Robert'>
//     <ComponentC />
// </UserProvider>

// note:1] we can add default value to the create context.
// e.g.,const UserContext = React.createContext('Codeevolution'). In App.js file comment UserProvider you can see the default value.
// 2]context type property: is used to consume context value in class.