"use-strict";
const Item = (function() {
  const validateName = name => {
    if (!name) {
      throw new TypeError("Name does not exist");
    }
  };
  const Create = name => ({
    id: cuid(),
    name,
    checked: false
  });

  return {
    validateName,
    Create
  };
})();
