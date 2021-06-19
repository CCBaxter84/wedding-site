<template>
    <section>
      <article class='container my-6'>
        <h3 class='title has-text-primary is-3'>{{ item.title }}</h3>
        <p class='is-size-5'>{{ item.text }}</p>
        <div class="mt-6 is-flex is-justify-content-center">
          <b-image 
            :src='item.photo'
            :srcset="sourceSet"
            :alt='item.description'
          />
        </div>

      </article>
      <b-pagination
        :items="items"
        :current.sync="current"
        :total="total"
        v-model="current"
        :range-before="rangeBefore"
        :range-after="rangeAfter"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage"
        :icon-prev="prevIcon"
        :icon-next="nextIcon"
        aria-next-label='Next page'
        aria-previous-label='Previous page'
        aria-page-label='Page'
        aria-current-label='Current page'
      />
    </section>
</template>

<script>
  export default {
    name: 'Pagination',
    data() {
      return {
        items: [],
        total: 6,
        current: 1,
        perPage: 1,
        rangeBefore: 5,
        rangeAfter: 5,
        order: 'is-centered',
        size: '',
        isSimple: false,
        isRounded: false,
        prevIcon: 'chevron-left',
        nextIcon: 'chevron-right'
      }
    },
    computed: {
      item() {
        const index = this.current - 1;
        return this.items[index];
      },
      sourceSet() {
        return `${this.item.photo} 0.5x`
      },
      orientation() {
        const isLandscape = this.item.orientation === 'landscape';
        return isLandscape ? '5by3' : '3by5';
      }
    },
    created() {
      this.items = [
        { 
          title: 'Our First Date: 11/30/2018',
          text: 'We met for tea and hot cocoa at Mutiny Information Cafe -- a Denver coffeeshop featuring used books, comics, and records. We got on so well that we were late for dinner reservations Chris had made for a more romantic restaurant down the street.',
          photo: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/FirstDate.jpeg',
          description: 'Mutiny Information Cafe Building Exterior',
          orientation: 'landscape'
        },
        { 
          title: 'Our Kobayashi Maru: 1/6/2019',
          text: `After dating for a little over a month, we experienced a bit of a "No-Win" scenario. You see, we had scheduled a date for this evening, and then Liz learned that her family wanted to hold Noni Peg's 89th birthday party the same night. Consequently, since neither of us wanted to break the date, Liz spent much of this day and the day prior making a birthday cake, and Chris got to meet Liz's whole family at once at the birthday party.`,
          photo: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Kirk.jpeg',
          description: 'Captain Kirk from Star Trek',
          orientation: 'landscape'
        },
        { 
          title: 'Our First Trip: 5/23/2019 - 5/27/2019',
          text: 'We spent Memorial Day weekend 2019 taking a road trip through Utah. Along the +1,200 mi. journey, we visited Arches National Park, Zion National Park, and Monument Valley.',
          photo: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Zion.JPG',
          description: 'Forested valley',
          orientation: 'landscape' 
        },
        { 
          title: 'Our Engagement: 8/2/2019',
          text: "Right before we headed out to dinner in celebration of Liz's birthday, Chris revealed he had one last birthday present and popped the question.",
          photo: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Ring.JPG',
          description: 'Hand wearing Engagement Ring',
          orientation: 'portrait'
        },
        { title: 'Our First Christmas Together: 12/25/2019',
          text: "Sometimes, it's the little things that make life enjoyable. Decorating our tree together while watching Christmas movies marked the start of our new family's Christmas traditions.",
          photo: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Christmas+Tree.jpeg',
          description: 'Christmas Tree',
          orientation: 'portrait'
        },
        { 
          title: 'Our New Bundle of Joy: 1/4/2020',
          text: 'Our Nova puppy was getting mopey. So, we got her a new little brother -- Revan.',
          photo: 'https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Revan.JPG',
          description: 'Black shit-tzu mix puppy',
          orientation: 'landscape'
        },
      ]
    }
  }
</script>