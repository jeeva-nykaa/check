'use client';

import { useState } from 'react';
import { LiaSlidersHSolid } from 'react-icons/lia';

import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';

interface TestPageProps {}

const filterOptions = {
  'Store Type': {
    id: 1,
    options: [
      { label: 'Salon', isSelected: false },
      { label: 'Pharmacy', isSelected: false },
      { label: 'Beauty center', isSelected: false },
    ],
  },
  'Store Activities': {
    id: 2,
    options: [
      { label: 'NDR', isSelected: false },
      { label: 'OFD', isSelected: false },
      { label: 'Zero order', isSelected: false },
      { label: 'Zero order 2', isSelected: false },
    ],
  },
};

const TestPage: React.FC<TestPageProps> = () => {
  const [open, setOpen] = useState(false);
  const [options, setoptions] = useState(filterOptions);

  return (
    <div className="border-b border-lightBorder p-16">
      <SearchBar
        searchText=""
        placeholder="Search Retailers"
        onSearch={(value) => console.log(`Search value : ${value}`)}
      />
      <div className="mt-16">
        <FilterBar
          open={open}
          onDismiss={() => setOpen(false)}
          filterOptions={options}
          showCloseButton
          showHeader={false}
          multiSelect
          quickFilterSelection="Store Activities"
          onFilterChange={(value: any, selected) => {
            setoptions({ ...options, ...value });
            const selectedOptions = { ...options, ...value };
            console.log('selected', selected, selectedOptions);
          }}
          trigger={
            <button
              onClick={() => setOpen(!open)}
              aria-label="submit"
              type="submit"
              className="flex h-32 w-32 items-center justify-center rounded-md border border-lightBorder"
            >
              <LiaSlidersHSolid />
            </button>
          }
        />
      </div>
      <input type="file" name="image-upload" />
    </div>
  );
};

export default TestPage;
