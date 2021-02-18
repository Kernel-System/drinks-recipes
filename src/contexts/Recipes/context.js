import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const RecipesContext = createContext()

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState({
    ingredient: '',
    category: '',
  })
  const { ingredient, category } = query
  const [search, setSearch] = useState(false)

  useEffect(() => {
    if (search) {
      const getRecipes = async () =>
        await axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
          )
          .then(({ data: { drinks } }) => {
            setRecipes(drinks)
          })
      getRecipes()
    }
  }, [ingredient, category, search])

  return (
    <RecipesContext.Provider value={{ recipes, setQuery, setSearch }}>
      {children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider
