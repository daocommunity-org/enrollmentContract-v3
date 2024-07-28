"use client"

import React, { useState, useEffect } from 'react';
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getAllMembers } from '../../utils/contractInteractions';

const data: Member[] = [
  {
    id: "m5gr84i9",
    walletAddress: "string",
    name: "string",
    regno: "string",
    message: "string",
    enrollmentTime: 1
  },
  {
    id: "m5gr84i9",
    walletAddress: "string",
    name: "string",
    regno: "string",
    message: "string",
    enrollmentTime: 1
  },
  {
    id: "m5gr84i9",
    walletAddress: "string",
    name: "sreecha",
    regno: "string",
    message: "string",
    enrollmentTime: 1
  },
]


export type Member = {
    id:string,
    walletAddress: string;
    name: string;
    regno: string;
    message: string;
    enrollmentTime: number;
}


export default function DataTableDemo() {

    const columns: ColumnDef<Member>[] = [
        {
          accessorKey: "name",
          header: "Name",
          cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
          ),
        },
        {
          accessorKey: "walletAddress",
          header:"Wallet Address	",
          cell: ({ row }) => <div className="lowercase">{row.getValue("walletAddress")}</div>,
        },
        {
          accessorKey: "regno",
          header: () => "Registration Number",
          cell: ({ row }) => <div className="lowercase">{row.getValue("walletAddress")}</div>,
        },
        {
          accessorKey: "message",
          header: () => "Message",
          cell: ({ row }) =><div className="lowercase">{row.getValue("message")}</div>
        },
        {
          accessorKey: "enrollmentTime",
          header: () => "Enrollment Time",
          cell: ({ row }) => <div className="lowercase">{row.getValue("walletAddress")}</div>
        },

      ]

    const [members, setMembers] = useState<Member[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const fetchMembers = async () => {
        const fetchedMembers = await getAllMembers();
        setMembers(fetchedMembers.sort((a:any, b:any) => b.enrollmentTime - a.enrollmentTime));
      };
  
        fetchMembers();
    }, []);
  
    const filteredMembers = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
    );
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="p-32">
      <div className="flex items-center py-4">
        {/* <Input
          placeholder="Search by name or address"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        <Input
            placeholder="Search by name or address"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
            />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  )
}
