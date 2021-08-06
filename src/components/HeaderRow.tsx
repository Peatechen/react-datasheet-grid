import React, { useContext } from 'react'
import { HeaderContext } from '../contexts/HeaderContext'
import cx from 'classnames'
import { Cell } from './Cell'

export const HeaderRow = React.memo(() => {
  const {
    columns,
    contentWidth,
    height,
    hasStickyRightColumn,
    activeColMin,
    activeColMax,
  } = useContext(HeaderContext)

  return (
    <div
      className={cx('dsg-row', 'dsg-row-header')}
      style={{
        width: contentWidth ? contentWidth : '100%',
        height,
      }}
    >
      {columns.map((column, i) => {
        if (i === 0) {
          return <div style={{ display: 'none' }}></div>
        }
        return (
          <Cell
            key={i}
            gutter={false}
            stickyRight={hasStickyRightColumn && i === columns.length - 1}
            column={column}
            className={cx(!column.renderWhenScrolling && 'dsg-cell-light')}
          >
            {column.title}
          </Cell>
        )
      })}
    </div>
  )
})

HeaderRow.displayName = 'HeaderRow'
