<template>
    <section>
        <div class="container-fluid py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-md-12 col-lg-7">
                        <h4 class="mb-3 text-secondary">100% Organic Foods</h4>
                        <h1 class="mb-5 display-3 text-primary">
                            Organic Veggies &amp; Fruits Foods
                        </h1>
                        <div class="position-relative mx-auto"></div>
                    </div>
                    <div class="col-md-12 col-lg-5">
                        <div
                            id="carouselId"
                            class="carousel slide position-relative"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item rounded active">
                                    <img
                                        src="../assets/companies.jpeg"
                                        class="img-fluid w-100 h-100 bg-secondary rounded"
                                        alt="First slide"
                                    />
                                    <a
                                        href=""
                                        class="btn px-4 py-2 text-white rounded"
                                        ><router-link to="/companies"
                                            >Companies</router-link
                                        ></a
                                    >
                                </div>
                                <div class="carousel-item rounded">
                                    <img
                                        src="../assets/hero-img-1.png"
                                        class="img-fluid w-100 h-100 rounded"
                                        alt="Second slide"
                                    />
                                    <a class="btn px-4 py-2 text-white rounded"
                                        ><span class="hrf"
                                            ><router-link to="/Prodects"
                                                >Prodects</router-link
                                            ></span
                                        ></a
                                    >
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselId"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselId"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HOME",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero-header {
    background: linear-gradient(
            rgba(248, 223, 173, 0.1),
            rgba(248, 223, 173, 0.1)
        ),
        url(../assets/hero-img.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .container.py-5 {
        background-color: #ffffff00;
    }
    .carousel-item {
        background-color: #ffb524 !important;
    }
    .carousel-control-next,
    .carousel-control-next,
    .carousel-control-prev {
        width: 48px;
        height: 48px;
        border-radius: 48px;
        border: 1px solid var(--bs-white);
        background: #81c408;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .carousel-item a {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
        background: linear-gradient(
            rgba(255, 181, 36, 0.7),
            rgba(255, 181, 36, 0.7)
        );
    }
    .text-primary {
        --bs-text-opacity: 1;
        color: #81c408 !important;
        text-align: left;
    }
    .text-secondary {
        color: #ffb524 !important;
        text-align: left;
    }
    .border-secondary {
        --bs-border-opacity: 1;
        border-color: #ffb524 !important;
    }
    .btn-primary {
        background-color: #81c408;
    }
    .btn-primary:hover {
        background-color: #ffb524 !important;
    }
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.hrf {
    border-radius: 3px;
}
a {
    color: #ffffff;
    text-decoration: none;
    border-radius: 1.5mm;
    padding: 5px 20px;
    font-size: 14px;
}
</style>
