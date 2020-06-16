<template>
    <div>
        <div class="holder">
            <h2 class="sub-title">Opps</h2>
            <p class="text">Something went wrong.</p>
            <p 
                class="test" 
                v-if="status === 404">We couldn't find the data.</p>
            <p 
                class="test" 
                v-if="status === 401">You don't have authorization for these files.</p>
            <p class="text">Please check your internet connection.</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: Number,
            required: true
        }
    }
}
</script>