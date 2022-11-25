import { useState } from "react";

const useToggle = (init: boolean) => {
  const [toggle, setToggle] = useState(init);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return {
    toggle,
    handleToggle,
  };
};

export default useToggle;
