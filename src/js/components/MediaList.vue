<template>
    <div class="media-list mod">
        <ul 
            v-if="Array.isArray(this.imageList)"
            class="holder cf">
            <li 
                v-for="image in imageList"
                :key="image.id"
                class="float-left media-list-elemet-holder">
                <MediaListElement 
                    :imgUrl="image.urls.small"
                    :imgAlt="image.alt_description"
                    :imgCreator="image.user.first_name"
                    :imgCreatorHref="image.user.links.html" />
            </li>
        </ul>
        <ErrorFallback 
            v-else-if="this.imageList && this.imageList.response.status >= 200"
            :status="this.imageList.response.status" />
        <div
            v-else 
            class="holder"> 
            <p class="text">Please bear with us until we get the data.</p>
        </div>
        <div 
            v-show="showSeeMore"
            class="media-list-cta-holder horizontal-center holder">
            <button 
                class="cta" 
                type="button"
                @click="handleClickSeeMore">
                See more
            </button>
        </div>
    </div>
</template>

<script>
import httpCall from '../mixins/httpCall'
import MediaListElement from '../components/MediaListElement.vue'
import ErrorFallback from '../components/ErrorFallback.vue'

import { mapActions } from 'vuex'

export default {
    mixins: [httpCall],
    data () {
        return {
            imageList: null,
            imagesPerPage: 10,
            countRequests: 0,
            showSeeMore: true
        }
    },
    components: {
        MediaListElement,
        ErrorFallback
    },
    watch: {
        countRequests(){
            this.showSeeMore = this.countRequests === 4 ? false : true
        }
    },
    methods: {
        ...mapActions('loader', ['setLoaderVisibility']),
        handleClickSeeMore (){
            this.requestPictures()
        },
        async requestPictures (){
            if(this.countRequests < 5) {
                this.countRequests += 1
                
                this.setLoaderVisibility(true)
            }

            const result = await this.axiosGet('https://api.unsplash.com/photos', {
                params: {
                    query: 'dog',
                    per_page: this.imagesPerPage * this.countRequests
                },
                headers: {
                    Authorization: 'Client-ID gOqa0Eh6v9I0ReRvrg7CIjAkYo2wb-IZS0RzsYaLnXg'
                }
            })

            setTimeout(() => {
                this.setLoaderVisibility(false)
            }, 1000)

            this.imageList = [...result]
        }
    },
    async mounted (){
        this.requestPictures()
    }
}
</script>