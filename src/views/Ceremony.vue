<template>
  <main class='mx-6'>
    <Title title='Ceremony'/>
    <Pagination />
  </main>
</template>

<script>
  import Title from '@/components/Title.vue';
  import Pagination from '@/components/Pagination.vue';

  export default {
    name: 'Ceremony',
    components: { Title, Pagination }
  }
</script>