<template>
<div class="col-md-4">
    <div class="card card-chart">
    <!-- <div class="card-header card-header-danger">
        <div class="ct-chart" id="completedTasksChart"></div>
    </div> -->
    <div class="card-body">
        <h4 class="card-title">Total Pending Trades</h4>
        <p class="card-category text-warning">{{trades.length}}</p>
    </div>
    <div class="card-footer">
        <div class="stats">
        <!-- <i class="material-icons">access_time</i> campaign sent 2 days ago -->
        
        <a @click="goToOpenTrade" class="btn btn-primary btn-round">View  Trades</a>

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
                name: 'ShowPendingTrades',
                params: {
                    tradeData: this.trades, 
                    pageTitle: "All Pending Trades"
                }
            })
        }
    }
}
</script>