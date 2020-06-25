<template>
    <div class="row">
        <open-positions-table :positions="positionData" :category="pageTitle" ></open-positions-table>
    </div>
</template>

<script>
import openPositionsTable from '@/components/showOpenPositionsTable.vue'
export default {
    components: {
        openPositionsTable
    } , 
    props: {
        positionData: {
            type: Array,
            required: true
        }, 
        pageTitle: {
            type: String, 
            required: true
        }
    }
}
</script>