import { useContext, useState } from 'react'
import { ModalContext } from '../../contexts/Modal/context'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Recipe = ({ recipe: { idDrink, strDrink, strDrinkThumb } }) => {
  const { recipe, setRecipeId, setRecipe } = useContext(ModalContext)
  const [modalStyle] = useState(getModalStyle)
  const [modalVisibility, setModalVisibility] = useState(false)
  const classes = useStyles()

  const openModalHandler = () => {
    setModalVisibility(true)
  }

  const closeModalHandler = () => {
    setModalVisibility(false)
  }

  const recipeIngredients = (recipe) => {
    const ingredients = []
    for (let i = 1; i <= 15; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={`strIngredient${i}`}>
            {recipe[`strIngredient${i}`]}: {recipe[`strMeasure${i}`]}
          </li>
        )
      }
    }
    return ingredients
  }

  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{strDrink}</h2>
        <img src={strDrinkThumb} alt={strDrink} />
        <div className='card-body'>
          <button
            className='btn btn-block btn-primary'
            onClick={() => {
              setRecipeId(idDrink)
              openModalHandler()
            }}>
            View recipe
          </button>
          <Modal
            open={modalVisibility}
            onClose={() => {
              closeModalHandler()
              setRecipeId(null)
              setRecipe({})
            }}>
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipe.strDrink}</h2>
              <h3 className='mt-4'>Instructions</h3>
              <p>{recipe.strInstructions}</p>
              <img
                className='img-fluid my-4'
                src={recipe.strDrinkThumb}
                alt={recipe.strDrink}
              />
              <h3>Ingredients</h3>
              <ul>{recipeIngredients(recipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Recipe
