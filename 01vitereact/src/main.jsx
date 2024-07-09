import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const username=" vs or  code "
const reactElement=React.createElement('a',{href:"https://google.com",target:"_blank"},'click me to vist', username)

ReactDOM.createRoot(document.getElementById('root')).render(
reactElement

  
)
