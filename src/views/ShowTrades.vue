<template>
    <div class="row">
        <trading-table :trades="tradeData" :categoryTitle="pageTitle"></trading-table>
    </div>
</template>
<script>
import tradingTable from '@/components/showTradingTable.vue'

export default {
    components: {
        tradingTable
    },
    props: {
        tradeData: {
            type: Array, 
            required: true
        } , 
        pageTitle: {
            type: String , 
            required: true
        }
    }
}
</script>