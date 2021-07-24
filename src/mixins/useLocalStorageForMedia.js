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
            /* window.onbeforeunload = () => {
                self.cacheLastPage();
            } */
            window.onpagehide = () => {
                self.cacheLastPage();
            }
        },
        setToLastPage() {
            const lastPage = Number(localStorage.getItem("last-page"));
            if (lastPage) {
              this.current = lastPage;
              localStorage.clear();
            } 
        },
        unsetRefreshEventListener() {
            const self = this;
            /* window.removeEventListener("beforeunload", () => {
                self.cacheLastPage();
            }); */
            window.removeEventListener("pagehide", () => {
                self.cacheLastPage();
            });
        },
    }
}

export default useLocalStorageForMedia;