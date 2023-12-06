import classNames from 'classnames';
import { type ReactElement } from 'react';
import { IoIosClose } from 'react-icons/io';

import BottomSheet from '@/components/BottomSheet';

export interface FilterOptions {
  label: string;
  id?: string | number;
  options: any;
}

interface FilterBarProps {
  open: boolean;
  onDismiss: () => void;
  trigger: ReactElement;
  showHeader?: boolean;
  showCloseButton?: boolean;
  heading?: string;
  filterOptions: any;
  onFilterChange: (filter: any, selected: any) => void;
  multiSelect?: boolean;
  quickFilterSelection?: string;
}

const OptionsBar = ({
  filter,
  multiSelect,
  onFilterChange,
  filterLabel,
}: any) => {
  console.log(filter);

  if (!filter) return null;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {filter.options?.map((option: any) => {
        return (
          <button
            type="submit"
            key={option.label}
            onClick={(e) => {
              e.preventDefault();
              const newOptions = filter.options.map((tempOption: any) => {
                const newOption = { ...tempOption };
                if (option.label === tempOption.label) {
                  if (tempOption.isSelected) newOption.isSelected = false;
                  else newOption.isSelected = true;
                }
                // Multi selection
                else if (!multiSelect) newOption.isSelected = false;
                return newOption;
              });
              const newFilter = {
                ...filter,
                options: newOptions,
              };

              // callback
              onFilterChange(
                {
                  [filterLabel]: newFilter,
                },
                {
                  ...option,
                  isSelected: !option.isSelected,
                },
              );
            }}
            className={classNames(
              'flex h-28 min-w-fit items-center justify-between text-left rounded-full px-12 text-12 text-textColor',
              {
                'bg-theme/10 border border-theme': option.isSelected,
                'bg-white border border-lightBorder': !option.isSelected,
              },
            )}
          >
            {option.label}
            {option.isSelected && (
              <div className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-theme">
                <IoIosClose style={{ color: 'white' }} />
              </div>
            )}
          </button>
        );
      })}
    </>
  );
};

const FilterBar: React.FC<FilterBarProps> = ({
  open,
  onDismiss,
  trigger,
  heading = 'Filter',
  showHeader = true,
  showCloseButton = false,
  filterOptions,
  onFilterChange,
  multiSelect = false,
  quickFilterSelection,
}) => {
  return (
    <>
      <div className="flex items-center gap-10">
        {trigger && trigger}
        {quickFilterSelection && (
          <div className="flex w-full gap-10 overflow-x-scroll">
            {OptionsBar({
              filter: filterOptions[quickFilterSelection],
              multiSelect,
              onFilterChange,
              filterLabel: quickFilterSelection,
            })}
          </div>
        )}
      </div>
      {open && (
        <BottomSheet
          open={open}
          onDismiss={onDismiss}
          showCloseButton={showCloseButton}
          showHeader={showHeader}
          heading={heading}
        >
          {Object.keys(filterOptions).map((filterLabel) => {
            const filter = filterOptions[filterLabel];
            return (
              <div key={filterLabel} className="mb-16">
                <div className="text-14 font-medium text-textColor">
                  {filterLabel}
                </div>
                <div className="my-10 flex flex-wrap gap-8">
                  {OptionsBar({
                    filter,
                    multiSelect,
                    onFilterChange,
                    filterLabel,
                  })}
                </div>
              </div>
            );
          })}
        </BottomSheet>
      )}
    </>
  );
};

export default FilterBar;
