<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
        <div class="card-header card-header-success card-header-icon">
            <!-- <div class="card-icon">
            <i class="material-icons">store</i>
            </div> -->
            <p class="card-category">Current Revenue</p>
            <h3 class="card-title">{{realTimeRevenue}}
            <small>USD</small>
            </h3>
            
        </div>
        <div class="card-footer">
            <div class="stats">
            <!-- <i class="material-icons">date_range</i>  -->
            
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        realTimeRevenue: {
            type: Number ,
            required: true
        }
    }
}
</script>