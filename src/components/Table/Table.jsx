import React, { useContext, useState } from "react";
import TableHeadItem from "../TableHeadItem/TableHeadItem";
import SearchLine from "../Search/SearchLine";
import AppContext from "../context/AppContext";

const Table = () => {
  const { contactData, sortData, sortDirection, detailRow } =
    useContext(AppContext);
  const sortArray = ["id", "firstName", "lastName", "email", "phone"];

  const [field, setField] = useState("");

  const fieldSort = (field) => {
    sortData(field);
    setField(field);
  };

  return (
    <>
      <SearchLine />
      <table className="table table-dark">
        <thead>
          <tr>
            {sortArray.map((item) => (
              <TableHeadItem
                key={item}
                fieldSort={() => fieldSort(item)}
                field={field}
                sortDirection={sortDirection}
                nameField={item}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {contactData.map((item) => (
            <tr key={item.id + item.email} onClick={() => detailRow(item)}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
