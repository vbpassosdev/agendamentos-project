import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Column<T> {
  key: string;
  header: string;
  className?: string;
  render: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: Array<Column<T>>;
  data: T[];
}

export function DataTable<T>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[var(--border)]">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[var(--border)] text-left">
          <thead className="bg-[var(--panel-strong)]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    "px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]",
                    column.className,
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)] bg-white/70">
            {data.map((row, index) => (
              <tr key={index} className="transition hover:bg-[var(--panel)]/70">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-5 py-4 text-sm text-[var(--foreground)]"
                  >
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
