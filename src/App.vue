<template>
  <section 
    class='hero is-primary is-bold is-fullheight has-text-primary has-text-centered'
  >
    <section class='hero-body'>
      <section class='container is-fullwidth'>
        <section class='section is-small'>
          <Header />
          <router-view />
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import Header from '@/components/Header';

  export default {
    name: 'App',
    components: { Header }
  }
</script>

<style>
  .section {
    border-radius: 0.75rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
  }

  .section:before {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
    border-radius: 0.75rem;
    content: '';
    height: 500%;
    margin-left: -50rem;
    margin-top: -50rem;
    position: absolute;
    width: 200%;
  }

  img {
    max-height: 700px;
    object-fit: contain !important;
  }

  .img-load {
      animation: slide-in 300ms ease-in-out;
  }

  .loading {
    height: 700px;
  }

  .is-full-width {
    width: 100%;
  }

  /* Animation for photo albums */
  @keyframes slide-in {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
  /* Mobile Device Styling */
  @media screen and (max-width: 415px){
      .section:before {
        margin-left: -20rem;
        margin-top: -20rem;
      }
  }
</style>