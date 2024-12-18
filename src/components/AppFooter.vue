<!-- eslint-disable prettier/prettier -->
<template>
    <section class="footer text text-center text-md-start mt-5">
        <div class="container-fluid text-white-50">
            <div class="container py-5">
                <div
                    class="pb-4 mb-4"
                    style="border-bottom: 1px solid rgba(226, 175, 24, 0.5)"
                >
                    <div class="row g-4">
                        <div class="col-lg-3">
                            <a href="#">
                                <h1 class="text-primary mb-0">Fruitables</h1>
                                <p class="text-secondary mb-0">
                                    Fresh products
                                </p>
                            </a>
                        </div>
                        <div class="col-lg-8">
                            <div class="d-flex justify-content-end pt-3">
                                <a
                                    class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                    href="https://www.facebook.com/groups/188407394529436/"
                                >
                                    <font-awesome-icon
                                        icon="fa-brands fa-x-twitter"
                                        class="icon"
                                /></a>
                                <a
                                    class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                    href="https://www.facebook.com/groups/188407394529436/"
                                >
                                    <font-awesome-icon
                                        icon="fa-brands fa-facebook"
                                        class="icon"
                                /></a>
                                <a
                                    class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                    href="https://www.youtube.com/watch?v=t1A8Js2rAAA"
                                    ><font-awesome-icon
                                        icon="fa-brands fa-youtube"
                                        class="icon"
                                /></a>
                                <a
                                    class="btn btn-outline-secondary btn-md-square rounded-circle a-icon"
                                    href="https://www.facebook.com/MYKNA.FGSSR"
                                    ><font-awesome-icon
                                        icon="fa-brands fa-linkedin-in"
                                        class="icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6 col-md-6">
                        <div class="footer-item">
                            <h4 class="text-light mb-3">Why People Like us!</h4>
                            <p class="mb-4">
                                We are an institution there to facilitate import
                                and export operations. We collect the largest
                                number of agricultural products and companies
                                that provide various agricultural products. We
                                facilitate the search method by providing
                                contact information for these companies.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-">
                        <div class="footer-item">
                            <h4 class="text-light mb-3">Contact</h4>
                            <p>
                                Address: (5) Dr. Ahmed Zewail Street (formerly
                                Tharwat) - Orman - Dokki - Giza - Arab Republic
                                of Egypt
                            </p>
                            <p>Email:dean_issr@cu.edu.eg</p>
                            <p>Phone: +2033358496</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright py-4">
            <div class="container pb-0 pt-0">
                <div class="row">
                    <div
                        class="col-md-6 text-center text-md-start mb-3 mb-md-0"
                    >
                        <span class="text-light"
                            ><a href="#"
                                ><font-awesome-icon
                                    icon="fa-solid fa-copyright"
                                    class="copyright"
                                />Fruitables</a
                            >, All right reserved.</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    name: "AppFooter",
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss">
.footer {
    background-color: #45595b !important;
    .container {
        background-color: #45595b !important;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        unicode-bidi: isolate;
        line-height: 35px;
        color: rgb(255 255 255 / 40%) !important;
    }

    a.btn-link {
        line-height: 35px;
        color: rgba(255, 255, 255, 0.5);
        transition: 0.5s;
        text-decoration: none;
    }

    a:hover {
        color: #f6b127 !important;
    }
    a.border-bottom {
        color: #81c408 !important;
    }
    a {
        text-decoration: none;
    }
    .text-primary {
        color: #81c408 !important;
    }
    .text-secondary {
        color: #f6b127 !important;
    }
    .btn-primary {
        background-color: #81c408 !important;
    }
    .btn-primary:hover {
        background-color: #f6b127 !important;
    }
    a.btn {
        border-color: #f6b127 !important;
    }
    a.btn:hover {
        background-color: #f6b127 !important;
        color: #fff !important;
    }
    .copyright a {
        color: #81c408 !important;
    }

    .copyright {
        color: #fff !important;
        margin-right: 5px;
    }
    a.a-icon {
        color: #f6b127;
    }
    a.a-icon:hover {
        color: black !important;
    }
}
</style>
