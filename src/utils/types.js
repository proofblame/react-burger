import PropTypes from 'prop-types';

export const ingredientsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
}));

export const modalPropTypes = PropTypes.shape({
  header: PropTypes.string,
  children: PropTypes.node.isRequired,
})

export const ingredientDetails = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

export const orderDetailsPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  order: PropTypes.shape({
    number: PropTypes.number.isRequired,
  }),
  success: PropTypes.bool.isRequired,
})
export const constructorIngredientPropTypes = PropTypes.shape({
  ingredient: ingredientDetails.isRequired,
  index: PropTypes.number.isRequired,
  onMove: PropTypes.func.isRequired,
})

export const stuffListPropTypes = PropTypes.shape({
  target: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  onHover: PropTypes.func.isRequired,
})

export const dndFieldPropTypes = PropTypes.shape({
  target: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  onHover: PropTypes.func.isRequired,
  text: PropTypes.string,
})

export const modalOverlayPropTypes = PropTypes.shape({
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
})

export const useSwitchTabsPropTypes = PropTypes.shape({
  rootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  currentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  switchTab: PropTypes.func.isRequired,
})