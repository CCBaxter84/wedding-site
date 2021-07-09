export const checkVideo = {
    methods: {
        checkVideo(url) {
            url.includes('Videos') ? this.isVideo = true : this.isVideo = false;
        }
    }
}

export const redirectToPhoto = {
    methods: {
        redirectToPhoto(item) {
          localStorage.setItem('last-page', this.current);
          console.log(item)
          if (this.item) {
            window.location.href = this.item.url;
          } else {
            window.location.href = item.url;
          }
        }
    }
}

export const cacheLastPage = {
    methods: {
        cacheLastPage() {
            const lastPage = Number(localStorage.getItem('last-page'));
            if (lastPage) {
              this.current = lastPage;
              localStorage.clear();
            } 
        }
    }
}

export const isSmallScreen = {
    computed: {
        isSmallScreen() {
            return this.screenSize[0] < 415;
        }
    }
}

export const sourceSet = {
    computed: {
        sourceSet() {
            return `${this.item.photo} 0.5x`;
          }
    }
}