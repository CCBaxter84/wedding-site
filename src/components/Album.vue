<template>
    <section>
        <article class="container my-5 is-fullwidth">
            <div 
                class="mt-3 is-flex is-justify-content-center is-hoverable" 
                @click="redirectToSource"
            >
                <Loading v-if="isFetching"/>
                <b-image 
                    v-if="!isFetching && !isVideo"
                    :src="item.url"
                    :alt="item.description"
                    class="image img-load"
                />
                <EmbeddedVideo 
                    v-if="!isFetching && isVideo"
                    :item="item"
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
    import { cacheLastPage } from '@/helpers';
    import Loading from '@/components/Loading';
    import EmbeddedVideo from '@/components/EmbeddedVideo';
    import getScreenSize from '@/mixins/getScreenSize';

    export default {
        name: 'Album',
        components: { Loading, EmbeddedVideo },
        props: ['items', 'isFetching'],
        mixins: [getScreenSize],
        data() {
            return {
                current: 1,
                perPage: 1,
                order: 'is-centered',
                size: '',
                isSimple: false,
                isRounded: false,
                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                isVideo: false
            }
        },
        computed: {
            total() {
                return this.items ? this.items.length : 0;
            },
            item() {
                if (this.items) {
                    const index = this.current - 1;
                    return this.items[index];
                } else {
                    return {
                        _id: '',
                        url: ''
                    }
                }
            },
            rangeBefore() {
                return this.setPagination();
            },
            rangeAfter() {
                return this.setPagination();
            }
        },
        watch: {
            item: function(value) {
                const { url } = value;
                url.includes('Videos') ? this.isVideo = true : this.isVideo = false;
            }
        },  
        methods: {
            redirectToSource() {
                localStorage.setItem('last-page', this.current);
                window.location.href = this.item.url;
            },
            setPagination() {
                return this.screenSize[0] < 415 ? 1 : 3;
            }
        },
        mounted() {
            cacheLastPage(this);
        }
    }
</script>

<style scoped>
    figure:hover {
        cursor: pointer;
    }
</style>