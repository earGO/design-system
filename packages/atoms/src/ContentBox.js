import React from 'react'
import PropTypes from 'prop-types'
import Flex from './Flex'
import styled from 'styled-components'


/**
 * Специализированный компонент для позиционирования крупных блоков по центру страницы
 * и ограничения их ширины. Применяется ещё и для ограничения ширины блоков внутри сетки
 * Обладает шириной по умолчанию, равной базовой ширине контента на странице проекта*/

const ContentBoxStyle = styled(Flex)`
  padding-top: ${props => props.padding + 'px'};
  padding-bottom: ${props => props.padding + 'px'};
  align-self: ${props => props.alignSelf};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  margin: 0 auto;
  width: ${props => props.contentwidth + 'px'};
`

function ContentBox({
  children,
  padding,
  justifyContent,
  alignItems,
  contentwidth,
  alignSelf,
  ...props
}) {
  return (
    <ContentBoxStyle
      padding={padding}
      justifyContent={justifyContent}
      contentwidth={contentwidth}
      alignItems={alignItems}
      alignSelf={alignSelf}
      {...props}
    >
      {children}
    </ContentBoxStyle>
  )
}

ContentBox.propTypes = {
  padding: PropTypes.number,
  justifyContent: PropTypes.string,
  contentwidth: PropTypes.number,
  alignSelf: PropTypes.string,
  alignItems: PropTypes.string
}

ContentBox.defaultProps = {
  padding: 0,
  justifyContent: 'flex-start',
  contentwidth: 1120,
  alignSelf: 'center',
  alignItems: 'flex-start'
}

export default ContentBox
