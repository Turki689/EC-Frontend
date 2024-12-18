<!-- eslint-disable prettier/prettier -->
<template>
    <div class="col-md-6 col-lg-4 col-xl-3 main">
        <router-link :to="{ name: 'CompanyDetails', params: { id: data.id } }"
            ><a class="main link">
                <div
                    class="owl-item active"
                    style="width: 260.25px; margin-right: 25px"
                >
                    <div
                        class="border border-primary ap rounded position-relative company-item"
                        style="border-color: #81c408 !important"
                    >
                        <div class="company-img">
                            <img
                                :src="data.image"
                                class="img-fluid w-100 rounded-top"
                                alt=""
                            />
                        </div>
                        <div
                            class="text-white bg-primary px-3 py-1 rounded position-absolute"
                            style="
                                top: 10px;
                                right: 10px;
                                background-color: #81c408 !important;
                            "
                        >
                            company
                        </div>
                        <div class="p-4 rounded-bottom">
                            <h4>{{ data.name }}</h4>

                            <p class="description">
                                {{ data.description }}
                            </p>
                            <div
                                class="d-flex justify-content-between flex-lg-wrap"
                            >
                                <span class="text-dark fs-5 fw-bold mb-0"
                                    >{{ data.link_views }}
                                    <span class="eye">
                                        <font-awesome-icon
                                            icon="fa-solid fa-eye"
                                        /> </span
                                ></span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </router-link>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    name: "companiesView",
    props: ["data"],
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
.main {
    a {
        color: unset !important;
        text-decoration: none;
    }
    .link:active {
        color: #81c408 !important;
    }
    .link:focus {
        color: #81c408;
    }
    .link:visited {
        color: #81c408;
    }
}
.company-item {
    height: 100%;
    transition: 0.5s;
}

.company-item:hover {
    box-shadow: 0 0 55px rgba(0, 0, 0, 0.4);
}

.company-item .company-img {
    overflow: hidden;
    transition: 0.5s;
    border-radius: 10px 10px 0 0;
    height: 200px;
}

.company-item .company-img img {
    transition: 0.5s;
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.owl-stage {
    margin: 50px 0;
    position: relative;
}

.owl-nav .owl-prev {
    position: absolute;
    top: -8px;
    right: 0;
    color: var(--bs-primary);
    padding: 5px 25px;
    border: 1px solid var(--bs-secondary);
    border-radius: 20px;
    transition: 0.5s;
}

.owl-nav .owl-prev:hover {
    background: var(--bs-secondary);
    color: var(--bs-white);
}

.owl-nav .owl-next {
    position: absolute;
    top: -8px;
    right: 88px;
    color: var(--bs-primary);
    padding: 5px 25px;
    border: 1px solid var(--bs-secondary);
    border-radius: 20px;
    transition: 0.5s;
}

.owl-nav .owl-next:hover {
    background: var(--bs-secondary);
    color: var(--bs-white);
}

.company-item .company-img img:hover {
    transform: scale(1.3);
}

.rounded-bottom {
    height: 200px;
}

h4 {
    height: 54px;
}

.description {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    overflow: hidden;
    height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
// .description:hover {
//     white-space: normal;
//     overflow: visible;
// }

.eye {
    color: #81c408;
}
</style>
