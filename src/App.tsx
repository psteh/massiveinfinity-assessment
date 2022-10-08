import React, { useState, useEffect, ReactNode } from 'react';

import SearchContainer from './modules/Search/containers/SearchContainer';
import ProductsContainer from './modules/Product/containers/ProductsContainer';
import EditProductcontainer from './modules/Product/containers/EditProductContainer';
import useProducts from './modules/Product/hooks/useProducts';
import { IRecord } from './interfaces';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  const { getAllProducts } = useProducts();

  const defaultRecordValue: IRecord = {
    id: 0,
    upc: 0,
    brand: '',
    productName: '',
    createdAt: null,
    updatedAt: null,
    deletedAt: null,
  };

  const [dataList, setDataList] = useState<Array<object>>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [record, setRecord] = useState<IRecord>(defaultRecordValue);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setDataList(products);
    };

    fetchAllProducts();
  }, [isEditing, getAllProducts]);

  const renderMainContent: ReactNode = (
    <div className="container pt-20 pb-20">
      <SearchContainer setDataList={setDataList} />
      <ProductsContainer
        data={dataList}
        setIsEditing={setIsEditing}
        setRecord={setRecord}
      />
    </div>
  );

  const renderEditProduct: ReactNode = (
    <div className="container  pt-20 pb-20 pr-96 pl-96">
      <EditProductcontainer record={record} setIsEditing={setIsEditing} />
    </div>
  );

  return (
    <div className="bg-slate-200 w-screen h-screen">
      {isEditing ? renderEditProduct : renderMainContent}
    </div>
  );
}

export default App;
