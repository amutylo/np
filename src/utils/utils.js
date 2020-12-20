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

const getHomeFeedCategories = (feed) => {
  if (!feed || !feed.length) return;
  return feed.filter((category) => !!category.val).map((item) => item.entityId);
};

export { getTitle, checkMobile, toggleCategoryStatus, getHomeFeedCategories };
