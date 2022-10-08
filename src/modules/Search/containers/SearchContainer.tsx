import React from 'react';

import SearchInput from '../components/SearchInput';
import useSearch from '../hooks/useSearch';

interface ISearchContainerProps {
  setDataList: (data: any) => void;
}

const SearchContainer: React.FC<ISearchContainerProps> = ({
  setDataList,
}) => {
  const { search } = useSearch({ setDataList });

  const onSearch = async (value: string): Promise<void> => {
    await search(value);
  };

  return <SearchInput onSearch={onSearch} />;
};

export default SearchContainer;
