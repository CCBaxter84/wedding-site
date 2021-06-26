<template>
    <article class='container my-3'>
      <p class='title has-text-primary is-2 mb-3'>{{ title }}</p>
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