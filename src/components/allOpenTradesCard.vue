<template>
    <div class="col-lg-3 col-md-6 col-sm-6" > 
        <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
                <!-- <div class="card-icon">
                <i class="fa fa-twitter"></i>
                </div> -->
                <p class="card-category">Current Open Trade</p>
                <h3 class="card-title">+{{allOpenTrades.length}}</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                <!-- <i class="material-icons">update</i> Just Updated -->
                <a  @click="goToOpenTrade" class="btn btn-primary btn-round">View All Trades</a>
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        allOpenTrades: {
            type: Array, 
            required: true
        }
    }, 
    methods: {
        goToOpenTrade(){
            this.$router.push({
                name: 'ShowTrades',
                params: {
                    tradeData: this.allOpenTrades, 
                    pageTitle: "All Open Trades"
                }
            })
        }
    }
}
</script>