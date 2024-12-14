import { type Placement, type PlacementListProps } from "../lib/schema";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

export const columns: ColumnDef<Placement>[] = [
    {
        header: "S.No",
        cell: ({ row }) => {
            return `${row.index + 1}`;
        },
    },
    {
        accessorKey: "name",
        header: "Company Name",
    },
    {
        accessorKey: "role",
        header: "Role offered",
    },
    {
        accessorKey: "placed_students",
        header: "No of students",
        cell: ({ row }) => {
            const { placed_students } = row.original;
            return <p className="text-center">{placed_students}</p>;
        },
    },
    {
        accessorKey: "package",
        header: "Package Offered",
    },
];

const PlacementList = ({ placements }: PlacementListProps) => {
    const table = useReactTable({
        data: placements,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <div className="w-full overflow-x-auto md:px-10 xl:px-20">
            <Table className="border">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        className="whitespace-nowrap"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        <>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="whitespace-nowrap"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className="flex items-center justify-between">
                                    Total:
                                    <span className="font-semibold">
                                        {placements.reduce(
                                            (acc, curr) =>
                                                acc + curr.placed_students,
                                            0
                                        )}
                                    </span>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </>
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
    );
};

export default PlacementList;
