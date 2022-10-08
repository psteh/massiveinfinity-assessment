import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

interface ISearchInput {
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ onSearch }) => {
  return (
    <Search
      className="mb-8"
      placeholder="Search..."
      enterButton="Search"
      size="large"
      allowClear
      onSearch={onSearch}
    />
  );
};

SearchInput.defaultProps = {
  onSearch: () => {},
};

export default SearchInput;
