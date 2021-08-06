import React, { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import {
  DataSheetGrid,
  keyColumn,
  textColumn,
  Column,
} from 'react-datasheet-grid'
import './style.css'

function App() {
  const sizeColumns = [
    {
      column: 'type',
      content: '',
    },
    {
      column: 'S',
      content: 'S',
    },
    {
      column: 'col-1',
      content: 'col-1',
    },
    {
      column: 'M',
      content: 'M',
    },
    {
      column: 'XL',
      content: 'XL',
    },
    {
      column: 'XXL',
      content: 'XXL',
    },
  ]

  const sizeData = [
    [
      {
        column: 'type',
        content: '',
      },
      {
        column: 'S',
        content: 'S',
      },
      {
        column: 'M',
        content: 'M',
      },
      {
        column: 'XL',
        content: 'XL',
      },
      {
        column: 'XXL',
        content: 'XXL',
      },
      {
        column: 'col-1',
        content: 'SM',
      },
    ],
    [
      {
        column: 'type',
        content: 'Width',
      },
      {
        column: 'S',
        content: '20',
      },
      {
        column: 'M',
        content: '20',
      },
      {
        column: 'XL',
        content: '20',
      },
      {
        column: 'XXL',
        content: '20',
      },
      {
        column: 'col-1',
        content: '21',
      },
    ],
    [
      {
        column: 'type',
        content: 'Height',
      },
      {
        column: 'S',
        content: '30',
      },
      {
        column: 'M',
        content: '30',
      },
      {
        column: 'XL',
        content: '30',
      },
      {
        column: 'XXL',
        content: '30',
      },
      {
        column: 'col-1',
        content: '2321',
      },
    ],
  ]

  const [gridData, setGridData] = useState<Record<string, any>[]>([])

  const [gridColumns, setGridColumns] =
    useState<Array<Record<string, any>>>(sizeColumns)

  useEffect(() => {
    const initData: Array<Record<string, any>> = []
    sizeData.forEach((row) => {
      const rowData: Record<string, any> = {}
      row.forEach((cell) => {
        rowData[`${cell.column}`] = cell.content
      })
      initData.push(rowData)
    })

    setGridData(initData)
  }, [])

  const columns: Column<any, any>[] = useMemo(() => {
    return gridColumns.map((item) => {
      return {
        ...keyColumn(item.column, textColumn),
        title: item.column,
      }
    })
  }, [gridColumns])

  const [selectable, setSelectable] = useState(true)

  return (
    <div
      style={{
        margin: '50px',
        padding: '50px',
        maxWidth: '900px',
        background: '#f3f3f3',
      }}
    >
      <button
        onClick={() => {
          console.log(gridData)
        }}
      >
        保存
      </button>
      <label>是否可选</label>
      <input
        type="checkbox"
        checked={selectable}
        onChange={(e) => {
          setSelectable(e.target.checked)
        }}
      ></input>
      <DataSheetGrid
        data={gridData}
        selectable={selectable}
        // onChange={setGridData}
        columns={columns}
        onColumnChange={(value) => {
          const newColumns: Array<Record<string, any>> = []
          value.forEach((item, index) => {
            if (index !== 0) {
              newColumns.push({
                column: item.title,
                content: item.title,
              })
            }
          })
          setGridColumns(newColumns)
        }}
      />
    </div>
  )
}

export default App
