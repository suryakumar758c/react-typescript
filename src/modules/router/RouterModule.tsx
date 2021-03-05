import React,{ useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Routes from './Routes'

const RouterModule = (): JSX.Element => {

    return <>
        <Router>
            <Switch>
                <Routes/>
            </Switch>
        </Router>
    </>
}

export default RouterModule