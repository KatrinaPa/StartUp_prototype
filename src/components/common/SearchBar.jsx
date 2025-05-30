import { SearchIcon } from './Icons';

const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Meklēt pēc dzīvnieka vai saimnieka vārda",
  onKeyPress 
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        className="
          w-full
          min-w-[400px]
          max-w-[400px]
          pl-10 
          pr-4 
          py-2 
          rounded-full 
          border 
          border-brand-green 
          focus:outline-none 
          focus:border-brand-yellow 
          focus:border-[2px]
          transition-all
          duration-200
        "
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
    </div>
  );
};

export default SearchBar; 