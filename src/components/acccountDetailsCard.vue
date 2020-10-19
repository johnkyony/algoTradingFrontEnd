<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
        <div class="card-header card-header-warning card-header-icon">
            <!-- <div class="card-icon">
            <i class="material-icons">content_copy</i>
            </div> -->
            <p class="card-category">Total Profit & Loss </p>
            <h3 class="card-title">{{accountDetails.account.pl}}
            <small>USD</small>
            </h3>
        </div>
        <div class="card-footer">
            <div class="stats">
            <!-- <i class="material-icons text-danger">warning</i> -->
            
            <!-- <a   class="btn btn-primary btn-round">View Account Details</a> -->
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accountDetails: {
            type: Object,
            required: true 
        }
    }
}
</script>