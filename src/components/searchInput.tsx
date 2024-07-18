// components/SearchInput.tsx

import React from "react";

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="text-right mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="검색"
        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
