<template>
    <div class="text-start text-body-secondary">
        <form @submit.prevent="confirmOrder">
            <div class="row g-3">
                <h4 class="mb-3">Billing address</h4>
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Juan" required=""
                        v-model="client.name">
                    <div class="invalid-feedback">
                        Nombre válido es requerido.
                    </div>
                </div>

                <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Perez" required=""
                        v-model="client.lastname">
                    <div class="invalid-feedback">
                        Apellido válido es requerido.
                    </div>
                </div>

                <div class="col-12">
                    <label for="email" class="form-label">Email <span
                            class="text-body-secondary">(Opcional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com"
                        v-model="client.email">
                    <div class="invalid-feedback">
                        Ingrese un email válido.
                    </div>
                </div>

                <div class="col-12">
                    <label for="address" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""
                        v-model="client.address">
                    <div class="invalid-feedback">
                        Ingrese su dirección.
                    </div>
                </div>

            </div>

            <hr class="my-4">

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address" v-model="client.sameAddress">
                <label class="form-check-label" for="same-address">Dirección de despacho es la misma que la de
                    facturación</label>
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-info" v-model="client.saveInfo">
                <label class="form-check-label" for="save-info">Guardar esta información para la próxima vez</label>
            </div>

            <hr class="my-4">

            <h4 class="mb-3">Método de pago</h4>

            <div class="my-3">
                <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""
                        value="credit" v-model="client.payment.method">
                    <label class="form-check-label" for="credit">Tarjeta de crédito</label>
                </div>
                <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""
                        value="debit" v-model="client.payment.method">
                    <label class="form-check-label" for="debit">Tarjeta de débito</label>
                </div>
                <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""
                        value="paypal" v-model="client.payment.method">
                    <label class="form-check-label" for="paypal">PayPal</label>
                </div>
            </div>

            <div class="row gy-3">
                <div class="col-md-6">
                    <label for="cc-name" class="form-label">Nombre del titular</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required=""
                        v-model="client.payment.nameOnCard">
                    <small class="text-body-secondary">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                        Nombre del titular es requerido
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="cc-number" class="form-label">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required=""
                        v-model="client.payment.creditCardNumber">
                    <div class="invalid-feedback">
                        Numero de la tarjeta de crédito es requerido
                    </div>
                </div>

                <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">Fecha de Expiración</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""
                        v-model="client.payment.expirationDate">
                    <div class="invalid-feedback">
                        Fecha de expiración es requerida.
                    </div>
                </div>

                <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""
                        v-model="client.payment.cvv">
                    <div class="invalid-feedback">
                        Código de seguridad es requerido
                    </div>
                </div>
            </div>

            <hr class="my-4">

            <button class="w-100 btn btn-primary btn-lg" type="submit">Confirmar compra</button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
    name: 'component-name',
    // props: {},
    data: function () {
        return {
            client: {
                name: '',
                lastname: '',
                email: '',
                address: '',
                sameAddress: true,
                saveInfo: false,
                payment: {
                    method: '',
                    nameOnCard: '',
                    creditCardNumber: '',
                    expirationDate: '',
                    cvv: ''
                }
            }
        }
    },
    computed: {
        ...mapGetters(['cartProductTotal'])
    },
    methods: {
        confirmOrder() {
            let orderId = uuidv4();
            let order = {
                id: orderId,
                client: { ...this.client },
                products: this.cartProductTotal
            }
            this.$emit('confirmOrderSubmit', order)
        }
    },
}
</script>

<style scoped></style>