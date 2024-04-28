import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = (queryKey, queryKey2) => {
  let formData = new FormData();
  formData.append("fun", queryKey);

  const fetchData = () =>
    axios.post("https://musicland.kaktusprog.ir/assets/php/function.php", formData);

  return useQuery({
    queryKey: ["data", queryKey, queryKey2],
    queryFn: fetchData,
    staleTime: 1 * (60 * 1000),
    cacheTime: 1.1 * (60 * 1000),
    refetchOnMount: false,
  });
};

const getSingleTrackData = (id) => {
  let formData = new FormData();
  formData.append("fun", "getSingleSong");
  formData.append("id", id);

  const fetchData = () =>
    axios.post("https://musicland.kaktusprog.ir/assets/php/function.php", formData);

  return useQuery({
    queryKey: ["SingleTrack", id],
    queryFn: fetchData,
    staleTime: 0.5 * (60 * 1000),
    cacheTime: 0.6 * (60 * 1000),
    refetchOnMount: false,
  });
};

const likeTrack = (id) => {

  return useMutation({
    mutationFn: (id) => {
      let formData = new FormData();
      formData.append("fun", "countLikeSong");
      formData.append("id", id);

      return axios.post(
        "https://musicland.kaktusprog.ir/assets/php/function.php",
        formData
      );
    },
  });
};
const countPlayTrack = (id) => {

  return useMutation({
    mutationFn: (id) => {
      let formData = new FormData();
      formData.append("fun", "countPlaySong");
      formData.append("id", id);

      return axios.post(
        "https://musicland.kaktusprog.ir/assets/php/function.php",
        formData
      );
    },
  });
};

const getSingleSinger = (id) => {
  let formData = new FormData();
  formData.append("fun", "getSingleArtist");
  formData.append("id", id);

  const fetchData = () =>
    axios.post("https://musicland.kaktusprog.ir/assets/php/function.php", formData);

  return useQuery({
    queryKey: ["SingleTrack", id],
    queryFn: fetchData,
    staleTime: 1 * (60 * 1000),
    cacheTime: 1.1 * (60 * 1000),
    refetchOnMount: false,
  });
};

export {
  getData,
  getSingleTrackData,
  likeTrack,
  countPlayTrack,
  getSingleSinger,
};
