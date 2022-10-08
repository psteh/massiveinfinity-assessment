import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../../../constants';

const useSearch = ({ setDataList }: { setDataList: (data: any) => void }) => {
  const search = async (value: string) => {
    try {
      const resp: AxiosResponse = await axios.post(
        `${API_URL}/api/v1/products/search`,
        {
          brand: value,
          productName: value,
        }
      );
      if (resp.status === 200) {
        setDataList(resp?.data?.data);
      }
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  return { search };
};

export default useSearch;
