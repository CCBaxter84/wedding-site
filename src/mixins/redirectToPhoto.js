const redirectToPhoto = {
    methods: {
        redirectToPhoto() {
          localStorage.setItem('last-page', this.current);
          window.location.href = this.item.url;
        }
    }
}

export default redirectToPhoto;