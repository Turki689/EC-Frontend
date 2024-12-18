<!-- eslint-disable prettier/prettier -->
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-white">
        <div class="container-fluid">
            <a class="navbar-brand active" href="#"
                ><h1 class="text-primary display-6">Fruitables</h1>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link p-lg-3 active" aria-current="page"
                            ><router-link
                                to="/"
                                active-class="active-link"
                                exact
                                >Home</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link p-lg-3" aria-current="page"
                            ><router-link
                                to="/Prodects"
                                active-class="active-link"
                                >Prodects</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-lg-3" aria-current="page"
                            ><router-link
                                to="/companies"
                                active-class="active-link"
                                >Companies</router-link
                            ></a
                        >
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle nav-link p-lg-3"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="fales"
                        >
                            More
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a
                                    class="nav-link nav-link p-lg-3 dropdown-item"
                                    aria-current="page"
                                    ><router-link
                                        to="/about"
                                        active-class="active-link"
                                        >About Us</router-link
                                    ></a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <form class="d-flex" role="search"></form>
            </div>
        </div>
    </nav>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
    name: "AppHeader",
    // data() {
    //     return {
    //         showy: false,
    //     };
    // },
    // methods: {
    //     showe() {
    //         if (this.showy == false) {
    //             this.showy = true;
    //         } else {
    //             this.showy = false;
    //         }
    //     },
    //     goToSingpage() {
    //         this.$router.push("/loginViwe");
    //     },
    // },
    // components: {},
};
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped lang="scss">
.navbar {
    background-color: #fff !important;
    h1 {
        color: #81c408 !important;
    }
}
a {
    color: rgba(132, 129, 129, 0.976) !important ;
    transition: 0.5s;
    text-decoration: none;
}
a:hover {
    color: #81c408 !important;
}
a:active {
    color: #81c408 !important;
}
.active-link {
    color: #81c408 !important;
    font-weight: bold;
}
i {
    height: 10px;
    width: 10px;
}
.icon {
    height: 20px;
    width: 20px;
    color: #81c408 !important;
    padding-left: 20px;
    cursor: pointer;
}
.icon:hover {
    color: var(--bs-nav-link-color) !important;
}
nav {
    .navbar-brand {
        color: #81c408 !important;
    }
}
</style>
