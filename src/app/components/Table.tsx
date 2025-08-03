import { Fragment } from "react";
import { Advocate } from "../page";
import TableRow from "./TableRow";

type TableProps = {
  items: Advocate[];
};

const Table = ({ items }: TableProps) => {
  return (
    <table className="table-auto m-6">
      <thead className="flex-col">
        <tr className="column-header columns-3">
          <th className=" text-center flex-3">Contact Info</th>
          <th className=" text-center flex-1">Specialties</th>
          <th className=" text-center flex-1">Experience</th>
        </tr>
      </thead>
      <tbody className="flex-col">
        {items.length > 0 &&
          items.map((advocate: Advocate) => {
            return (
              <Fragment key={advocate.id}>
                <TableRow {...advocate} />
              </Fragment>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
