import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CategoriesProvider from './contexts/Categories/context'
import ModalProvider from './contexts/Modal/context'
import RecipesProvider from './contexts/Recipes/context'
import './index.css'

ReactDOM.render(
  <ModalProvider>
    {' '}
    <RecipesProvider>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </RecipesProvider>
  </ModalProvider>,
  document.getElementById('root')
)
