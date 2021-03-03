<template>
    <div class="sidebar">
        <div class="sidebar__head">
            <a class="sidebar__logo">
                <img class="sidebar__pic sidebar__pic_light" src="@/assets/img/logo.svg" alt="" />
                <img class="sidebar__pic sidebar__pic_dark" src="@/assets/img/logo-white.svg" alt="" />
            </a>
            <button class="sidebar__toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M22 12H3" stroke="#11142d"></path>
                    <g stroke="#808191">
                        <path d="M22 4H13"></path>
                        <path opacity=".301" d="M22 20H13"></path>
                    </g>
                    <path d="M7 7l-5 5 5 5" stroke="#11142d"></path>
                </svg>
            </button>
            <button class="sidebar__close">
                <svg class="icon icon-close">
                    <use xlink:href="@/assets/img/sprite.svg#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="sidebar__body">
            <nav class="sidebar__nav">
                <a class="sidebar__item active">
                    <div class="sidebar__icon">
                        <svg class="icon icon-home" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="icon-home">
                            <path d="M6.714 12.016a3.21 3.21 0 0 1 3.199 3.221v3.293a3.21 3.21 0 0 1-3.199 3.22H3.448A3.21 3.21 0 0 1 .25 18.53v-3.293a3.21 3.21 0 0 1 3.199-3.221zm11.838 0a3.21 3.21 0 0 1 3.198 3.221v3.293a3.21 3.21 0 0 1-3.198 3.22h-3.267a3.21 3.21 0 0 1-3.199-3.22v-3.293a3.21 3.21 0 0 1 3.199-3.221zm-11.838 1.5H3.449a1.71 1.71 0 0 0-1.699 1.721v3.293a1.71 1.71 0 0 0 1.699 1.72h3.266a1.71 1.71 0 0 0 1.699-1.72v-3.293a1.71 1.71 0 0 0-1.699-1.721zm11.838 0h-3.267a1.71 1.71 0 0 0-1.699 1.721v3.293a1.71 1.71 0 0 0 1.699 1.72h3.267a1.71 1.71 0 0 0 1.698-1.72v-3.293a1.71 1.71 0 0 0-1.698-1.721zm0-13.266a3.21 3.21 0 0 1 3.198 3.22v3.294c0 1.776-1.431 3.22-3.198 3.22h-3.267c-1.768 0-3.199-1.444-3.199-3.22V3.47a3.21 3.21 0 0 1 3.2-3.22zM6.714.25a3.21 3.21 0 0 1 3.199 3.22v3.294c0 1.776-1.431 3.22-3.199 3.22H3.448C1.681 9.984.25 8.54.25 6.764V3.47A3.21 3.21 0 0 1 3.449.25zm11.838 1.5h-3.267a1.71 1.71 0 0 0-1.699 1.72v3.294a1.71 1.71 0 0 0 1.699 1.72h3.267a1.71 1.71 0 0 0 1.698-1.72V3.47a1.71 1.71 0 0 0-1.698-1.72zm-11.838 0H3.449A1.71 1.71 0 0 0 1.75 3.47v3.294a1.71 1.71 0 0 0 1.699 1.72h3.266a1.71 1.71 0 0 0 1.699-1.72V3.47a1.71 1.71 0 0 0-1.699-1.72z"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">Overview</div>
                </a>
                <a class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon icon-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="icon-home">
                            <path d="M15.686.25c3.646 0 6.064 2.598 6.064 6.335v8.83c0 3.737-2.419 6.335-6.064 6.335H6.315C2.669 21.75.25 19.152.25 15.415v-8.83C.25 2.851 2.675.25 6.314.25zm0 1.5H6.314c-2.786 0-4.564 1.907-4.564 4.835v8.83c0 2.932 1.772 4.835 4.564 4.835h9.371c2.792 0 4.564-1.903 4.564-4.835v-8.83c0-2.932-1.772-4.835-4.564-4.835zM6.371 8.452a.75.75 0 0 1 .743.648l.007.102v6.86a.75.75 0 0 1-1.493.102l-.007-.102v-6.86a.75.75 0 0 1 .75-.75zm4.667-3.283a.75.75 0 0 1 .743.648l.007.102v10.143a.75.75 0 0 1-1.493.102l-.007-.102V5.919a.75.75 0 0 1 .75-.75zm4.591 6.908a.75.75 0 0 1 .743.648l.007.102v3.235a.75.75 0 0 1-1.493.102l-.007-.102v-3.235a.75.75 0 0 1 .75-.75z"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">Employees</div>
                </a>
                <a class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon icon-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="icon-home">
                            <path d="M15.686.25c3.646 0 6.064 2.598 6.064 6.335v8.83c0 3.737-2.419 6.335-6.064 6.335H6.315C2.669 21.75.25 19.152.25 15.415v-8.83C.25 2.851 2.675.25 6.314.25zm0 1.5H6.314c-2.786 0-4.564 1.907-4.564 4.835v8.83c0 2.932 1.772 4.835 4.564 4.835h9.371c2.792 0 4.564-1.903 4.564-4.835v-8.83c0-2.932-1.772-4.835-4.564-4.835zM6.371 8.452a.75.75 0 0 1 .743.648l.007.102v6.86a.75.75 0 0 1-1.493.102l-.007-.102v-6.86a.75.75 0 0 1 .75-.75zm4.667-3.283a.75.75 0 0 1 .743.648l.007.102v10.143a.75.75 0 0 1-1.493.102l-.007-.102V5.919a.75.75 0 0 1 .75-.75zm4.591 6.908a.75.75 0 0 1 .743.648l.007.102v3.235a.75.75 0 0 1-1.493.102l-.007-.102v-3.235a.75.75 0 0 1 .75-.75z"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">Customers</div>
                </a>
                <a class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon icon-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="icon-home">
                            <path d="M15.686.25c3.646 0 6.064 2.598 6.064 6.335v8.83c0 3.737-2.419 6.335-6.064 6.335H6.315C2.669 21.75.25 19.152.25 15.415v-8.83C.25 2.851 2.675.25 6.314.25zm0 1.5H6.314c-2.786 0-4.564 1.907-4.564 4.835v8.83c0 2.932 1.772 4.835 4.564 4.835h9.371c2.792 0 4.564-1.903 4.564-4.835v-8.83c0-2.932-1.772-4.835-4.564-4.835zM6.371 8.452a.75.75 0 0 1 .743.648l.007.102v6.86a.75.75 0 0 1-1.493.102l-.007-.102v-6.86a.75.75 0 0 1 .75-.75zm4.667-3.283a.75.75 0 0 1 .743.648l.007.102v10.143a.75.75 0 0 1-1.493.102l-.007-.102V5.919a.75.75 0 0 1 .75-.75zm4.591 6.908a.75.75 0 0 1 .743.648l.007.102v3.235a.75.75 0 0 1-1.493.102l-.007-.102v-3.235a.75.75 0 0 1 .75-.75z"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">Transactions</div>
                </a>
                <a class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon icon-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="icon-home">
                            <path d="M15.686.25c3.646 0 6.064 2.598 6.064 6.335v8.83c0 3.737-2.419 6.335-6.064 6.335H6.315C2.669 21.75.25 19.152.25 15.415v-8.83C.25 2.851 2.675.25 6.314.25zm0 1.5H6.314c-2.786 0-4.564 1.907-4.564 4.835v8.83c0 2.932 1.772 4.835 4.564 4.835h9.371c2.792 0 4.564-1.903 4.564-4.835v-8.83c0-2.932-1.772-4.835-4.564-4.835zM6.371 8.452a.75.75 0 0 1 .743.648l.007.102v6.86a.75.75 0 0 1-1.493.102l-.007-.102v-6.86a.75.75 0 0 1 .75-.75zm4.667-3.283a.75.75 0 0 1 .743.648l.007.102v10.143a.75.75 0 0 1-1.493.102l-.007-.102V5.919a.75.75 0 0 1 .75-.75zm4.591 6.908a.75.75 0 0 1 .743.648l.007.102v3.235a.75.75 0 0 1-1.493.102l-.007-.102v-3.235a.75.75 0 0 1 .75-.75z"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">Services</div>
                </a>
            </nav>
        </div>
        <div class="sidebar__bottom">
            <a class="sidebar__item">
                <div class="sidebar__icon">
                    <svg class="icon icon-logout" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="icon-home">
                        <path d="M14.334.25c3.486 0 5.916 2.262 5.916 5.666v8.67c0 3.404-2.43 5.665-5.916 5.665H6.166C2.683 20.25.25 17.982.25 14.585v-8.67C.25 2.512 2.68.25 6.166.25zm0 1.5H6.166c-2.68 0-4.416 1.615-4.416 4.166v8.67c0 2.544 1.74 4.165 4.416 4.165h8.168c2.68 0 4.416-1.615 4.416-4.165v-8.67c0-2.55-1.735-4.166-4.416-4.166zM10.46 5.973a.75.75 0 0 1 .071.977l-.073.084L7.977 9.5h6.36a.75.75 0 0 1 .102 1.493l-.102.007H7.98l2.477 2.467a.75.75 0 0 1 .075.976l-.072.084a.75.75 0 0 1-.976.075L9.4 14.53l-3.765-3.75a.77.77 0 0 1-.066-.076l.066.076a.715.715 0 0 1-.097-.118l-.028-.047-.017-.03-.028-.064-.012-.034-.018-.064-.008-.036-.008-.06-.004-.06v-.034l.004-.06-.004.078c0-.047.004-.093.013-.137l.007-.035.018-.063.013-.037.026-.058.02-.037.03-.046.023-.034.007-.008a.909.909 0 0 1 .066-.075h.001L9.4 5.97a.75.75 0 0 1 1.061.002z"/>
                    </svg>
                </div>
                <div class="sidebar__text">Logout</div>
            </a>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';

    export default {
        mounted(){
            var toggle = $('.sidebar__toggle'),
                page = $('.page'),
                sidebar = $('.sidebar'),
                headerToggle = $('.header__toggle'),
                logo = $('.header__logo'),
                close = $('.sidebar__close');
            toggle.on('click', function () {
                sidebar.toggleClass('active');
                page.toggleClass('wide');
                setTimeout(function () {
                    $('.owl-carousel').trigger('refresh.owl.carousel');
                }, 200);
            });

            headerToggle.on('click', function () {
                sidebar.addClass('active');
                page.addClass('toggle');
                logo.addClass('hidden');
                $('body').addClass('no-scroll');
                $('html').addClass('no-scroll');
            });

            close.on('click', function () {
                sidebar.removeClass('active');
                page.removeClass('toggle');
                logo.removeClass('hidden');
                $('body').removeClass('no-scroll');
                $('html').removeClass('no-scroll');
            });
        }
    }
</script>
