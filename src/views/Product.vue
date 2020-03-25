<template>
  <div class="product">
    <b-container fluid class="container-color px-0">
      <b-row class="remove-row-margin custom-row-w mx-auto">
        <b-col lg="9" md="12" class="pl-0">
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card class="remove-p-card-body">
                <b-row class="remove-row-margin">
                  <b-col lg="4" md="6" sm="12" class="p-0 mb-5">
                    <ProductZoomer
                      :base-images="images"
                      :base-zoomer-options="zoomerOptions"
                    />
                  </b-col>
                  <b-col lg="8" md="6" class="p-0 pl-5 mb-3">
                    <h5>
                      {{ product.name }}
                    </h5>
                    <hr />
                    <div>₦ {{ product.price }}</div>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card>
                <h6>product details</h6>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sequi dolor optio distinctio, cumque blanditiis
                  corporis nam qui maxime dolore, facere, eligendi quisquam rem
                  aperiam voluptatem vel facilis ab quidem? Sunt, provident!
                  Blanditiis iure aliquid debitis voluptatum voluptas rem
                  tempora deserunt soluta ea, harum voluptate dicta asperiores,
                  distinctio minus cumque consequuntur. Maxime quo in minus
                  neque magni est eaque tempore! Similique culpa inventore alias
                  omnis vel. Enim, repellat. Quia, odit amet. Earum libero modi
                  accusamus ab quibusdam expedita ratione animi excepturi
                  molestiae harum, nihil a rerum delectus id quo est!
                  Consequatur id ipsam vel similique inventore sint, perferendis
                  quibusdam voluptas quos dicta rem iusto error maxime quia modi
                  qui sed nihil tempora exercitationem tenetur ad perspiciatis!
                  Deserunt dolore esse dolorum? Qui, repudiandae deleniti esse
                  debitis porro voluptatem omnis rerum, a est laudantium vel ut
                  sapiente quis, voluptas repellat expedita nisi? Numquam eos
                  libero eligendi cum veniam optio odio repellendus eaque.
                </p>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card>
                <h6>Specification</h6>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sequi dolor optio distinctio, cumque blanditiis
                  corporis nam qui maxime dolore, facere, eligendi quisquam rem
                  aperiam voluptatem vel facilis ab quidem? Sunt, provident!
                  Blanditiis iure aliquid debitis voluptatum voluptas rem
                  tempora deserunt soluta ea, harum voluptate dicta asperiores,
                  distinctio minus cumque consequuntur. Maxime quo in minus
                  neque magni est eaque tempore! Similique culpa inventore alias
                  omnis vel. Enim, repellat. Quia, odit amet. Earum libero modi
                  accusamus ab quibusdam expedita ratione animi excepturi
                  molestiae harum, nihil a rerum delectus id quo est!
                  Consequatur id ipsam vel similique inventore sint, perferendis
                  quibusdam voluptas quos dicta rem iusto error maxime quia modi
                  qui sed nihil tempora exercitationem tenetur ad perspiciatis!
                  Deserunt dolore esse dolorum? Qui, repudiandae deleniti esse
                  debitis porro voluptatem omnis rerum, a est laudantium vel ut
                  sapiente quis, voluptas repellat expedita nisi? Numquam eos
                  libero eligendi cum veniam optio odio repellendus eaque.
                </p>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card>
                <h6>Customers Feedback</h6>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sequi dolor optio distinctio, cumque blanditiis
                  corporis nam qui maxime dolore, facere, eligendi quisquam rem
                  aperiam voluptatem vel facilis ab quidem? Sunt, provident!
                  Blanditiis iure aliquid debitis voluptatum voluptas rem
                  tempora deserunt soluta ea, harum voluptate dicta asperiores,
                  distinctio minus cumque consequuntur. Maxime quo in minus
                  neque magni est eaque tempore! Similique culpa inventore alias
                  omnis vel. Enim, repellat. Quia, odit amet. Earum libero modi
                  accusamus ab quibusdam expedita ratione animi excepturi
                  molestiae harum, nihil a rerum delectus id quo est!
                  Consequatur id ipsam vel similique inventore sint, perferendis
                  quibusdam voluptas quos dicta rem iusto error maxime quia modi
                  qui sed nihil tempora exercitationem tenetur ad perspiciatis!
                  Deserunt dolore esse dolorum? Qui, repudiandae deleniti esse
                  debitis porro voluptatem omnis rerum, a est laudantium vel ut
                  sapiente quis, voluptas repellat expedita nisi? Numquam eos
                  libero eligendi cum veniam optio odio repellendus eaque.
                </p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3" class="px-0 mb-5 d-none d-lg-block">
          <b-card class="remove-p-card-body p-3"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            cumque commodi eveniet vel dolorum quae rerum in ut atque aliquam
            enim dolor officiis, rem, ullam et eius quisquam quasi harum. Id,
            laudantium, vero atque quis laborum, modi accusantium quibusdam
            cupiditate voluptates facere quod. Sint ipsa dolore beatae quia,
            aperiam minima, velit porro possimus labore numquam totam quaerat
            voluptatum modi assumenda! Cumque, earum reiciendis! Quis dolor
            minima quam incidunt facilis, sequi veritatis nostrum est mollitia
            quas odit. Omnis ut unde, impedit a aperiam iste laudantium! Aliquam
            obcaecati deserunt voluptas officia asperiores? Nobis itaque quos
            est voluptatem magni deleniti qui. Inventore ipsum iusto adipisci
            dolor consequuntur tempora, dolorum quibusdam dicta, a animi alias
            eius voluptas dolore odit, saepe cum consequatur dolorem
            enim.</b-card
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.product {
  margin-top: 62px;
}
.container-color {
  background-color: #f5f5f5;
}
.remove-row-margin {
  margin: 0;
}
.custom-row-w {
  max-width: 1184px;
}
.card.remove-p-card-body .card-body {
  padding: 0;
}
</style>
<script>
export default {
  name: 'app',
  data() {
    return {
      productdetails: [],
      images: {
        thumbs: [
          {
            id: 1,
            url:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/93/616663/3.jpg?9511'
          },
          {
            id: 2,
            url:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/93/616663/4.jpg?9511'
          },
          {
            id: 3,
            url:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/93/616663/5.jpg?9511'
          }
        ],
        normal_size: [
          {
            id: 1,
            url: '/shoeone_resize.png'
          },
          {
            id: 2,
            url: '/shoetwo_resize.png'
          },
          {
            id: 3,
            url: 'shoethree_resize.png'
          }
        ],
        large_size: [
          {
            id: 1,
            url:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/616663/3.jpg?9511'
          },
          {
            id: 2,
            url:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/616663/4.jpg?9511'
          },
          {
            id: 3,
            url:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/616663/5.jpg?9511'
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3,
        pane: 'pane',
        hoverDelay: 300,
        namespace: 'zoomer-bottom',
        move_by_click: true,
        scroll_items: 3,
        choosed_thumb_border_color: '#dd2c00',
        scroller_position: 'bottom',
        zoomer_pane_position: 'right'
      }
    }
  },
  computed: {
    product() {
      return this.$store.state.selectedProduct
    }
  }
}
</script>
