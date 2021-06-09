<template>
  <section class="hero is-primary is-bold is-fullheight">
    <section class="hero-body has-text-primary">
      <section class="container has-text-centered">
        <section class="section is-large has-background-primary-light">
          <Header />
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