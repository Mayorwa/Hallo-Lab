<template>
    <div class="page__container">
        <div class="prices">
            <div class="prices__head">
                <div class="prices__title h6">Overview</div>
            </div>
            <div class="prices_description">
                records of orders customers have placed
            </div>
            <hr class="prices__hr">
            <div class="container">
                <div class="row">
                    <div class="col--md--6 col--lg--3">
                        <div class="card card_widget">
                            <a type="button" class="card__next" href="/services">
                                <svg class="icon icon-arrow-up-right" id="icon-arrow-up-right" viewBox="0 0 10 10">
                                    <path d="M9.5 0h.012a.42.42 0 0 1 .062.005L9.5 0a.5.5 0 0 1 .105.011l.046.012.04.015.041.019.035.02.035.024.039.033.024.024a.4.4 0 0 1 .033.039L9.854.146a.5.5 0 0 1 .069.087l.02.035.019.042.014.039.012.046.006.033c.003.017.004.035.005.052V6.5a.5.5 0 0 1-.992.09L9 6.5V1.706L.854 9.854a.5.5 0 0 1-.765-.638l.058-.069L8.292 1H3.5a.5.5 0 0 1-.492-.41L3 .5a.5.5 0 0 1 .41-.492L3.5 0h6z"></path>
                                </svg>
                            </a>

                            <div class="card__inner">
                                <div class="card__img card__img-blue">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M5.5,2 L18.5,2 C19.3284271,2 20,2.67157288 20,3.5 L20,6.5 C20,7.32842712 19.3284271,8 18.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,3.5 C4,2.67157288 4.67157288,2 5.5,2 Z M11,4 C10.4477153,4 10,4.44771525 10,5 C10,5.55228475 10.4477153,6 11,6 L13,6 C13.5522847,6 14,5.55228475 14,5 C14,4.44771525 13.5522847,4 13,4 L11,4 Z" fill="#000000" opacity="0.3"/>
                                            <path d="M5.5,9 L18.5,9 C19.3284271,9 20,9.67157288 20,10.5 L20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 L4,10.5 C4,9.67157288 4.67157288,9 5.5,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L13,13 C13.5522847,13 14,12.5522847 14,12 C14,11.4477153 13.5522847,11 13,11 L11,11 Z M5.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,20.5 C20,21.3284271 19.3284271,22 18.5,22 L5.5,22 C4.67157288,22 4,21.3284271 4,20.5 L4,17.5 C4,16.6715729 4.67157288,16 5.5,16 Z M11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L13,20 C13.5522847,20 14,19.5522847 14,19 C14,18.4477153 13.5522847,18 13,18 L11,18 Z" fill="#000000"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="card__title h6">services</div>
                                <div class="card__number h4">{{statistics.services}} <span>records</span></div>
                                <a class="card__btn button button--blue-white" href="/services">view records</a>
                            </div>
                        </div>
                    </div>
                    <div class="col--md--6 col--lg--3">
                        <div class="card card_widget">
                            <a type="button" class="card__next" href="/customer">
                                <svg class="icon icon-arrow-up-right" id="icon-arrow-up-right" viewBox="0 0 10 10">
                                    <path d="M9.5 0h.012a.42.42 0 0 1 .062.005L9.5 0a.5.5 0 0 1 .105.011l.046.012.04.015.041.019.035.02.035.024.039.033.024.024a.4.4 0 0 1 .033.039L9.854.146a.5.5 0 0 1 .069.087l.02.035.019.042.014.039.012.046.006.033c.003.017.004.035.005.052V6.5a.5.5 0 0 1-.992.09L9 6.5V1.706L.854 9.854a.5.5 0 0 1-.765-.638l.058-.069L8.292 1H3.5a.5.5 0 0 1-.492-.41L3 .5a.5.5 0 0 1 .41-.492L3.5 0h6z"></path>
                                </svg>
                            </a>

                            <div class="card__inner">
                                <div class="card__img card__img-blue">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"/>
                                            <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                                            <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="card__title h6">customers</div>
                                <div class="card__number h4">{{statistics.customers}} <span>records</span></div>
                                <a class="card__btn button button--blue-white" href="/customer">view records</a>
                            </div>
                        </div>
                    </div>
                    <div class="col--md--6 col--lg--3">
                        <div class="card card_widget">
                            <a type="button" class="card__next" href="/employee">
                                <svg class="icon icon-arrow-up-right" id="icon-arrow-up-right" viewBox="0 0 10 10">
                                    <path d="M9.5 0h.012a.42.42 0 0 1 .062.005L9.5 0a.5.5 0 0 1 .105.011l.046.012.04.015.041.019.035.02.035.024.039.033.024.024a.4.4 0 0 1 .033.039L9.854.146a.5.5 0 0 1 .069.087l.02.035.019.042.014.039.012.046.006.033c.003.017.004.035.005.052V6.5a.5.5 0 0 1-.992.09L9 6.5V1.706L.854 9.854a.5.5 0 0 1-.765-.638l.058-.069L8.292 1H3.5a.5.5 0 0 1-.492-.41L3 .5a.5.5 0 0 1 .41-.492L3.5 0h6z"></path>
                                </svg>
                            </a>

                            <div class="card__inner">
                                <div class="card__img card__img-blue">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"/>
                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="card__title h6">employees</div>
                                <div class="card__number h4">{{statistics.employees}} <span>records</span></div>
                                <a class="card__btn button button--blue-white" href="/employee">view records</a>
                            </div>
                        </div>
                    </div>
                    <div class="col--md--6 col--lg--3">
                        <div class="card card_widget">
                            <a type="button" class="card__next" href="/transactions">
                                <svg class="icon icon-arrow-up-right" id="icon-arrow-up-right" viewBox="0 0 10 10">
                                    <path d="M9.5 0h.012a.42.42 0 0 1 .062.005L9.5 0a.5.5 0 0 1 .105.011l.046.012.04.015.041.019.035.02.035.024.039.033.024.024a.4.4 0 0 1 .033.039L9.854.146a.5.5 0 0 1 .069.087l.02.035.019.042.014.039.012.046.006.033c.003.017.004.035.005.052V6.5a.5.5 0 0 1-.992.09L9 6.5V1.706L.854 9.854a.5.5 0 0 1-.765-.638l.058-.069L8.292 1H3.5a.5.5 0 0 1-.492-.41L3 .5a.5.5 0 0 1 .41-.492L3.5 0h6z"></path>
                                </svg>
                            </a>

                            <div class="card__inner">
                                <div class="card__img card__img-blue">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 Z" fill="#000000" opacity="0.3"/>
                                            <path d="M18.5,11 L5.5,11 C4.67157288,11 4,11.6715729 4,12.5 L4,13 L8.58578644,13 C8.85100293,13 9.10535684,13.1053568 9.29289322,13.2928932 L10.2928932,14.2928932 C10.7456461,14.7456461 11.3597108,15 12,15 C12.6402892,15 13.2543539,14.7456461 13.7071068,14.2928932 L14.7071068,13.2928932 C14.8946432,13.1053568 15.1489971,13 15.4142136,13 L20,13 L20,12.5 C20,11.6715729 19.3284271,11 18.5,11 Z" fill="#000000"/>
                                            <path d="M5.5,6 C4.67157288,6 4,6.67157288 4,7.5 L4,8 L20,8 L20,7.5 C20,6.67157288 19.3284271,6 18.5,6 L5.5,6 Z" fill="#000000"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="card__title h6">transactions</div>
                                <div class="card__number h4">{{statistics.transactions}} <span>records</span></div>
                                <a class="card__btn button button--blue-white" href="/transactions">view records</a>
                            </div>
                        </div>
                    </div>
                    <div class="col--md--6 col--lg--3">
                        <div class="card card_widget">
                            <a type="button" class="card__next" href="/order">
                                <svg class="icon icon-arrow-up-right" id="icon-arrow-up-right" viewBox="0 0 10 10">
                                    <path d="M9.5 0h.012a.42.42 0 0 1 .062.005L9.5 0a.5.5 0 0 1 .105.011l.046.012.04.015.041.019.035.02.035.024.039.033.024.024a.4.4 0 0 1 .033.039L9.854.146a.5.5 0 0 1 .069.087l.02.035.019.042.014.039.012.046.006.033c.003.017.004.035.005.052V6.5a.5.5 0 0 1-.992.09L9 6.5V1.706L.854 9.854a.5.5 0 0 1-.765-.638l.058-.069L8.292 1H3.5a.5.5 0 0 1-.492-.41L3 .5a.5.5 0 0 1 .41-.492L3.5 0h6z"></path>
                                </svg>
                            </a>

                            <div class="card__inner">
                                <div class="card__img card__img-blue">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M5.94290508,4 L18.0570949,4 C18.5865712,4 19.0242774,4.41271535 19.0553693,4.94127798 L19.8754445,18.882556 C19.940307,19.9852194 19.0990032,20.9316862 17.9963398,20.9965487 C17.957234,20.9988491 17.9180691,21 17.8788957,21 L6.12110428,21 C5.01653478,21 4.12110428,20.1045695 4.12110428,19 C4.12110428,18.9608266 4.12225519,18.9216617 4.12455553,18.882556 L4.94463071,4.94127798 C4.97572263,4.41271535 5.41342877,4 5.94290508,4 Z" fill="#000000" opacity="0.3"/>
                                            <path d="M7,7 L9,7 C9,8.65685425 10.3431458,10 12,10 C13.6568542,10 15,8.65685425 15,7 L17,7 C17,9.76142375 14.7614237,12 12,12 C9.23857625,12 7,9.76142375 7,7 Z" fill="#000000"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="card__title h6">orders</div>
                                <div class="card__number h4">{{statistics.orders}} <span>records</span></div>
                                <a class="card__btn button button--blue-white" href="/order">view records</a>
                            </div>
                        </div>
                    </div>
                    <div class="col--md--6 col--lg--3">
                        <div class="card card_widget">
                            <a type="button" class="card__next" href="/office">
                                <svg class="icon icon-arrow-up-right" id="icon-arrow-up-right" viewBox="0 0 10 10">
                                    <path d="M9.5 0h.012a.42.42 0 0 1 .062.005L9.5 0a.5.5 0 0 1 .105.011l.046.012.04.015.041.019.035.02.035.024.039.033.024.024a.4.4 0 0 1 .033.039L9.854.146a.5.5 0 0 1 .069.087l.02.035.019.042.014.039.012.046.006.033c.003.017.004.035.005.052V6.5a.5.5 0 0 1-.992.09L9 6.5V1.706L.854 9.854a.5.5 0 0 1-.765-.638l.058-.069L8.292 1H3.5a.5.5 0 0 1-.492-.41L3 .5a.5.5 0 0 1 .41-.492L3.5 0h6z"></path>
                                </svg>
                            </a>

                            <div class="card__inner">
                                <div class="card__img card__img-blue">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M13.5,21 L13.5,18 C13.5,17.4477153 13.0522847,17 12.5,17 L11.5,17 C10.9477153,17 10.5,17.4477153 10.5,18 L10.5,21 L5,21 L5,4 C5,2.8954305 5.8954305,2 7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,21 L13.5,21 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,6 C8,6.55228475 8.44771525,7 9,7 L10,7 C10.5522847,7 11,6.55228475 11,6 L11,5 C11,4.44771525 10.5522847,4 10,4 L9,4 Z M14,4 C13.4477153,4 13,4.44771525 13,5 L13,6 C13,6.55228475 13.4477153,7 14,7 L15,7 C15.5522847,7 16,6.55228475 16,6 L16,5 C16,4.44771525 15.5522847,4 15,4 L14,4 Z M9,8 C8.44771525,8 8,8.44771525 8,9 L8,10 C8,10.5522847 8.44771525,11 9,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,9 C11,8.44771525 10.5522847,8 10,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 L8,14 C8,14.5522847 8.44771525,15 9,15 L10,15 C10.5522847,15 11,14.5522847 11,14 L11,13 C11,12.4477153 10.5522847,12 10,12 L9,12 Z M14,12 C13.4477153,12 13,12.4477153 13,13 L13,14 C13,14.5522847 13.4477153,15 14,15 L15,15 C15.5522847,15 16,14.5522847 16,14 L16,13 C16,12.4477153 15.5522847,12 15,12 L14,12 Z" fill="#000000"/>
                                            <rect fill="#FFFFFF" x="13" y="8" width="3" height="3" rx="1"/>
                                            <path d="M4,21 L20,21 C20.5522847,21 21,21.4477153 21,22 L21,22.4 C21,22.7313708 20.7313708,23 20.4,23 L3.6,23 C3.26862915,23 3,22.7313708 3,22.4 L3,22 C3,21.4477153 3.44771525,21 4,21 Z" fill="#000000" opacity="0.3"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="card__title h6">offices</div>
                                <div class="card__number h4">{{statistics.offices}} <span>records</span></div>
                                <a class="card__btn button button--blue-white" href="/office">view records</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'overview',
        data() {
            return {
                statistics: {
                    offices: 3,
                    services: 7,
                    customers: 121,
                    employees: 64,
                    transactions: 1064,
                    orders: 1082,
                },
            }
        }
    }
</script>
