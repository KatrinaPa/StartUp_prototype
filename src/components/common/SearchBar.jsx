import { SearchIcon } from './Icons';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-80 pl-10 pr-4 py-2 rounded-full border border-border-light focus:outline-none focus:border-brand-yellow"
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
    </div>
  );
};

export default SearchBar; 