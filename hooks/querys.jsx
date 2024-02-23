import { useQuery } from "@tanstack/react-query";
import axios from "axios";

let formData = new FormData();

const getRecentlySongs = (queryKey) => {
  formData.append("fun", "getRecentlySongs");

  const fetchData = () =>
    axios.post("https://music.kaktusprog.ir/assets/php/function.php", formData);

  return useQuery({
    queryKey: ["getData", queryKey],
    queryFn: fetchData,
  });
};

export { getRecentlySongs };
