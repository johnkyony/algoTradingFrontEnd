import Vue from 'vue'
import Vuex from 'vuex'
import tradingBotApiFunctions from './utils/tradingBotApiFunctions.js'

Vue.use(Vuex)

const minute = 2500
const interval = 1

export default new Vuex.Store({
  state: {
    allOpenTrades: [],
    allPendingTrades: [],
    defaultAccountDetails: {}
  },
  mutations: {
    setAllOpenTrades(state, val){
      state.allOpenTrades = val
    },
    setAllPendingTrades(state, val){
      state.allPendingTrades = val
    },
    setDefaultAccountDetails(state , val){
      state.defaultAccountDetails = val
    }
  },
  actions: {
    async setAllPendingTrades(context) {
      setInterval(async () => {
        try {
          let allPendingTrades = await tradingBotApiFunctions.allPendingTrades()
          let settingAllPendingTrades = await context.commit("setAllPendingTrades" , allPendingTrades)
        } catch (error) {
          console.log(error.message)
        }
      } , minute)
    },
    async setAllOpenTrades(context){
      setInterval(async () => {
       try {
         let allOpenTrades = await tradingBotApiFunctions.allOpenTrades()
          let settingAllOpenTrades = await context.commit("setAllOpenTrades" , allOpenTrades)
         
        } catch (error) {
          console.log(error.message)
        }
   
      } , minute)
      
       
     },
     async setDefaultAccountDetails(context) {
       setInterval(async () => {
        try {
          let setDefaultAccountDetails = await tradingBotApiFunctions.forexAccountSummary()
          let settingDefaultAccountDetails = await context.commit("setDefaultAccountDetails" , setDefaultAccountDetails)
         
        } catch (error) {
          console.log(error.message)
        }

       } , minute)
       
       
     }, 
     async closeTrade(context , val) {
       try {
         let closingTrade = await tradingBotApiFunctions.closeTrade(val)
         console.log("action")
         console.log(val)
        
       } catch (error) {
         console.log(error.message)
       }
     },
     async closeAllTrades(context , val){
       try {
         let allTradeIds = val.map(trade => trade.id)
         let closingAllTrade = await tradingBotApiFunctions.closeAllTrades(allTradeIds)
       } catch (error) {
         console.log(error.message)
       }
     }
  },
  modules: {
  }, 
  getters: {
    allPendingTrades: state => {
      return state.allPendingTrades
    },
    allOpenTrades: state => {
      return state.allOpenTrades.sort((a,b) =>  b - a)
    },
    defaultAccountDetails: state => {
      return state.defaultAccountDetails
    }, 
    realTimeRevenue: state => {
      const trades = state.allOpenTrades 
      let tradeAmounts = trades.map((trade) => {
        return Number(trade.unrealizedPL)
      })
      let total = tradeAmounts.reduce((previous , current) => {
        return previous + current
      })
      return total
    }, 
    profitableTrades: state => {
      const trades = state.allOpenTrades 
      let profitableTrades = trades.filter((trade) => {
        return (trade.unrealizedPL > 0) 
      })
      return profitableTrades
    } , 
    lossingTrades: state => {
      const trades = state.allOpenTrades 
      let lossingTrades = trades.filter((trade) => {
        return (trade.unrealizedPL < 0)
      })
      return lossingTrades
    } , 
    lastTenLossingTrades: state => {
      let trades = state.allOpenTrades 
      let lossingTrades = trades.filter((trade) => {
        return (trade.unrealizedPL < 0)
      })
      let sortedLossingTrades = lossingTrades.sort((a,b) =>  b - a)
      
      return sortedLossingTrades.slice(Math.max(lossingTrades.length - 10 , 0))
    } , 
    topTenWinningTrades: state => {
      const trades = state.allOpenTrades 
      let profitableTrades = trades.filter((trade) => {
        return (trade.unrealizedPL > 0) 
      })
      let sortedProfitableTrades = profitableTrades.sort((a,b) => b - a)

      return sortedProfitableTrades.slice(0 , 10)
    }
  }
})
