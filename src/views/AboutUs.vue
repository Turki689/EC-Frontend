<template>
    <section>
        <div class="container">
            <h1 class="text-center">About Us</h1>
            <p class="text-center">
                We are an institution there to facilitate import and export
                operations. We collect the largest number of agricultural
                products and companies that provide various agricultural
                products. We facilitate the search method by providing contact
                information for these companies.
            </p>
            <div class="row">
                <div class="col-md-5">
                    <!-- img -->
                    <div class="company-img">
                        <img
                            :src="company.image"
                            class="img-fluid w-100 rounded-top"
                            alt="Company Image"
                        />
                    </div>
                </div>
                <div class="col-md-7">
                    <!-- Contact -->
                    <h2 class="text-center">Connect with Us</h2>
                    <hr />
                    <div class="contact-info">
                        <h4 class="mb-4">Contact Information</h4>
                        <ul class="list-unstyled">
                            <li class="mb-4">
                                <i class="fas fa-phone fa-fw mr-4"></i>
                                <span>Phone: </span>
                                <a href="tel:+2033358496" class="text-link"
                                    >+2033358496</a
                                >
                            </li>
                            <li class="mb-4">
                                <i class="fas fa-envelope fa-fw mr-4"></i>
                                <span>Email: </span>
                                <a
                                    href="mailto:dean_issr@cu.edu.eg"
                                    class="text-link"
                                    >dean_issr@cu.edu.eg</a
                                >
                            </li>
                            <li class="mb-4">
                                <i class="fas fa-globe fa-fw mr-2"></i>
                                <span>Website: </span>
                                <a
                                    href="http://issr.cu.edu.eg/ar/home/"
                                    target="_blank"
                                    class="text-link"
                                    >issr.cu.edu.eg/ar/home/</a
                                >
                            </li>
                            <li class="mb-4">
                                <i class="fas fa-map-marker-alt fa-fw mr-2"></i>
                                <span>Address: </span>
                                <p class="mb-0">
                                    (5) Dr. Ahmed Zewail Street (formerly
                                    Tharwat) - Orman - Dokki - Giza - Arab
                                    Republic of Egypt
                                </p>
                            </li>
                            <li class="mb-4">
                                <div class="social-media">
                                    <div
                                        class="d-flex justify-content-end pt-4"
                                    >
                                        <a
                                            class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                            href="https://www.facebook.com/groups/188407394529436/"
                                        >
                                            <font-awesome-icon
                                                :icon="['fab', 'x-twitter']"
                                                class="icon"
                                            />
                                        </a>
                                        <a
                                            class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                            href="https://www.facebook.com/groups/188407394529436/"
                                        >
                                            <font-awesome-icon
                                                :icon="['fab', 'facebook']"
                                                class="icon"
                                            />
                                        </a>
                                        <a
                                            class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                            href="https://www.youtube.com/watch?v=t1A8Js2rAAA"
                                        >
                                            <font-awesome-icon
                                                :icon="['fab', 'youtube']"
                                                class="icon"
                                            />
                                        </a>
                                        <a
                                            class="btn btn-outline-secondary btn-md-square rounded-circle a-icon"
                                            href="https://www.facebook.com/MYKNA.FGSSR"
                                        >
                                            <font-awesome-icon
                                                :icon="['fab', 'linkedin-in']"
                                                class="icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutUs",
    data() {
        return {
            company: {
                image: require("../assets/Fssr.jpg"), // Dynamically load the image
            },
        };
    },
};
</script>

<style scoped>
section {
    background-image: url("../assets/download.jpeg");
    background-size: cover;
    background-position: center;
    height: 100vh;
}

.container {
    padding-top: 5rem;
    padding-bottom: 5rem;
    color: #f5f0f0;
}
h1 {
    padding-bottom: 60px;
}
p {
    font-size: 18px;
    padding-bottom: 20px;
    font-weight: bolder;
}
.text-link {
    text-decoration: none;
    color: #007bff;
}

.social-link {
    text-decoration: none;
    color: #f5f0f0;
}

.company-img img {
    border-radius: 0.25rem;
}
.social-media {
    padding-right: 210px;
}

.a-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-md-square {
    width: 3rem;
    height: 3rem;
}
</style>

