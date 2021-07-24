const useLocalStorageForMedia = {
    methods: {
        cacheLastPage(path) {
            if (path) {
                localStorage.setItem("last-page", path);
            } else {
                localStorage.setItem("last-page", this.current);
            }

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
            let lastPage;
            if (localStorage.getItem("last-page") === "Home") {
                localStorage.clear();
                this.$router.push({ path: "/" });
                return;
            }

            if (localStorage.getItem("last-page") === "Videos") {
                localStorage.clear();
                this.$router.push({ path: "/videos" });
                return;
            }
            
            lastPage = Number(localStorage.getItem("last-page"));
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