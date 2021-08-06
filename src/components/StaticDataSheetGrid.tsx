import { DataSheetGridProps } from '../types'
import { useState } from 'react'
import { DataSheetGrid } from './DataSheetGrid'
import React from 'react'

export const StaticDataSheetGrid = <T extends any>({
  gutterColumn,
  stickyRightColumn,
  addRowsComponent,
  createRow,
  duplicateRow,
  isRowEmpty,
  ...rest
}: DataSheetGridProps<T>) => {
  const [staticProps] = useState({
    gutterColumn,
    stickyRightColumn,
    addRowsComponent,
    createRow,
    duplicateRow,
    isRowEmpty,
  })

  return <DataSheetGrid {...staticProps} {...rest} />
}
