<template>
  <main class='mx-6'>
    <Title title='Our Story'/>
    <Pagination />
  </main>
</template>

<script>
  import Pagination from '@/components/Pagination.vue'
  import Title from '@/components/Title.vue'
  
  export default {
    name: 'OurStory',
    components: { Pagination, Title },
  }
</script>