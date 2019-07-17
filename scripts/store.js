"use strict";

/* global store, cuid */

const store = (function() {
  const items = [
    { id: cuid(), name: "apples", checked: false },
    { id: cuid(), name: "oranges", checked: false },
    { id: cuid(), name: "milk", checked: true },
    { id: cuid(), name: "bread", checked: false }
  ];

  const findById = id => {
    return items.find(item => item.id === id);
  };

  const addItem = name => {
    try {
      Item.validateName(name);
      items.push(Item.Create(name));
    } catch (error) {
      console.log(error.message);
    }
  };

  function findAndToggleChecked(id) {
    const selectedItem = this.findById(id);
    selectedItem.checked = !selectedItem.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const selectedItem = this.findById(id);
      selectedItem.name = newName;
    } catch (error) {
      console.log(error.message);
    }
  }

  const findAndDelete = id => {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(searchedValue) {
    this.searchTerm = searchedValue;
  };



  const hideCheckedItems = false;
  const searchTerm = "";
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
})();
