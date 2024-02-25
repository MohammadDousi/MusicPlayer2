import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getRecentlySongs = (queryKey) => {
  let formData = new FormData();
  formData.append("fun", queryKey);

  const fetchData = () =>
    axios.post("https://music.kaktusprog.ir/assets/php/function.php", formData);

  return useQuery({
    queryKey: ["getData", queryKey],
    queryFn: fetchData,
  });
};

export { getRecentlySongs };
