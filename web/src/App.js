import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/questions" component={QuestionsPage} />
        <Route exact path="/question/:id" component={SingleQuestionPage} />
        <Route exact path="/list" component={OwnerQuestionsPage} />
        <Route exact path="/answer/:id" component={AnswerFormPage} />
        <Route exact path="/new" component={QuestionFormPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
