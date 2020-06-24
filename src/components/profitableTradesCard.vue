<template>
    <div class="col-md-4">
        <div class="card card-chart">
        <!-- <div class="card-header card-header-success">
            <div class="ct-chart" id="dailySalesChart"></div>
        </div> -->
        <div class="card-body">
            <h4 class="card-title"> Total Profitable Trades</h4>
            <p class="card-category">
            <span class="text-success"> {{trades.length}} </span></p>
        </div>
        <div class="card-footer">
            <div class="stats">
            <a @click="goToOpenTrade"  class="btn btn-primary btn-round"> View Trades</a>

            
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        trades: {
            type: Array,
            required: true
        }
    },
    methods: {
        goToOpenTrade(){
            this.$router.push({
                name: 'ShowTrades', 
                params: {
                    tradeData: this.trades,
                    pageTitle: "All Profitable Trades"
                }
            })
        }
    }
}
</script>