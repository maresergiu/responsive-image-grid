<template>
    <div id="app">
        <header class="site-header">
            <div class="holder">
                <h1 class="sub-title">Media library</h1>
            </div>
        </header>
        <div id="main">
            <MediaList />
        </div>
    </div>
</template>

<script>
import './scss/main.scss'

import MediaList from './components/MediaList.vue'

export default {
    components: {
        MediaList
    }
}
</script>