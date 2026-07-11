"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type TableOptions,
  type Updater,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface DataTableOptions {
  state?: {
    sorting?: SortingState;
  };

  onSortingChange?: (
    updater: Updater<SortingState>
  ) => void;
}

interface DataTableProps<TData extends object> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];

  emptyMessage?: string;

  options?: DataTableOptions;
}

export function DataTable<TData extends object>({
  columns,
  data,
  emptyMessage = "No results found.",
  options,
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,

    state: options?.state,

    onSortingChange:
      options?.onSortingChange,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel:
      getSortedRowModel(),

    getPaginationRowModel:
      getPaginationRowModel(),
  } satisfies TableOptions<TData>);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            {table
              .getHeaderGroups()
              .map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(
                    (header) => (
                      <TableHead
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column
                                .columnDef
                                .header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  )}
                </TableRow>
              ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length >
            0 ? (
              table
                .getRowModel()
                .rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={
                      row.getIsSelected()
                        ? "selected"
                        : undefined
                    }
                  >
                    {row
                      .getVisibleCells()
                      .map((cell) => (
                        <TableCell
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column
                              .columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-32 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium">
            {table.getRowModel().rows.length}
          </span>{" "}
          of{" "}
          <span className="font-medium">
            {data.length}
          </span>{" "}
          entries
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              table.previousPage()
            }
            disabled={
              !table.getCanPreviousPage()
            }
          >
            Previous
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              table.nextPage()
            }
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}