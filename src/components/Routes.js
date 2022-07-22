import React, { Component, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Login, Home } from '../components';

function useLocalStorage(key, initialState) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) ?? JSON.stringify(initialState));
    const updatedSetValue = useCallback(
      newValue => {
        if (JSON.parse(newValue) === initialState || typeof newValue === 'undefined') {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
        setValue(newValue ?? initialState);
      },
      [initialState, key]
    );
    return [value, updatedSetValue];
}

const AppRoutes = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('Authenticated', false);

    return (
        <div>
            {
                isLoggedIn ? (
                    <div>
                        <Routes>
                            <Route path='/home' element={ <Home setIsLoggedIn={setIsLoggedIn} /> } />
                            <Route path='*' element={ <Navigate to='/home' replace /> } />
                        </Routes>
                    </div>
                ) : (
                    <div>
                        <Routes>
                            <Route path='/login' element={ <Login setIsLoggedIn={setIsLoggedIn} /> } />
                            <Route path='*' element={ <Navigate to='/login' replace /> } />
                        </Routes>
                    </div>
                )
            }
        </div>
    )
}

export default AppRoutes;
