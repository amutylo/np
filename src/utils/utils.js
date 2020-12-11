const getTitle = (title) => {
  return title ? title : "Home Feed";
};

const checkMobile = () => {
  return window.innerWidth > 1365 ? false : true;
};

const toggleCategoryStatus = (e) => {
  e.preventDefault();
  console.log("toggleCategoryStatus");
};

export { getTitle, checkMobile, toggleCategoryStatus };
