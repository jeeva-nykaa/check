'use client';

import { useCallback, useState } from 'react';
import { GoSearch } from 'react-icons/go';

import useDebounce from '@/hooks/useDebounce';

interface SearchBarProps {
  searchText: string;
  placeholder: string;
  onSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  onSearch,
  placeholder,
}) => {
  const [search, setSearch] = useState(searchText);
  const { debounce } = useDebounce();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value: string) => onSearch(value), 1000),
    [],
  );

  return (
    <div className="flex h-48 w-full items-center gap-20 border-b border-divider bg-greyBg px-10">
      <GoSearch className="h-20 w-20 text-gray-400" />
      <input
        className="w-full bg-transparent text-14 outline-none"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
