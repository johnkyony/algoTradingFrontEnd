<template>
                <div class="col-lg-12 col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Positions</h4>
                  <p class="card-category">{{categoryTitle}}</p>
                </div>
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <thead class="text-black">
                      <th>Instrument</th>
                      <th>Profit/Loss</th>
                      <th>UnrealizedPL</th>
                      <!-- <th> <a  class="btn btn-danger btn-round">Close All positions</a></th> -->
                      
                    </thead>
                    <tbody>
                      <tr v-for="position in positions" :key= position>
                        
                        <td>{{position.instrument}}</td>
                        <td>{{position.pl}} USD</td>
                        <td>{{position.unrealizedPL}} USD</td>
                        
                        <!-- <td> <a   class="btn btn-primary btn-round">Close</a></td> -->
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
        positions: {
            type: Array , 
            required: true
        }, 
        categoryTitle: {
            type: String,
            required: true
        }
    },
    methods: {
      closeposition(positionId){
        
        this.$store.dispatch("closePendingposition" , positionId)
      } , 
      closeAllpositions(){
        this.$store.dispatch("closeAllPendingpositions" , this.positions)
      }
    }
}
</script>