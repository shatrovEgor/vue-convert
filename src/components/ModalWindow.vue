<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
            <div class="modal-close" @click="closeModal">&#10006;</div>
            <slot name="title">
                <h3 class="modal-title">Операции с BTC</h3>
            </slot>
            <slot name="body">
                <div class="modal-content">
                    <p>Ваш балланс: {{calcBalance()}} BTC</p>
                    <p>Стоимость в USD: {{price}}</p>
                </div>
                <div class="buy">
                    <p>Купить:</p>
                    <input 
                        type="number" 
                        id="buy"
                        v-model="buy"/>
                    <p>Продать:</p>
                    <input 
                        type="number" 
                        id="buy"
                        v-model="sell"
                        />
                </div>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <button class="modal-footer__button" @click="buying ">
                        Buy
                    </button>
                    <button class="modal-footer__button" @click="selling">
                        Sell
                    </button>
                </div>
            </slot>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: "ModalWindow",
        props: {
            price: {
                type: NaN,
                default: null
            }
        },
        data: function () {
            return {
                show: false,
                balanceBtc: 0,
                sell: 0,
                buy: 0,
                sum: 0,
            }
        },
        methods: {
            closeModal: function () {
                this.show = false
            },
            calcBalance() {
                this.balanceBtc = this.$store.state.valueBtc
                return this.balanceBtc
            },
            buying() {
                this.$store.commit('increment', Number(this.buy))
                console.log(this.$store.state.valueBtc)
            },
            selling() {
                this.$store.commit('cell', Number(this.sell))
                console.log(this.$store.state.valueBtc)
            }
            
            
        },
    }
</script>
 
<style scoped
       lang="scss">
       .buy {
        display: flex;
    }
    #buy {
        width: 100px;
        height: 30px;
        border: 1px solid rgb(180, 175, 175);
        border-radius: 3px;
        margin: 0px 10px;
    }
    .modal-shadow {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
    }
    .modal-footer__button:hover {
        opacity: 0.8;
    }
 
    .modal {
        background: #fff;
        border-radius: 8px;
        padding: 15px;
        min-width: 420px;
        max-width: 480px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
 
        &-close {
            border-radius: 50%;
            color: #fff;
            background: orange;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
 
        &-title {
            color: black;
            text-align: center;
            margin-bottom: 5px
        }
 
        &-content {
            margin-bottom: 20px
        }
 
        &-footer {
            &__button {
                background-color: orange;
                color: #fff;
                border: none;
                text-align: center;              
                padding: 10px;
                font-size: 17px;
                font-weight: 500;
                border-radius: 8px;
                min-width: 150px;
                margin: 0 22px;
            }
        }
    }
</style>