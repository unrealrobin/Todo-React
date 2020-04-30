const StorageService = {
  getProjects() {
    return window.localStorage.getItem('projects');
  },

  setProject(title) {
    let storedProjects = JSON.parse(window.localStorage.getItem('projects'));
    if (!storedProjects) {
      storedProjects = [];
    }
    window.localStorage.setItem(title, JSON.stringify([{ title }, ...storedProjects]));
  },

  setItems(itemObj, projectName) {
    let storedItems = JSON.parse(window.localStorage.getItem(JSON.stringify(projectName)));
    if (!storedItems) {
      storedItems = [];
    }
    window.localStorage.setItem(
      JSON.stringify(projectName),
      JSON.stringify([itemObj, ...storedItems])
    );
  },

  getItems(projectName) {
    return window.localStorage.getItem(JSON.stringify(projectName));
  },
};
export default StorageService;

// [{title: project1}, {title: project2}, ...]
