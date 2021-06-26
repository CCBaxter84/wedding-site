export const cacheLastPage = function(component) {
    const lastPage = Number(localStorage.getItem('last-page'));
    if (lastPage) {
      component.current = lastPage;
      localStorage.clear();
    } 
}