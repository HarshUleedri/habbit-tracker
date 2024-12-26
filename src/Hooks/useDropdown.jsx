import { useState } from "react";
import Dropdown from "../components/common/Dropdown";

const useDropdown = (items) => {
  const [seletctedItem, setSeletctedItem] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const isSelected = (e) => {
    setSeletctedItem(e.target.value);
    setIsOpen(false);
  };

  const element = (
    <>
      <Dropdown
        items={items}
        isSelected={isSelected}
        selectedValue={seletctedItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );

  return { element, seletctedItem, setSeletctedItem };
};

export default useDropdown;
