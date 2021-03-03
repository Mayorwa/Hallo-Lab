<template>
    <div class="page">
        <Sidebar/>
        <Header/>
        <main class="main">
            <router-view/>
        </main>
    </div>
</template>
<script>
    import Header from '@/components/header.vue';
    import Sidebar from '@/components/sidebar.vue';
    export default {
        name: 'Home',
        components: {
            Header,
            Sidebar
        }
    }
</script>
