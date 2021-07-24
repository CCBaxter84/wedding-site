export const checkVideo = {
    methods: {
        checkVideo(url) {
            url.includes('Videos') ? this.isVideo = true : this.isVideo = false;
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