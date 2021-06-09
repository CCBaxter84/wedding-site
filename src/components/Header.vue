<template>
  <header class="has-background-primary-light">
      <b-navbar centered>
          <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/'}">Home</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/our-story'}">Our Story</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/engagement'}">Engagement</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/getting-ready'}">Getting Ready</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/ceremony'}">Ceremony</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/family'}">Family</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/couple'}">Couple</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/reception'}">Reception</b-navbar-item>
          </template>
      </b-navbar>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style>
    .navbar-item {
            background-color: #f2effb !important;
        }
    .navbar-item:hover {
        background-color: rgba(0, 0, 0, 0.05) !important;
    }
    @media screen and (max-width: 768px) {
        .navbar-menu {
            background-image: none !important;
        }
    }

    @media screen and (max-width: 1023px) {
        .navbar-menu {
            background-color: #f2effb !important;
        }
        .navbar-item:hover {
            background-color: rgba(0, 0, 0, 0.05) !important;
        }
    }
</style>