import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Landing } from './screens/Landing'
import { TeacherList } from './screens/TeacherList'
import { TeacherForm } from './screens/TeacherForm'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/study" component={TeacherList}/>
              <Route path="/give-classes" component={TeacherForm}/>
            </Switch> 
        </BrowserRouter>
    )
}