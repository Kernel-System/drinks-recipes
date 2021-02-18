import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [recipeId, setRecipeId] = useState(null)
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    if (!recipeId) return

    const getRecipe = async () =>
      await axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        )
        .then(({ data: { drinks } }) => setRecipe(drinks[0]))
    getRecipe()
  }, [recipeId])

  return (
    <ModalContext.Provider value={{ setRecipeId, recipe, setRecipe }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
