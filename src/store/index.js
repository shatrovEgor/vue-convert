import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        valueBtc: 0.257,
        valueEth: 1.72
    },
    mutations: {
        increment (state, n) {
            if(String(state.valueBtc).length > String(n).length){
                let col = String(state.valueBtc).length
                let buf = n + state.valueBtc
                state.valueBtc = Number(buf.toFixed(col - 2))
            } else{
                let col = String(n).length
                let buf = n + state.valueBtc
                state.valueBtc = Number(buf.toFixed(col - 2))
            }
          },
        incrementEth (state, n) {
            if(String(state.valueEth).length > String(n).length){
                let col = String(state.valueEth).length
                let buf = n + state.valueEth
                state.valueEth = Number(buf.toFixed(col - 2))
            } else{
                let col = String(n).length
                let buf = n + state.valueEth
                state.valueEth = Number(buf.toFixed(col - 2))
            }
        },
        clear(state) {
            state.valueBtc = 0
        },
        add(state, n) {
            state.valueBtc = n
        },
        cell(state, n) {
            if(state.valueBtc > n){
              if(String(state.valueBtc).length > String(n).length){
                let col = String(state.valueBtc).length
                let buf = state.valueBtc - n
                state.valueBtc = Number(buf.toFixed(col - 2))
              } else {
                let col = String(n).length
                let buf = state.valueBtc - n
                state.valueBtc = Number(buf.toFixed(col - 2))
              }
            } else {
                state.valueBtc = 0
            }
            
        },
        cellEth(state, n) {
            if(state.valueEth > n){
                if(String(state.valueEth).length > String(n).length){
                  let col = String(state.valueEth).length
                  let buf = state.valueEth - n
                  state.valueEth = Number(buf.toFixed(col - 2))
                } else {
                  let col = String(n).length
                  let buf = state.valueEth - n
                  state.valueEth = Number(buf.toFixed(col - 2))
                }
              } else {
                  state.valueEth = 0
              }
        }
    }

})