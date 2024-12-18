<!-- eslint-disable prettier/prettier -->
<template>
    <section>
        <h1 class="headr">This is {{ name + " " }}page</h1>
        <div class="container-fluid featurs py-5">
            <div class="container py-5">
                <div class="tab-class text-center">
                    <div class="tab-content">
                        <div class="col-lg-12">
                            <div class="input-group mt-4">
                                <div class="search-box">
                                    <input
                                        class="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        v-model="filter"
                                        v-show="showy"
                                    />
                                    <font-awesome-icon
                                        icon="fa-search"
                                        class="icon"
                                        @click="showe"
                                    />
                                </div>
                            </div>
                            <div class="row g-4">
                                <h3 v-if="errorMsg">{{ errorMsg }}</h3>
                                <companiesView
                                    v-for="(company, i) in filteredCompanies"
                                    :key="i"
                                    :data="company"
                                />
                            </div>
                            <button
                                v-if="hasMoreCompanies"
                                @click="showMoreCompanies"
                                class="btn btn-primary mt-4"
                            >
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import companiesView from "../components/companiesView.vue";
import axios from "axios";
export default {
    name: "ComPanies",
    components: {
        companiesView,
    },
    data() {
        return {
            Companies: [],
            company: {},
            displayedCompanies: [],
            name: "  The  companies ",
            filter: "",
            page: 1,
            showy: false,
            errorMsg: "",
        };
    },
    computed: {
        filteredCompanies() {
            if (this.filter === "") {
                return this.displayedCompanies;
            }
            return this.Companies.filter((obj) =>
                Object.values(obj).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(this.filter.toLowerCase())
                )
            );
        },

        hasMoreCompanies() {
            return this.Companies.length > this.displayedCompanies.length;
        },
    },
    methods: {
        getCompanies() {
            let url = "http://127.0.0.1:8000/companies/";
            axios
                .get(url)
                .then((response) => {
                    this.Companies = response.data;
                    console.log(response.data);
                    this.displayedCompanies = this.Companies.slice(0, 16);
                })
                .catch((error) => {
                    console.log(error);
                    this.errorMsg = "Error retrieving data";
                });
        },
        showMoreCompanies() {
            const nextCompanies = this.Companies.slice(
                this.displayedCompanies.length,
                this.displayedCompanies.length + 16
            );
            if (nextCompanies.length > 0) {
                this.displayedCompanies =
                    this.displayedCompanies.concat(nextCompanies);
                this.page++;
            }
        },
        showcompany(id) {
            let allcompanies = this.Companies;
            let company = allcompanies.filter((company) => company.id == id);
            this.company = company;
        },
        showe() {
            if (this.showy == false) {
                this.showy = true;
            } else {
                this.showy = false;
            }
        },
    },
    // eslint-disable-next-line vue/multi-word-component-names
    created() {
        this.getCompanies();
    },
    // mounted() {
    // this.getCompanies();
    // },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped lang="scss">
section {
    h1 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-family: "Raleway", sans-serif;
        font-weight: 600;
        line-height: 1.2;
        color: #45595b;
    }

    background-color: rgb(255 255 255);
    .container {
        background-color: rgb(255 255 255);
    }
    .search-box {
        padding-bottom: 20px;
    }
    .icon {
        height: 30px;
        width: 40px;
        color: #81c408 !important;
        padding-left: 20px;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: -60px;
    }
    .icon:hover {
        color: var(--bs-nav-link-color) !important;
    }
    input {
        padding: 10px;
        position: absolute;
        top: -60px;
        height: 30px;
        width: 200px;
        right: 40px;
    }
    .btn {
        &.btn-primary {
            background-color: rgb(19 120 204);
            border-color: rgb(19 120 204);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            transition: all 0.2s ease-in-out;
            &:hover {
                background-color: rgb(10 78 153);
                border-color: rgb(10 78 153);
            }
            &:focus {
                box-shadow: 0 0 0 0.2rem rgb(12 52 102 / 50%);
            }
        }
    }
}
</style>
