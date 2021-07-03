/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../../Container/Login/login'
export default function AppliedRoute ({ component: C, appProps, ...rest }) {
  const k = 1
  return (
    <Route
      {...rest}
      render={(props) =>
        // sessionStorage.getItem('key')
        //   ? (
        //   <C {...props} {...appProps} />
        //     )
        //   : (
        //   <Login {...props} {...appProps}></Login>
        //     )
        k === 1
          ? (
          <C {...props} {...appProps} />
            )
          : (
          <Login {...props} {...appProps}></Login>
            )
      }
    />
  )
}
