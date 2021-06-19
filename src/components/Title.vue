<template>
    <article class='container my-3'>
      <h2 class='title has-text-primary is-2 mb-3'>{{ title }}</h2>
    </article>
</template>

<script>
export default {
    name: 'Title',
    props: {
      title: String
    }
}
</script>