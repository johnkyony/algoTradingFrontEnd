import axios from 'axios'

const apiUrl = 'http://192.168.0.161:5000/tradingBot/'

const forexAccountSummary = async function () {
    try {
        let forexAccountSummary = await axios.get(apiUrl + `defaultForexAccountsummary`)
        return forexAccountSummary.data

    } catch (error) {
        console.log(error.message)
    }    

}
const closeTrade = async function (tradeSpecifier) {
    try {
        console.log('functions')
        console.log(tradeSpecifier)
        let closeTrade = await axios.post(apiUrl + `closeTrade` , {
            tradeSpecifier: tradeSpecifier
        })
        console.log(closeTrade.data)
        return closeTrade.data
        
    } catch (error) {
        console.log(error.message)
    }
}
const allOpenTrades = async () => {
    try {
        
        let allOpenTrades = await axios.get(apiUrl + `allOpenTrades`)
        
        return allOpenTrades.data.trades
    } catch (error) {
        console.log(error.message)
    }
}

const allPendingTrades = async () => {
    try{
        let allPendingTrades = await axios.get(apiUrl + `allPendingOrders`)
        return allPendingTrades.data.orders

    }catch (error){
        console.log(error.message)
    }
}

const closeAllTrades = async (trades) => {
    try {
        let closeAllTrades = await axios.post(apiUrl + `closeAllTrades` , {
            trades: trades
        })
        return closeAllTrades.data
    } catch (error) {
        console.log(error.message)
    }
}

export default {
    forexAccountSummary,
    closeTrade ,  
    allOpenTrades , 
    allPendingTrades,
    closeAllTrades
}