import React from 'react';

import ProductList from '../components/ProductList';

import { IRecord } from '../../../interfaces';

interface IProductsContainerProps {
  data: any;
  setIsEditing: (value: boolean) => void;
  setRecord: (record: IRecord) => void;
}

const ProductsContainer: React.FC<IProductsContainerProps> = ({
  data,
  setIsEditing,
  setRecord,
}) => {
  const onEdit = (record: any) => {
    setIsEditing(true);
    setRecord(record);
  };

  return <ProductList data={data} onEdit={onEdit} />;
};

export default ProductsContainer;
