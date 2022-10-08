import React from 'react';
import { Button, Table } from 'antd';

interface IProductList {
  data: any;
  onEdit: (record: any) => void;
}

const ProductList: React.FC<IProductList> = ({ data, onEdit }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'upc',
      dataIndex: 'upc',
      key: 'upc',
    },
    {
      title: '',
      dataIndex: 'operation',
      render: (_: any, record: any) => {
        return <Button onClick={() => onEdit(record)}>Edit</Button>;
      },
    },
  ];

  return <Table dataSource={data} columns={columns}></Table>;
};

export default ProductList;
