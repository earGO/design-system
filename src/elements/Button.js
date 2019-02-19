import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import theme from '../theme'

const sizes = {
  small: {
    fontSize: 1,
    diameter: 32,
    px: 10,
    py: 6,
  },
  medium: {
    fontSize: 1,
    diameter: 40,
    px: 16,
    py: 8.5,
  },
  large: {
    fontSize: 1,
    diameter: 48,
    px: 20,
    py: 15,
  },
}

const getSizeParams = size => sizes[size] || sizes.medium

const size = props => {
  const { px, py, fontSize } = getSizeParams(props.size)

  return {
    fontSize: `${props.theme.fontSizes[fontSize]}px`,
    padding: `${py}px ${px}px`,
  }
}

const block = props => Boolean(props.block) && { width: '100%' }

const shapeCircle = props => {
  if (props.circle) {
    const { diameter } = sizes[props.size] || sizes.medium
    return { borderRadius: '50%', padding: 0, width: `${diameter}px`, height: `${diameter}px` }
  }
}

const type = props => {
  const { theme, disabled, size } = props
  const { colors } = theme
  const { px, py } = getSizeParams(size)

  switch (props.type) {
    case 'bordered':
      return {
        color: disabled ? colors.lightGrey : colors.grey,
        borderColor: disabled ? colors.lightGrey : colors.semiLightGrey,
        backgroundColor: 'transparent',
        '&:hover': !disabled && {
          color: colors.blue,
          borderColor: colors.blue,
        },
        '&:active': !disabled && {
          color: colors.darkBlue,
          borderColor: colors.darkBlue,
        },
      }
    case 'dashed':
      return {
        color: disabled ? colors.lightGrey : colors.grey,
        borderColor: disabled ? colors.lightGrey : colors.semiLightGrey,
        backgroundColor: 'transparent',
        borderStyle: 'dotted',
        borderWidth: '1px',
        padding: `${py}px ${px}px`,
        '&:hover': !disabled && {
          color: colors.blue,
          borderColor: colors.blue,
        },
        '&:active': !disabled && {
          color: colors.darkBlue,
          borderColor: colors.darkBlue,
        },
      }
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: disabled ? colors.lightGrey : colors.blue,
        '&:hover': !disabled && {
          backgroundColor: colors.lightBlue,
        },
        '&:active': !disabled && {
          backgroundColor: 'transparent',
          color: colors.darkBlue,
          borderColor: 'transparent',
        },
      }
    case 'flat':
      return {
        backgroundColor: 'transparent',
        color: disabled ? colors.lightGrey : colors.grey,
        '&:hover': !disabled && {
          color: colors.blue,
        },
        '&:active': !disabled && {
          color: colors.darkBlue,
        },
      }
    case 'primary':
    default:
      return {
        color: colors.white,
        borderColor: disabled ? colors.lightGrey : colors.primary,
        backgroundColor: disabled ? colors.disabled : colors.primary,
        '&:hover': !disabled && {
          backgroundColor: colors.semiDarkBlue,
          borderColor: colors.semiDarkBlue,
        },
        '&:active': !disabled && {
          backgroundColor: colors.darkBlue,
          borderColor: colors.darkBlue,
        },
      }
  }
}

/**
 * Используется для инициации каких-либо действий или процессов.
 */
const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 300;
  line-height: 1.5;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${props => props.theme.radii[1] + 'px'};
  color: ${props => props.theme.colors.white};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  outline: none;
  transition: all ${props => props.theme.duration.normal};
  position: relative;
  ${block}
  ${space}
  ${size}
  ${type}
  ${shapeCircle};
`

Button.propTypes = {
  /** Вид кнопки */
  type: PropTypes.oneOf(['primary', 'bordered', 'dashed', 'outline', 'flat']),
  /** Размер кнопки */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Растягивает кнопку на 100% родительского блока */
  block: PropTypes.bool,
  /** Круглая кнопка */
  circle: PropTypes.bool,
  /** Функция, которая выполняется после нажатия */
  onClick: PropTypes.func,
  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** @ignore */
  theme: PropTypes.any,
}

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  circle: false,
  block: false,
  /** @ignore */
  theme: theme,
}

Button.displayName = 'Button'

/** @component */
export default Button
