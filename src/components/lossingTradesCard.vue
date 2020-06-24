<template>
    <div class="col-md-4">
    <div class="card card-chart">
    <!-- <div class="card-header card-header-warning">
        <div class="ct-chart" id="websiteViewsChart"></div>
    </div> -->
    <div class="card-body">
        <h4 class="card-title">Total Losing Trades</h4>
        <p class="card-category text-danger">{{trades.length}}</p>
    </div>
    <div class="card-footer">
        <div class="stats">
        <a @click="goToOpenTrade" class="btn btn-primary btn-round">View  Trades</a>
       
        <!-- <i class="material-icons">access_time</i> campaign sent 2 days ago -->
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
    } ,
    methods: {
        goToOpenTrade(){
            this.$router.push({
                name: 'ShowTrades',
                params: {
                    tradeData: this.trades, 
                    pageTitle: "All Losing Trades"
                }
            })
        }
    }
}
</script>