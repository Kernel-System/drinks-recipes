import { useContext, useState } from 'react'
import { CategoriesContext } from '../../contexts/Categories/context'
import { RecipesContext } from '../../contexts/Recipes/context'

const Form = () => {
  const [searchQuery, setSearchQuery] = useState({
    ingredient: '',
    category: '',
  })
  const { categories } = useContext(CategoriesContext)
  const { setQuery, setSearch } = useContext(RecipesContext)

  const searchQueryHandler = ({ target: { name, value } }) => {
    setSearchQuery({ ...searchQuery, [name]: value })
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (searchQuery.ingredient === '' || searchQuery.category === '') return
    setQuery(searchQuery)
    setSearch(true)
  }

  return (
    <form className='col-12' onSubmit={formSubmitHandler}>
      <fieldset className='text-center'>
        <legend>Search by category and ingredient</legend>
      </fieldset>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            type='text'
            className='form-control'
            name='ingredient'
            placeholder='Search by ingredient'
            onChange={searchQueryHandler}
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            name='category'
            onChange={searchQueryHandler}>
            <option value=''>Select category...</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            value='Search'
          />
        </div>
      </div>
    </form>
  )
}

export default Form
