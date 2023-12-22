import "./CustomersList.scss";

import * as React from "react";

export type Customer = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  country: string;
  phone_number: string;
  status: boolean;
};

type CustomersListProps = {
  db: Customer[];
};

export default function CustomersList({ db }: CustomersListProps) {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr className="table__head">
            <th className="table__head--cell">
              <p className="table__head--text">customer name</p>
            </th>
            <th className="table__head--cell">
              <p className="table__head--text">company</p>
            </th>
            <th className="table__head--cell">
              <p className="table__head--text">phone number</p>
            </th>
            <th className="table__head--cell">
              <p className="table__head--text">email</p>
            </th>
            <th className="table__head--cell">
              <p className="table__head--text">country</p>
            </th>
            <th className="table__head--cell">
              <p className="table__head--text">status</p>
            </th>
          </tr>
          {db.map((customer, index) => (
            <tr key={index} className="table__body">
              <td className="table__body--cell">
                <p className="table__body--text">{`${customer.first_name} ${customer.last_name}`}</p>
              </td>
              <td className="table__body--cell">
                <p className="table__body--text">{`${customer.company}`}</p>
              </td>
              <td className="table__body--cell">
                <p className="table__body--text">{`${customer.phone_number}`}</p>
              </td>
              <td className="table__body--cell">
                <p className="table__body--text">{`${customer.email}`}</p>
              </td>
              <td className="table__body--cell">
                <p className="table__body--text">{`${customer.country}`}</p>
              </td>
              <td className="table__body--cell">
                <p className="table__body--text">
                  <span
                    className={`status ${
                      customer.status === true ? "active" : "inactive"
                    }`}
                  >{`${
                    customer.status === true ? "active" : "inactive"
                  }`}</span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
