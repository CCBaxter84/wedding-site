const useLocalStorageForMedia = {
    methods: {
        cacheLastPage() {
            localStorage.setItem("last-page", this.current);
        },
        redirectToPhoto(item) {
            this.cacheLastPage();
            if (this.item) {
                window.location.href = this.item.url;
            } else {
                window.location.href = item.url;
            }
        },
        setRefreshEventListener() {
            const self = this;
            window.onbeforeunload = function() {
                self.cacheLastPage();
            }
        },
        setToLastPage() {
            const lastPage = Number(localStorage.getItem("last-page"));
            if (lastPage) {
              this.current = lastPage;
              localStorage.clear();
            } 
        }
    }
}

export default useLocalStorageForMedia;