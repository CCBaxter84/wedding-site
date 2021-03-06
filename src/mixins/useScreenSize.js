const useScreenSize = {
    data: function() {
        return {
            screenSize: []
        }
    },
    mounted() {
        this.getScreenSize();
        window.addEventListener("resize", this.getScreenSize);
      },
    destroyed() {
        window.removeEventListener("resize", this.getScreenSize);
    },
    methods: {
        getScreenSize() {
            this.screenSize = [window.innerWidth, window.innerHeight];
        }
    }
}

export default useScreenSize;