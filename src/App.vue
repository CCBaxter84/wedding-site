<template>
  <section 
    class="hero is-primary is-bold is-fullheight has-text-primary has-text-centered"
  >
    <section class="hero-body ">
      <section class="container">
        <section class="section is-small has-background-primary-light">
          <Header />
          <router-view />
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    name: "App",
    components: { 
      Header
    }
  }
</script>

<style>
  .section {
    border-radius: 0.75rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    position: relative;
  }
  .section:before {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
    border-radius: 0.75rem;
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
</style>