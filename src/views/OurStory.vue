<template>
  <main class='my-6 mx-3'>
    <Title title='Our Story'/>
    <Pagination :items='items' v-if='!isSmallScreen'/>
    <Scroll v-else :items='items' :isFetching='false'/>
  </main>
</template>

<script>
  import Pagination from '@/components/Pagination.vue';
  import Title from '@/components/Title.vue';
  import Scroll from '@/components/Scroll.vue';
  import getScreenSize from "@/mixins/getScreenSize";
  
  export default {
    name: 'OurStory',
    components: { Pagination, Title, Scroll },
    mixins: [ getScreenSize ],
    data() {
      return {
        items: []
      }
    },
    computed: {
      isSmallScreen() {
        return this.screenSize[0] < 770;
      }
    },
    created() {
      this.items = [
        { 
          title: 'Our First Date',
          text: 'We met for tea and hot cocoa at Mutiny Information Cafe -- a Denver coffeeshop featuring used books, comics, and records. We got on so well that we were late for dinner reservations Chris had made for a more romantic restaurant down the street.',
          url: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/FirstDate.jpeg',
          description: 'Mutiny Information Cafe Building Exterior'
        },
        { 
          title: 'Our Kobayashi Maru',
          text: `After dating for a little over a month, we experienced a bit of a "No-Win" scenario. You see, we had scheduled a date for this evening, and then Liz learned that her family wanted to hold Noni Peg's 89th birthday party the same night. Consequently, since neither of us wanted to break the date, Liz spent much of this day and the day prior making a birthday cake, and Chris got to meet Liz's whole family at once at the birthday party.`,
          url: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Kirk.jpeg',
          description: 'Captain Kirk from Star Trek'
        },
        { 
          title: 'Our First Trip',
          text: 'We spent Memorial Day weekend 2019 taking a road trip through Utah. Along the +1,200 mi. journey, we visited Arches National Park, Zion National Park, and Monument Valley.',
          url: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Zion.JPG',
          description: 'Forested valley'
        },
        { 
          title: 'Our Engagement',
          text: "Right before we headed out to dinner in celebration of Liz's birthday, Chris revealed he had one last birthday present and popped the question.",
          url: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Ring.JPG',
          description: 'Hand wearing Engagement Ring'
        },
        { title: 'Our First Christmas Together',
          text: "Sometimes, it's the little things that make life enjoyable. Decorating our tree together while watching Christmas movies marked the start of our new family's Christmas traditions.",
          url: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Christmas+Tree.jpeg',
          description: 'Christmas Tree'
        },
        { 
          title: 'Our New Bundle of Joy',
          text: 'Our Nova puppy was getting mopey. So, we got her a new little brother -- Revan.',
          url: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Revan.JPG',
          description: 'Black shit-tzu mix puppy'
        },
      ]
    },
  }
</script>

<style scoped>
  .margin {
      margin: 0 auto;
      width: 75%;
  }

  /* Mobile Device Styling */
  @media screen and (max-width: 1024px){
    .margin {
        width: 100%;
    }
  } 
</style>