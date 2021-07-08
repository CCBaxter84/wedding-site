export const windowResize = {
    data: function() {
        return {
            screenSize: []
        }
    },
    computed: {
        margin() {
          return this.screenSize[0] < 415 ? "mx-1" : "mx-4";
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
      },
    unmounted() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        handleResize() {
            this.screenSize = [window.innerWidth, window.innerHeight];
        }
    }
}