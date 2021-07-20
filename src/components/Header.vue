<template>
  <header >
      <b-navbar centered>
            <template #start>
                <b-navbar-item id="home" tag="router-link" :to="{ path: '/'}">Home</b-navbar-item>
                <b-navbar-item id="our-story" tag="router-link" :to="{ path: '/our-story' }">Our Story</b-navbar-item>
                <b-navbar-item id="engagement" tag="router-link" :to="{ path: '/engagement' }">Engagement Photos</b-navbar-item>
                <b-navbar-dropdown label="Wedding Photos" class="has-text-primary test">
                    <b-navbar-item id="getting-ready" tag="router-link" :to="{ path: '/getting-ready' }">Getting Ready</b-navbar-item>
                    <b-navbar-item id="ceremony" tag="router-link" :to="{ path: '/ceremony' }">Ceremony</b-navbar-item>
                    <b-navbar-item id="family" tag="router-link" :to="{ path: '/family' }">Family</b-navbar-item>
                    <b-navbar-item id="couple" tag="router-link" :to="{ path: '/couple' }">Couple</b-navbar-item>
                    <b-navbar-item id="reception" tag="router-link" :to="{ path: '/reception' }">Reception</b-navbar-item>
                    <b-navbar-item id="puppies" tag="router-link" :to="{ path: '/puppies' }">Puppies</b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-item id="videos" tag="router-link" :to="{ path: '/videos' }">Wedding Videos</b-navbar-item>
            </template>
      </b-navbar>
  </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    .navbar-item {
        border-radius: .75rem !important;
    }

    .navbar-item:focus, .navbar-link:focus {
        background-color: rgba(255, 255, 255, 0.3) !important;
        border-radius: .75rem !important;
    }

    .navbar-item:hover, .navbar-link:hover {
        background-color: rgba(0, 0, 0, 0.05) !important;
        border-radius: .75rem !important;
    }

    @media screen and (max-width: 768px) {
        .navbar-menu {
            background-image: none !important;
        }
    }

    @media screen and (max-width: 1023px) {
        .navbar-menu {
            background-color: rgba(255, 255, 255, 0.3) !important;
            border-radius: .75rem !important;
        }
        
        .navbar-item:hover {
            background-color: rgba(0, 0, 0, 0.05) !important;
        }
    }
</style>