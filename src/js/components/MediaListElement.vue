<template>
    <div class="media-list-element">
        <figure class="ratio-primary media-list-element_img-holder">
            <a 
                :href="imgUrl" 
                target="_blank"
                class="media-list-element_link">
            </a>
            <img 
                class="media-list-element_img"
                :src="imgUrl" 
                :alt="imgAlt" />
        </figure>
        <a 
            class="media-list-element_cover cta"
            :href="imgCreatorHref"
            target="_blank">
            {{imgCreator}}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String,
            required: true
        },
        imgCreator: {
            type: String,
            required: true
        },
        imgCreatorHref: {
            type: String,
            required: true
        }
    }
}
</script>