<template>
    <div class="page__container">
        <div class="prices">
            <div class="prices__head">
                <div class="prices__title h6">Customers</div>
                <a class="button button--success" @click="showModal = true">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
                            <path d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z" fill="#000000"></path>
                        </g>
                    </svg>
                    <span>
                        create
                    </span>
                </a>
            </div>
            <div class="prices_description">
                records of customers registered under hallo labs
            </div>
            <transition name="fade" >
                <div class="modal-mask" v-if="showModal">
                    <div class="modal-wrapper">
                        <div class="modal-container">

                            <div class="modal-header">
                                <div class="modal__title h6">
                                    Create customer
                                </div>
                                <button type="button" class="modal-close" @click="showModal = false">×</button>
                            </div>

                            <div class="modal-body">
                                <div class="modal__fieldset">
                                    <div class="modal__row">
                                        <div class="modal__field">
                                            <div class="modal__label">name</div>
                                            <div class="modal__wrap"><input class="modal__input" type="text"></div>
                                        </div>
                                        <div class="modal__field">
                                            <div class="modal__label">phone number</div>
                                            <div class="modal__wrap"><input class="modal__input" type="number"></div>
                                        </div>
                                    </div>
                                    <div class="modal__row">
                                        <div class="modal__field">
                                            <div class="modal__label">city</div>
                                            <div class="modal__wrap"><input class="modal__input" type="text"></div>
                                        </div>
                                        <div class="modal__field">
                                            <div class="modal__label">country</div>
                                            <div class="modal__wrap"><input class="modal__input" type="text"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="modal__field">
                                            <div class="modal__label">description</div>
                                            <div class="modal__wrap">
                                                <textarea name="" id="" cols="30" class="modal__input" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button class="modal__btn button button--red-transparent" @click="showModal = false" type="submit">discard</button>
                                <button class="modal__btn button button--success" type="submit">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"/>
                                            <path d="M17,4 L6,4 C4.79111111,4 4,4.7 4,6 L4,18 C4,19.3 4.79111111,20 6,20 L18,20 C19.2,20 20,19.3 20,18 L20,7.20710678 C20,7.07449854 19.9473216,6.94732158 19.8535534,6.85355339 L17,4 Z M17,11 L7,11 L7,4 L17,4 L17,11 Z" fill="#000000" fill-rule="nonzero"/>
                                            <rect fill="#000000" opacity="0.3" x="12" y="4" width="3" height="5" rx="0.5"/>
                                        </g>
                                    </svg>
                                    save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" >
                <div class="modal-mask" v-if="deleteModal">
                    <div class="modal-wrapper">
                        <div class="modal-container delete-modal">

                            <div class="modal-header">
                                <button type="button" class="modal-close" @click="deleteModal = false">×</button>
                            </div>

                            <div class="modal-body">
                                <div class="modal__fieldset">
                                    <img src="@/assets/img/warning-red.png" class="modal__img"/>
                                    <h6>
                                        delete customer (# {{deleteItem}})?
                                    </h6>
                                    <p>
                                        are you sure you want to delete this record, this is an irreversible action?
                                    </p>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button class="modal__btn button button--blue-transparent" @click="deleteModal = false" type="submit">discard</button>
                                <button class="modal__btn button button--red-white" @click="deleteInfo(['yo'])" type="submit">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M6,8 L18,8 L17.106535,19.6150447 C17.04642,20.3965405 16.3947578,21 15.6109533,21 L8.38904671,21 C7.60524225,21 6.95358004,20.3965405 6.89346498,19.6150447 L6,8 Z M8,10 L8.45438229,14.0894406 L15.5517885,14.0339036 L16,10 L8,10 Z" fill="#000000" fill-rule="nonzero"/>
                                            <path d="M14,4.5 L14,3.5 C14,3.22385763 13.7761424,3 13.5,3 L10.5,3 C10.2238576,3 10,3.22385763 10,3.5 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>
                                        </g>
                                    </svg>
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <hr class="prices__hr">
            <div class="prices__container">
                <p v-if="loading">Loading customers ...</p>
                <div v-else class="prices__table">
                    <div class="prices__row prices__row_head">
                        <div class="prices__cell">#</div>
                        <div class="prices__cell">name</div>
                        <div class="prices__cell">phone number</div>
                        <div class="prices__cell">address</div>
                        <div class="prices__cell">city</div>
                        <div class="prices__cell">country</div>
                        <div class="prices__cell">creation date</div>
                        <div class="prices__cell">actions</div>
                    </div>
                    <div v-for="(customer, index) in customers" class="prices__row" :key="index">
                        <div class="prices__cell"><a class="primary">{{customer.id}}</a></div>
                        <div class="prices__cell">{{customer.name}}</div>
                        <div class="prices__cell">{{customer.phone}}</div>
                        <div class="prices__cell prices__description">
                            <p>
                                {{customer.address}}
                            </p>
                        </div>
                        <div class="prices__cell">
                            {{customer.city}}
                        </div>
                        <div class="prices__cell">
                            {{customer.country}}
                        </div>
                        <div class="prices__cell">{{ moment(String(customer.created_at)).format('MMMM Do YYYY, h:mm:ss a')}}</div>
                        <div class="prices__cell prices__btns">
                            <a class="button button--blue-white">view details</a>
                            <a class="button button--red-white" @click="toggleDeleteModal(customer.id)">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M6,8 L18,8 L17.106535,19.6150447 C17.04642,20.3965405 16.3947578,21 15.6109533,21 L8.38904671,21 C7.60524225,21 6.95358004,20.3965405 6.89346498,19.6150447 L6,8 Z M8,10 L8.45438229,14.0894406 L15.5517885,14.0339036 L16,10 L8,10 Z" fill="#000000" fill-rule="nonzero"/>
                                        <path d="M14,4.5 L14,3.5 C14,3.22385763 13.7761424,3 13.5,3 L10.5,3 C10.2238576,3 10,3.22385763 10,3.5 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>
                                    </g>
                                </svg>
                                delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const moment = require('moment');
    export default {
        name: 'customer',
        data() {
            return {
                moment: moment,
                loading: false,
                showModal: false,
                deleteModal: false,
                selectedItem: {},
                deleteItem: 0,
                customers: [
                    {
                        id: 1,
                        name: "David peoples",
                        phone: "09011223355",
                        address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
                        city: 'Lagos',
                        country: 'Nigeria',
                        created_at: '12-3-2019 14:20:34',
                    },
                    {
                        id: 2,
                        name: "Justina Power",
                        phone: "08100223355",
                        address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
                        city: 'Abuja',
                        country: 'Nigeria',
                        created_at: '1-7-2018 03:34:02',
                    }
                ],
            }
        },
        methods: {
            sendInfo(item) {
                this.selectedItem = item;
                this.showModal = false
            },
            toggleDeleteModal(item){
                this.deleteItem = item;
                this.deleteModal = true;
            },
            deleteInfo(item){
                console.log(item);
            }
        }
    }
</script>
