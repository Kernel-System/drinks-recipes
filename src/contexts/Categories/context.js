import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const CategoriesContext = createContext()

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(({ data: { drinks } }) => setCategories(drinks))
    }
    getCategories()
  }, [])

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider
