import { useRef, useEffect } from "react";

const Dropdown = ({
  items = [],
  isSelected,
  selectedValue,
  isOpen,
  setIsOpen,
}) => {
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOutSideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-full px-4 py-2 border rounded-sm text-zinc-300 border-zinc-700 bg-zinc-900"
        onClick={toggleDropdown}
        type="button"
      >
        {selectedValue === "" ? "Menu" : selectedValue}
      </button>
      {isOpen && (
        <ul className="absolute w-full divide-y rounded-sm text-zinc-300 bg-zinc-800 divide-solid divide-zinc-600">
          {items.map((value, index) => (
            <li key={index}>
              <button
                className="w-full px-2 py-2 hover:bg-zinc-600"
                value={value}
                onClick={isSelected}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
