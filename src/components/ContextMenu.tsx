import * as React from 'react'
import { useCallback, useRef } from 'react'
import { useDocumentEventListener } from '../hooks/useDocumentEventListener'
import { ContextMenuItem, ContextMenuComponentProps } from '../types'

const renderItem = (item: ContextMenuItem) => {
  if (item.type === 'DELETE_ROW') {
    return '删除行'
  }

  if (item.type === 'DELETE_COL') {
    return '删除列'
  }

  if (item.type === 'INSERT_ROW_BELLOW') {
    return '下方插入一行'
  }

  if (item.type === 'INSERT_ROW_ABOVE') {
    return '上方插入一行'
  }

  if (item.type === 'INSERT_COL_LEFT') {
    return '左侧插入一列'
  }

  if (item.type === 'INSERT_COL_RIGHT') {
    return '右侧插入一列'
  }

  if (item.type === 'DUPLICATE_ROW') {
    return '复制行'
  }

  return item.type
}

export const ContextMenu = ({
  clientX,
  clientY,
  items,
  close,
}: ContextMenuComponentProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const onClickOutside = useCallback(
    (event: MouseEvent) => {
      const clickInside = containerRef.current?.contains(event.target as Node)

      if (!clickInside) {
        close()
      }
    },
    [close]
  )
  useDocumentEventListener('mousedown', onClickOutside)

  return (
    <div
      className="dsg-context-menu"
      style={{ left: clientX + 'px', top: clientY + 'px' }}
      ref={containerRef}
    >
      {items.map((item) => (
        <div
          key={item.type}
          onClick={item.action}
          className="dsg-context-menu-item"
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  )
}
