<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
        <div class="card-header card-header-danger card-header-icon">
            <!-- <div class="card-icon">
            <i class="material-icons">info_outline</i>
            </div> -->
            <p class="card-category"> All Positions</p>
            <h3 class="card-title">{{positions.length}}</h3>
        </div>
        <div class="card-footer">
            <div class="stats">
            <!-- <i class="material-icons">local_offer</i> Tracked from Github -->
            
            <a  @click="goToOpenTrade" class="btn btn-primary btn-round">View  Positions</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        positions: {
            type: Array,
            required: true
        }
    },
    methods: {
        goToOpenTrade(){
            this.$router.push({
                name: 'ShowOpenPositions', 
                params: {
                    positionData: this.positions,
                    pageTitle: "All Positions"
                }
            })
        }
    }
}
</script>
