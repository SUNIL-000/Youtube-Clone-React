import axios from "axios";


const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {

  params: {
    maxResults: "70",
  },
  headers: {
    "X-RapidAPI-Key": "7fd901d297mshf9db43fc149370dp162b75jsn1427d43da1f3",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};


export const fetchFromApi = async (url) => {

    const {data}=await axios.get(`${BASE_URL}/${url}`,options);


        return data;
};
