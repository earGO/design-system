import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { Table as RSTable, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/lib/less/index.less'
import { themeGet } from 'styled-system'

const StyledTable = styled(RSTable)`
  font-size: 12px;
  & .rs-table-cell-content {
    display: flex;
    align-items: center;
    padding-left: 16px;
    /* Expand-collapse icon */
    & > span {
      padding: 0 4px;
    }
  }
`
const StyledHeader = styled(HeaderCell)`
  background: ${themeGet('colors.lightGrey', '#f5f5f5')};
`

const CustomHeaderCell = props => <StyledHeader {...props} />

/** Используется для отображения структурированной информации. */
const Table = (props) => (
  <StyledTable {...props} />
)

Table.Column = Column;
Table.HeaderCell = CustomHeaderCell;
Table.Cell = Cell;

Table.propTypes = {
  /** Данные для отображения в таблице. */
  data: propTypes.array.isRequired,
  /** Высота хедера таблицы */
  headerHeight: propTypes.number,
  /** Высота ряда */
  rowHeight: propTypes.number,
  /** Режим "дерева" - таблица с вложенными данными */
  isTree: propTypes.bool,
  /** В режиме дерева, функция-рендерер иконки "раскрыть-закрыть" ряд. Сигнатура: (icon: node, rowData: Object) => React.node */
  renderTreeToggle: propTypes.func,
  /** Указатель на поле ключ. Должно быть уникальным. */
  rowKey: propTypes.string,
  /** Виртуализация */
  virtualized: propTypes.bool,
  /** Ширина таблицы */
  width: propTypes.number,
  /** Высота таблицы */
  height: propTypes.number,
  /** Минимальная высота таблицы */
  minHeight: propTypes.number,
}

Table.defaultProps = {
  headerHeight: 48,
  rowHeight: 48,
  rowKey: 'key'
}

export default Table