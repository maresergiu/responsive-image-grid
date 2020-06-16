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
            class="holder"
            v-else> 
            <p class="text">Please bear with us until we get the data.</p>
        </div>
    </div>
</template>

<script>
import httpCall from '../mixins/httpCall'
import MediaListElement from '../components/MediaListElement.vue'
import ErrorFallback from '../components/ErrorFallback.vue'

export default {
    mixins: [httpCall],
    data () {
        return {
            imageList: null
        }
    },
    components: {
        MediaListElement,
        ErrorFallback
    },
    async mounted (){
        this.imageList = await this.axiosGet('https://api.unsplash.com/photos', {
            params: {
                query: 'cat'
            },
            headers: {
                Authorization: 'Client-ID gOqa0Eh6v9I0ReRvrg7CIjAkYo2wb-IZS0RzsYaLnXg'
            }
        })
    }
}
</script>