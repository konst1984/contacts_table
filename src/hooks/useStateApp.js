import { useState } from "react";

const useStateApp = () => {
  const [totalRow, setTotalRow] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isButtonClick, setButtonClick] = useState(false);
  const [sortDirection, setSortDirection] = useState(true);
  const [detailItem, setDetailItem] = useState("");
  const [url, setUrl] = useState("");
  const [filteredValue, setFilteredValue] = useState("");
  const [newContact, setNewContact] = useState({});

  const limitCountPages = 50;

  return [
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
      setNewContact
    },
  ];
};

export default useStateApp;
