import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import MyContext from '../contexts/UserContext'

export default function PrivateRoute({component, ...props}) {
    const Component = component
    return (
        <Route
            {...props}
            render={componentProps => (
                <UserContext.Consumer>

                    {userContext =>
                        !!userContext.user.id
                            ? <MyContext.Consumer>{()=><MyContext.Consumer>{(map) => <Component {...componentProps}
                                                                                              location={componentProps.location} map={map}/>}</MapContext.Consumer>}</MyContext.Consumer>
                            : (
                                <Redirect
                                    to={{
                                        pathname: '/',
                                        state: {from: componentProps.location},
                                    }}
                                />
                            )
                    }

                </UserContext.Consumer>
            )}
        />
    )
}
