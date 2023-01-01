import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1";

const params={
    key:'AIzaSyCVUz2gYUGMDlE6AJ5EsF8YVoDuholjRZY',
    cx:'40e7cbd52d66345a8'
}
export const fetchDataFromApi = async (payload) => {
    const {data}=await axios.get(BASE_URL,{
        params:{...params,...payload}
    })
    return data;
};
