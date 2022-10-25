import { useEffect, useState } from "react";
import axios from "axios";

const useServerData = ({ url, isButtonClick }) => {
  const [initialData, setInitialData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getData = () => {};
  useEffect(() => {
    if (!isButtonClick) {
      return;
    }
    setLoading(true);
    axios.get(url).then((res) => {
      setInitialData(res.data);
      setLoading(false);
    });
  }, [url,isButtonClick]);

  return [{ initialData, isLoading, setInitialData, setLoading }, getData];
};

export default useServerData;
