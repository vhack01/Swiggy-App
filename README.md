# Namaste React

## Dependencies

    - parcel
    - react
    - react-dom
    - react-router-dom
    - fetch
    - tailwindcss
    - @reduxjs/toolkit
    - react-toastify

# Concepts Applied

    - Custom Hook
    - Lazy Loading
    - Shimmer UI
    - Online / Offline
    - React Context
    - Redux Toolkit

# Pages

    - Home
    - About
    - Contact
    - Cart
    - Grocery

# Redux Toolkit

    1. npm @reduxjs/toolkit and react-redux
    2. create redux store
    3. connect our store to our app
    4. create Slice(cartSlice)
    5. dispatch(action) -> write data
    6. selector -> read data

# Testing

## Types of testing

    - Unit Testing
    - Integration Testing
    - End 2 End Testing(E2E)

## Steps to setup Testing

    1. Install React Testing Library
    2. Install Jest
    3. Install Babel
    4. Configire Babel (inside babel.config.js)
    5. Disable Babel transpilation in Parcel, override the default Parcel config for JavaScript
    6. Configure Jest (npx jest --init)
    7. Install jsdom (npm i -D jest-envirnoment-jsdom)
    8. Install (@babel/preset-react) -> Enable JSX rendering in Testing
    9. Include @babel/preset-react inside babel.config.js
    9. Install (npm i -D @testing-library/jest-dom)
    10.
