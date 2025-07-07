import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface CellData {
  id: string;
  value: string;
  row: number;
  col: number;
}

interface SpreadsheetProps {
  className?: string;
}

const Spreadsheet = ({ className }: SpreadsheetProps) => {
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [cells, setCells] = useState<Record<string, CellData>>({});
  const [editingCell, setEditingCell] = useState<string | null>(null);

  const rows = 20;
  const cols = 12;

  const columnLabels = Array.from({ length: cols }, (_, i) => 
    String.fromCharCode(65 + i)
  );

  const getCellId = (row: number, col: number) => `${row}-${col}`;

  const handleCellClick = useCallback((row: number, col: number) => {
    setSelectedCell({ row, col });
    setEditingCell(null);
    console.log(`Cell clicked: ${columnLabels[col]}${row + 1}`);
  }, [columnLabels]);

  const handleCellDoubleClick = useCallback((row: number, col: number) => {
    const cellId = getCellId(row, col);
    setEditingCell(cellId);
    console.log(`Cell editing: ${columnLabels[col]}${row + 1}`);
  }, [columnLabels]);

  const handleCellValueChange = useCallback((row: number, col: number, value: string) => {
    const cellId = getCellId(row, col);
    setCells(prev => ({
      ...prev,
      [cellId]: {
        id: cellId,
        value,
        row,
        col
      }
    }));
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, row: number, col: number) => {
    if (e.key === 'Enter') {
      setEditingCell(null);
      if (row < rows - 1) {
        setSelectedCell({ row: row + 1, col });
      }
    } else if (e.key === 'Escape') {
      setEditingCell(null);
    }
  }, [rows]);

  return (
    <div className={cn("bg-white border border-gray-200 rounded-lg overflow-hidden", className)}>
      <div className="overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {/* Empty corner cell */}
              <th className="w-12 h-8 bg-gray-50 border-r border-b border-gray-200 sticky left-0 z-20"></th>
              {columnLabels.map((label, colIndex) => (
                <th
                  key={colIndex}
                  className="min-w-24 h-8 bg-gray-50 border-r border-b border-gray-200 text-xs font-medium text-gray-600 px-2 text-center sticky top-0 z-10"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {/* Row number */}
                <td className="w-12 h-8 bg-gray-50 border-r border-b border-gray-200 text-xs font-medium text-gray-600 text-center sticky left-0 z-10">
                  {rowIndex + 1}
                </td>
                {Array.from({ length: cols }, (_, colIndex) => {
                  const cellId = getCellId(rowIndex, colIndex);
                  const cellData = cells[cellId];
                  const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                  const isEditing = editingCell === cellId;

                  return (
                    <td
                      key={colIndex}
                      className={cn(
                        "min-w-24 h-8 border-r border-b border-gray-200 px-1 cursor-cell relative",
                        isSelected && "ring-2 ring-blue-500 ring-inset bg-blue-50",
                        "hover:bg-blue-50/50"
                      )}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                      onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
                    >
                      {isEditing ? (
                        <input
                          className="w-full h-full px-1 text-xs outline-none bg-white border border-blue-500"
                          value={cellData?.value || ''}
                          onChange={(e) => handleCellValueChange(rowIndex, colIndex, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                          onBlur={() => setEditingCell(null)}
                          autoFocus
                        />
                      ) : (
                        <div className="w-full h-full flex items-center px-1 text-xs text-gray-900">
                          {cellData?.value || ''}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spreadsheet;
