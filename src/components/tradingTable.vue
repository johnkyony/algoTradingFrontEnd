<template>
                <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Trades</h4>
                  <p class="card-category">{{categoryTitle}}</p>
                </div>
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <thead class="text-warning">
                      <th>Instrument</th>
                      <th>Price</th>
                      <th>UnrealizedPL</th>
                      
                      <th></th>
                      
                    </thead>
                    <tbody>
                      <tr v-for="trade in trades" :key= trade.id>
                        
                        <td>{{trade.instrument}}</td>
                         <td>{{trade.price}}</td>
                        <td>$ {{trade.unrealizedPL}}</td>
                       
                        <td> <a  @click="closeTrade(trade.id)" class="btn btn-primary btn-round">Close</a></td>
                      </tr>
      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
</template>

<script>
export default {
    props: {
        trades: {
            type: Array , 
            required: true
        }, 
        categoryTitle: {
            type: String,
            required: true
        }
    },
    methods: {
      closeTrade(tradeId){
        
        this.$store.dispatch("closeTrade" , tradeId)
      }
    }
}
</script>