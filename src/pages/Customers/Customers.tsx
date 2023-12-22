import * as React from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import CustomersList, {
  Customer,
} from "src/components/CustomersList/CustomersList";
import Pagination from "src/components/Pagination/Pagination";
import db from "../../db/MOCK_DATA.json";
import "./Customers.scss";

const amountOfCustomersOnPage = 8;

export default function Customers() {
  const [searchValue, setSearchValue] = React.useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +searchParams.get("page")!;

  let lastCustomer = currentPage * 8;
  let firstCustomer = currentPage * 8 - 8;

  const filteredDb = db.filter(
    ({ first_name, last_name }: Customer) =>
      first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      last_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const list = filteredDb.slice(firstCustomer, lastCustomer);
  const pages = Math.ceil(filteredDb.length / amountOfCustomersOnPage);

  const setPage = (page?: number) => {
    let params: URLSearchParamsInit = {
      page: page ? page.toString() : pages.toString(),
    };
    setSearchParams(params);
  };

  React.useEffect(() => {
    if (currentPage > pages) {
      setPage();
    } else if (currentPage < 1 || searchValue.length > 1) {
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.target.value);

  const handleClick = (page: number) => {
    setPage(page);
  };

  return (
    <div className="container">
      <header>
        <div>
          <h1>all customers</h1>
          <p>active members</p>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
        />
      </header>
      {pages >= 1 ? (
        <React.Suspense fallback={"Loading data..."}>
          <CustomersList db={list} />
        </React.Suspense>
      ) : (
        <p style={{ paddingLeft: "38px", color: "#292D32" }}>
          No results were found for "{searchValue}"
        </p>
      )}

      {pages >= 1 && (
        <footer>
          <p className="info">
            Showing data {firstCustomer + 1} to{" "}
            {currentPage !== pages ? lastCustomer : filteredDb.length} of{" "}
            {filteredDb.length} entries
          </p>
          {pages > 1 && (
            <Pagination
              pages={pages}
              currentPage={currentPage ? currentPage : 1}
              handleClick={handleClick}
            />
          )}
        </footer>
      )}
    </div>
  );
}
