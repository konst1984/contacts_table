import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useServerData from "./hooks/useServerData";
import Switcher from "./components/Switcher/Switcher";
import TableBody from "./components/TableBody/TableBody";
import useStateApp from "./hooks/useStateApp";
import Paginator from "./components/Paginator/Paginator";
import { useEffect } from "react";
import { generatorArr } from "./utils/generatorArr";

import AppContext from "./components/context/AppContext";
import Form from "./components/Form/Form";

function App() {
  const [
    {
      isButtonClick,
      setButtonClick,
      sortDirection,
      setSortDirection,
      detailItem,
      setDetailItem,
      url,
      setUrl,
      totalRow,
      setTotalRow,
      currentPage,
      setCurrentPage,
      limitCountPages,
      filteredValue,
      setFilteredValue,
      newContact,
      setNewContact,
    },
  ] = useStateApp();
  const [{ initialData, isLoading, setInitialData, isError }] = useServerData({
    url,
    isButtonClick,
  });

  const getFilteredData = (filteredValue) => {
    if (!filteredValue) {
      return initialData;
    }
    return initialData.filter(
      (item) =>
        item.firstName.toLowerCase().includes(filteredValue.toLowerCase()) ||
        item.lastName.toLowerCase().includes(filteredValue.toLowerCase()) ||
        item.email.toLowerCase().includes(filteredValue.toLowerCase()) ||
        item.phone.toLowerCase().includes(filteredValue.toLowerCase())
    );
  };

  const filterData = getFilteredData(filteredValue);
  const start = (currentPage - 1) * limitCountPages;
  const end = currentPage * limitCountPages;
  let contactData = filterData.slice(start, end);

  useEffect(() => {
    if (initialData) {
      const totalCountPage = Math.ceil(filterData.length / limitCountPages);
      setTotalRow(totalCountPage);
    }
  }, [filterData, limitCountPages, initialData, setTotalRow]);

  const totalRowArr = generatorArr(totalRow);

  const buttonHandler = (url) => {
    setUrl(url);
    setButtonClick(true);
  };

  const sortData = (field) => {
    const copyData = [...initialData];
    const direction = sortDirection ? 1 : -1;
    const newData = copyData.sort((a, b) => {
      return a[field] > b[field]
        ? direction
        : a[field] < b[field]
        ? -direction
        : 0;
    });
    setSortDirection(!sortDirection);
    setInitialData(newData);
  };

  const detailRow = (item) => {
    setDetailItem(item);
  };

  const nextPage = () => {
    if (currentPage >= totalRow) return;
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  const getCurrentPage = (n) => {
    setCurrentPage(n);
    setDetailItem(null);
  };

  const onSearchSend = (value) => {
    setFilteredValue(value);
  };

  const getFormData = (obj) => {
    setNewContact(obj);
  };
  contactData = [newContact, ...contactData];

  const contextValue = {
    onSearchSend,
    contactData,
    sortData,
    sortDirection,
    detailRow,
    detailItem,
  };

  return (
    <div className="container">
      <AppContext.Provider value={contextValue}>
        <Switcher buttonHandler={buttonHandler} />
        {isError ? (
          <div className="alert alert-danger" role="alert">
            Error getting data
          </div>
        ) : isButtonClick ? (
          <>
            <Form getFormData={getFormData} />
            <TableBody isLoading={isLoading} detailItem={detailItem} />
          </>
        ) : null}
        {totalRow > 1 ? (
          <Paginator
            totalRowArr={totalRowArr}
            getCurrentPage={getCurrentPage}
            currentPage={currentPage}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        ) : null}
      </AppContext.Provider>
    </div>
  );
}

export default App;
