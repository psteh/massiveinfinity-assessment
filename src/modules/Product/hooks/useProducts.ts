import { useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../../../constants';
import { IRecord } from '../../../interfaces';

const useProducts = () => {
  const getAllProducts = useCallback(async (): Promise<Array<object>> => {
    try {
      const resp: AxiosResponse = await axios.get(`${API_URL}/api/v1/products`);
      if (resp.status === 200) {
        return resp.data.data;
      }
      return [];
    } catch (error) {
      console.log(error);
    }
    return [];
  }, []);

  const editProduct = async (data: IRecord) => {
    try {
      const resp: AxiosResponse = await axios.put(
        `${API_URL}/api/v1/product/${data.id}`,
        data
      );
      if (resp.status === 200) {
        return resp.data.data;
      }
      return resp.data;
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  return { getAllProducts, editProduct };
};

export default useProducts;
