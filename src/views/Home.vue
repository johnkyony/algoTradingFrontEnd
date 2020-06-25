<template>
          <div class="container-fluid">
          <div class="row">
            <transition name="fade">
              
                <div v-if="loadingStatus" class="spinner-border" role="status">
                   <span class="sr-only">Loading...</span>
                </div>
            </transition>
            <account-detail :accountDetails="defaultAccountDetails"></account-detail>
            <current-revenue :realTimeRevenue="realTimeRevenue"></current-revenue>
            <current-stock-portfolio :positions="setAllOpenPositions"></current-stock-portfolio>
            <all-open-trades :allOpenTrades="setAllOpenTrades"></all-open-trades>
          </div>
          <div class="row">
            <profitable-trades :trades="profitableTrades"></profitable-trades>
            <lossing-trades :trades="lossingTrades"></lossing-trades>
            <total-pending-trades :trades="setAllPendingTrades"></total-pending-trades>
          </div>
          <div class="row">
            <trading-table :trades="lastTenLossingTrades" categoryTitle="Top Ten Losing Trades"></trading-table>
            <trading-table :trades="topTenWinningTrades" categoryTitle="Top Ten Winning Trades"></trading-table>
          </div>
        </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import tradingTable from '@/components/tradingTable.vue'
import accountDetail from '@/components/acccountDetailsCard.vue'
import currentRevenue from '@/components/currentRevenueCard.vue'
import currentStockPortfolio from '@/components/currentStockPortfolioCard.vue'
import allOpenTrades from '@/components/allOpenTradesCard.vue'
import profitableTrades from '@/components/profitableTradesCard.vue'
import lossingTrades from '@/components/lossingTradesCard.vue'
import totalPendingTrades from '@/components/totalPendingTradesCard.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld , 
    tradingTable,
    accountDetail,
    currentRevenue,
    currentStockPortfolio,
    allOpenTrades,
    profitableTrades,
    lossingTrades,
    totalPendingTrades
  } , 
  computed: {
    setAllOpenPositions(){
      return this.$store.getters["allOpenPositions"]
    },
    setAllPendingTrades(){
      return this.$store.getters["allPendingTrades"]
    },
    setAllOpenTrades(){
      
      return this.$store.getters["allOpenTrades"]
    } , 
    defaultAccountDetails(){
      return this.$store.getters["defaultAccountDetails"]
    } , 
    realTimeRevenue(){
      return this.$store.getters["realTimeRevenue"]
    } , 
    profitableTrades(){
      return this.$store.getters["profitableTrades"]
    } , 
    lossingTrades() {
      return this.$store.getters["lossingTrades"]
    } , 
    lastTenLossingTrades(){
      return this.$store.getters["lastTenLossingTrades"]
    }, 
    topTenWinningTrades(){
      return this.$store.getters["topTenWinningTrades"]
    }, 
    loadingStatus(){
      return this.$store.getters["loadingStatus"]
    } 
  },
  async created(){
    let initApp =  this.$store.dispatch("initApp")
   
  }
}
</script>
