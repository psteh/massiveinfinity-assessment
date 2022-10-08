import React from 'react';
import { Form, Input, Button, notification } from 'antd';

import useProducts from '../hooks/useProducts';
import { IRecord } from '../../../interfaces';

interface IEditProductContainerProps {
  record: IRecord;
  setIsEditing: (value: boolean) => void;
}

const EditProductContainer: React.FC<IEditProductContainerProps> = ({
  record,
  setIsEditing,
}) => {
  const { editProduct } = useProducts();
  const [form] = Form.useForm();

  const { upc, brand, productName } = record;

  const onEdit = async () => {
    try {
      const values = await form.validateFields();
      const resp = await editProduct({ ...record, ...values });
      if (resp) {
        notification.success({ message: 'Successfully edit record' });
        setIsEditing(false);
        return;
      }
      notification.error({ message: resp.message });
    } catch (error) {
      console.log(error);
    }
    return;
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item
          label="UPC"
          name="upc"
          initialValue={upc}
          rules={[{ required: true, message: 'UPC is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Brand"
          name="brand"
          initialValue={brand}
          rules={[{ required: true, message: 'Brand is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Name"
          name="productName"
          initialValue={productName}
          rules={[{ required: true, message: 'Product Name is required' }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Form.Item className="text-right" wrapperCol={{ offset: 18, span: 6 }}>
        <Button className="mr-4" type="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="primary" onClick={onEdit}>
          Save
        </Button>
      </Form.Item>
    </div>
  );
};

export default EditProductContainer;
