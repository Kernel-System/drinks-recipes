import Form from './components/Form'
import Header from './components/Header'
import RecipesList from './components/RecipesList'

const App = () => {
  return (
    <>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Form />
        </div>
        <RecipesList />
      </div>
    </>
  )
}

export default App
