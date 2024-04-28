import { ReactNode } from "react";
import styles from "./Table.module.scss";

export interface TableProps<T> {
  data: T[];
  columns: {
    title: string;
    indexName?: keyof T;
    render?: (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any,
      record: T,
      index: number,
    ) => ReactNode;
  }[];
  onRowClick?: (data: T, index: number) => void;
}
const Table = <T,>(props: TableProps<T>) => {
  const { data, columns, onRowClick } = props;
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <th key={index}>{column.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr
            key={index}
            // className={selectedIndex === index ? "selected" : ""}
            onClick={() => {
              onRowClick?.(record, index);
            }}
          >
            {columns.map((column, columnIndex) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const value: any =
                column.indexName != undefined ? record[column.indexName] : null;
              if (column.render) {
                return (
                  <td key={columnIndex}>
                    {column.render(value, record, index)}
                  </td>
                );
              }
              return <td key={columnIndex}>{value}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
