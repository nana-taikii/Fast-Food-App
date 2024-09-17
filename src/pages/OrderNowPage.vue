<template>
    <ion-page>
      <div class = "h-full w-full">
          <ion-content class = "relative h-full w-full ">
            <div class = "div_content w-full h-full">
              <ion-header class="flex px-4 items-center ion-no-border">
                <ion-menu-toggle class = "toggle_btn">
                  <ion-icon name="reorder-two-outline" class="text-5xl text-primary"></ion-icon>
                </ion-menu-toggle>
                <ion-title class="text-2xl font-semibold font-font2">Our Foods</ion-title>
                <ion-icon name="bag-handle" class="text-3xl text-primary"></ion-icon>
              </ion-header>
        
              <div class="flex flex-row gap-5 h-[50px] px-[20px]">
                <div class="h-full relative w-full flex flex-row items-center border-2 border-solid border-[#E6E9EC] rounded-[15px] px-5 bg-[#F8F9FA]">
                  <ion-icon name="search-outline" class="text-[1.5rem] text-primary"></ion-icon>
                  <input type="search" placeholder="try our new Beef Bibimbowl" class="p-3 font-font1 text-[0.9rem] placeholder:text-[#7D858C] w-full border-none outline-none bg-[#F8F9FA]">
                  <ion-icon name="options-outline" class="text-4xl text-primary font-bold"></ion-icon>
                </div>
              </div>
  
              <div class=" mt-3 w-full" lines="none">
                <div class = " flex overflow-x-auto whitespace-nowrap">
                  <div class = "flex items-center space-x-2  px-2 py-1">
                    <ion-chip v-for="category in product_categories" :key="category" :class="{'bg-primary text-[#fff]': allCategory === category, 'bg-light': allCategory !== category}" @click="navigate_category(category)">
                      <ion-label>{{ category }}</ion-label>
                    </ion-chip>
                </div>
                </div>
              </div>
  
            <ion-list class="mt-3 sm:ml-[20px] flex flex-wrap gap-[5px] justify-center items-center sm:justify-start">


              <div v-for="item in filter_products" :key="item.id"  @click = "selectProduct(item)">
                <div class="w-[170px] sm:w-[200px] bg-fifth pt-[30px] px-3 rounded-[20px] flex flex-col items-center ">
                  <ion-thumbnail>
                    <ion-img :src="item.img"></ion-img>
                  </ion-thumbnail>
                  <div class="mt-5 flex flex-col space-y-[-0.5rem] w-full">
                    <h1 class="font-font2 font-bold text-[0.8rem]">{{ item.name }}</h1>
                    <p class="font-font2 text-[0.8rem]">{{ item.desc }}</p>
                  </div>
                  <div class="w-full flex justify-end">
                    <ion-note class="flex flex-row items-center justify-center space-x-8">
                      <p class="text-[1rem] font-bold text-primary font-font1 font-semibold">{{ item.price }}</p>
                      <div class="space-x-[0.1rem]">
                        <ion-icon name="star" class="text-sixth"></ion-icon>
                        <ion-icon name="star" class="text-sixth"></ion-icon>
                        <ion-icon name="star" class="text-sixth"></ion-icon>
                        <ion-icon name="star" class="text-sixth"></ion-icon>
                        <ion-icon name="star-half" class="text-sixth"></ion-icon>
                      </div>
                    </ion-note>
                  </div>
                </div>
              </div>
            </ion-list>
            </div>
          </ion-content>

     

        <ion-modal :is-open = "isModalOpen" @did-dismiss = "isModalOpen = false" class = "modal" >
            <ion-content class = "overflow-y-auto no-scrollbar">
                <div class = "w-full px-4">
                    <ion-header class = "ion-no-border mt-2 ">
                        <div class = "flex flex-row items-center justify-between">
                            <div class = "flex flex-row space-x-5 items-center justify-center h-full ">
                                <div>
                                    <ion-buttons>
                                        <ion-button @click = "isModalOpen = false" class = "p-1 bg-fifth rounded-[10px]" ><ion-icon name="chevron-back-outline" class = "text-[#6C757D] font-bold"></ion-icon>
                                        </ion-button>
                                    </ion-buttons>
                                </div>
                                <h2 class = "font-font2 mt-2">{{ selectedProduct?.category }}</h2>
                            </div>
                            <ion-icon name="bag-handle" class="text-3xl text-primary"></ion-icon>
                        </div>

                    </ion-header>

                    <div class = 'w-full relative mt-4'>
                        <div class = "bg-[#E9ECEF] rounded-[20px] w-full h-full flex items-center justify-center">
                            <img :src="selectedProduct?.img" class = "w-[230px]" alt="">
                        </div>
                        <span class = "bg-white flex items-center p-3 absolute right-4 bottom-[-15px] rounded-[15px] shadow-lg">
                            <ion-icon name="heart-outline" class = "text-primary text-[0.9rem]"></ion-icon>
                        </span>
                    </div>


                    <div class = "mt-5 w-full ">
                        <h6 class = "font-font2 text-[0.9rem] font-semibold">{{ selectedProduct?.name }}</h6>
                        <div class="space-x-[0.1rem] mt-5">
                            <ion-icon name="star" class="text-sixth"></ion-icon>
                            <ion-icon name="star" class="text-sixth"></ion-icon>
                            <ion-icon name="star" class="text-sixth"></ion-icon>
                            <ion-icon name="star" class="text-sixth"></ion-icon>
                            <ion-icon name="star-half" class="text-sixth"></ion-icon>
                        </div>
                        <p class = "text-fourth font-font1 font-light text-justify">{{ selectedProduct?.details }}</p>
                        <div class = "flex justify-between"> 
                            <h2 class = "text-primary font-font2">{{ selectedProduct?.price }}</h2>
                            <div class = "flex items-center justify-center space-x-3 mt-3">
                                <ion-buttons>
                                    <ion-button @click = "decreasePiece" class = "px-1 rounded-[15px] bg-[#E6E6E6] text-primary font-semibold text-[1.2rem] font-font2">-</ion-button>
                                </ion-buttons> 
                                    <span class = "font-font3 font-medium text-[0.95rem]">{{ piece_no }}</span>
                                <ion-buttons>
                                    <ion-button @click = "increasePiece" class = "px-1  rounded-[15px] bg-[#E6E6E6] text-primary font-semibold text-[1rem] font-font2 ">+</ion-button>
                                </ion-buttons> 
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class = "font-font2 font-semibold">Beverages</h5>
                        <div class="dropdown_div bg-[#F8F9FA] w-full px-3  rounded-[10px] flex items-center">
                                <ion-select class = "dropdown_select font-font1 text-[0.9rem]" v-model="selectedOption" interface="popover" label="Choose Beverages" label-placement="floating" justify="space-between" placeholder=" ">
                                <ion-select-option value="Coke">Coke</ion-select-option>
                                <ion-select-option value="Coffee">Coffee</ion-select-option>
                                <ion-select-option value="Iced Tea">Iced Tea</ion-select-option>
                                </ion-select>
                                <ion-icon name="chevron-down-outline" class = "text-primary font-bold text-[1.2rem]"></ion-icon>
                        </div>
                    </div>

                    <div class = "mt-3 w-full"> 
                        <ion-buttons class = "size_btn">
                            <div class = "w-full flex items-center justify-center space-x-1">
                                <ion-button :class = "['text-[0.8rem] capitalize py-[2px] px-3.5 rounded-[17px] text-[black] font-font2 font-bold w-[120px]', {'btn_active': selectedButton === 'regular'}]" @click = "selectedButton = 'regular' ">Regular</ion-button>
                                <ion-button :class = "['text-[0.8rem] capitalize py-[2px] px-3.5 rounded-[17px] text-[black] font-font2 font-bold w-[120px]', {'btn_active': selectedButton === 'large'}]" @click = "selectedButton = 'large' ">Large</ion-button>
                                <ion-button :class = "['text-[0.8rem] capitalize py-[2px] px-3.5 rounded-[17px] text-[black] font-font2 font-bold w-[120px]', {'btn_active': selectedButton === 'x-large'}]" @click = "selectedButton = 'x-large' ">X-Large</ion-button>
                            </div>
                        </ion-buttons>
                    </div>

                    <div> 
                        <h5 class = "font-font2 font-semibold">Add Ons</h5>
                        <div class = 'mb-2'> 
                            <div class = "flex flex-row justify-between bg-[#E9ECEF] p-2 rounded-[20px]">

                                <div class = "flex items-center justify-center">
                                    <ion-thumbnail>
                                        <ion-img src = "/images/tomato_sauce.png"></ion-img>
                                    </ion-thumbnail>
                                    <div class = "flex flex-col ml-1"> 
                                        <ion-label class = "font-font2 text-[0.8rem] font-semibold">Tomato Sauce</ion-label>
                                        <ion-note class = "text-[black] text-[0.75rem] font-font2">Sauce</ion-note>
                                        <p class = "text-primary font-font2 font-semibold mt-[9px]">P 49</p>
                                    </div>
                                </div>

                                <div class = "flex flex-col items-end p-1 pr-2">
                                    <div class = "mt-1 h-[18px] w-[18px] bg-[#fff] rounded-[4px] flex items-center justify-center">
                                        <ion-checkbox class = ""></ion-checkbox>
                                    </div>
                                    <div class = "flex items-center justify-center space-x-3 mt-6">
                                        <ion-buttons>
                                            <ion-button class = "px-1 rounded-[15px] bg-[#D2D5D8] text-primary font-semibold text-[1.2rem] font-font2" @click = "decreaseCount1">-</ion-button>
                                        </ion-buttons> 
                                            <span class = "font-font3 font-medium text-[0.95rem]">{{ addons_count1 }}</span>
                                        <ion-buttons>
                                            <ion-button class = "px-1  rounded-[15px] bg-[#D2D5D8] text-primary font-semibold text-[1rem] font-font2 " @click = "increaseCount1">+</ion-button>
                                        </ion-buttons> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div> 
                            <div class = "flex flex-row justify-between bg-[#E9ECEF] p-2 rounded-[20px]">
                                <div class = "flex items-center justify-center">
                                    <ion-thumbnail>
                                        <ion-img src = "/images/white_rice.png"></ion-img>
                                    </ion-thumbnail>
                                    <div class = "flex flex-col ml-1"> 
                                        <ion-label class = "font-font2 text-[0.8rem] font-semibold">White Rice</ion-label>
                                        <ion-note class = "text-[black] text-[0.75rem] font-font2">Rice</ion-note>
                                        <p class = "text-primary font-font2 font-semibold mt-[9px]">P 25</p>
                                    </div>
                                </div>

                                <div class = "flex flex-col items-end p-1 pr-2">
                                    <div class = "mt-1 h-[18px] w-[18px] bg-[#fff] rounded-[4px] flex items-center justify-center">
                                        <ion-checkbox class = ""></ion-checkbox>
                                    </div>
                                    <div class = "flex items-center justify-center space-x-3 mt-6">
                                        <ion-buttons>
                                            <ion-button @click = "decreaseCount2" class = "px-1 rounded-[15px] bg-[#D2D5D8] text-primary font-semibold text-[1.2rem] font-font2">-</ion-button>
                                        </ion-buttons> 
                                            <span class = "font-font3 font-medium text-[0.95rem]">{{ addons_count2 }}</span>
                                        <ion-buttons>
                                            <ion-button @click = "increaseCount2" class = "px-1  rounded-[15px] bg-[#D2D5D8] text-primary font-semibold text-[1rem] font-font2 ">+</ion-button>
                                        </ion-buttons> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ion-footer class="ion-no-border py-4 w-full bottom-0 sticky z-[100]">
                        <ion-buttons>
                            <ion-button id = "order-popover" class = "w-full bg-primary text-[#fff] capitalize text-[0.8rem] font-font1 font-medium w-[140px] p-2 rounded-[15px] no-underline text-center" @click = "openOrderModal()">Add to Bag</ion-button>
                        </ion-buttons>
                    </ion-footer>
                
                </div>
            </ion-content>
        </ion-modal>

       
        <ion-modal :is-open = "isOrderModalOpen" @did-dismiss = "isOrderModalOpen = false"  class = "orderModal" backdropDismiss="true" aria-hidden = "false">
            <div class = "flex flex-col items-center justify-center  p-2 pt-8">
                <ion-thumbnail class = "thumbs_up">
                    <ion-img src = "images/thumbs_up.png"></ion-img>
                </ion-thumbnail>
                <h3 class = "font-font2 text-[0.9rem] font-semibold">Successfully Added!</h3>
                <p class = "mt-[-2px] font-font2 text-[#ADB1B6] text-[0.8rem]">What do  you want to do now?</p>
                <ion-buttons class = "flex flex-col space-y-1">
                    <ion-button @click = "CheckOutOpen" class = "p-1 px-4 rounded-[15px] font-font2 w-full bg-primary text-[#fff] capitalize text-[0.7rem]">Proceed to Checkout</ion-button>
                    
                    <router-link to = "/OrderNowPage" @click = "isOrderModalOpen = 'false', isModalOpen = false">
                        <ion-button class = "text-[0.7rem] text-primary font-font2 capitalize">Add More</ion-button>
                    </router-link>
                
                </ion-buttons>
            </div>   
        </ion-modal>

        <ion-modal :is-open = "isCheckOutOpen" @did-dismiss = "isCheckOutOpen = false" backdropDismiss = "true" aria-hidden = "false">
            <ion-content>
                <div class = "w-full px-4">
                        <ion-header class = "ion-no-border mt-2 ">
                            <div class = "flex flex-row items-center justify-between">
                                <div class = "flex flex-row space-x-5 items-center justify-center h-full ">
                                    <div>
                                        <ion-buttons>
                                            <ion-button @click = "isCheckOutOpen = false, isOrderModalOpen = false" class = "p-1 bg-fifth rounded-[10px]" ><ion-icon name="chevron-back-outline" class = "text-[#6C757D] font-bold"></ion-icon>
                                            </ion-button>
                                        </ion-buttons>
                                    </div>
                                    <h2 class = "font-font2 mt-2 font-semibold">Order Summary</h2>
                                </div>
                            </div>
                        </ion-header>
                </div>

                <!--address-->
                <div class = "mt-2">
                    <div class = "w-full relative pr-8 pl-[20px] ">
                        <ion-list class = "relative w-full ion-no-padding">                   
                          <ion-item-sliding ref = "itemSliding1" @ionDrag = "onSlidingStart1" @ionDragEnd="onDragEnd1">
                              <div class = "h-[90px] rounded-[15px] flex items-center overflow-hidden">
                                <div class = "w-full">
                                <ion-item  lines = "none" class = "custom_item"> 
                                  <div class = "flex flex-col space-y-[-1px] mt-[-10px] ">
                                        <h2 class = "font-font2 text-[0.8rem] font-semibold">Chou Tzuyu</h2>
                                        <p class = "font-font2 text-[0.7rem] text-fourth font-medium">+63 912 345 6789</p>
                                        <p class = "font-font2 text-[0.7rem] text-fourth font-medium">chou.tzu-yu@email.com</p>
                                    </div>
                                </ion-item>
                                </div>
                              </div>
                                <ion-item-options class = "space-x-1 ">
                                    <div class = "ml-1 space-x-1 flex">
                                      <ion-item-option class = " bg-[#FFE5D0] rounded-[13px]"><ion-icon name="pencil-outline" class = "text-[#FD8520] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                      <ion-item-option class = "bg-[#F8D7DA] rounded-[13px]"><ion-icon name="trash-outline" class = "text-[#DC3545] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                    </div>
                                  </ion-item-options>
                            </ion-item-sliding>
                        </ion-list>
                        <div v-if = "showDots1" class=" absolute top-1/2 right-[2px] transform -translate-y-1/2  mt-[-12px]">
                          <ion-icon name="ellipsis-vertical" @click = "slideItem1"  class = "dot_icon text-[2rem] text-[#FFC02E]"></ion-icon>
                        </div>    
                    </div>
                </div>

                <!--2nd address-->
                <div>
                  <ion-radio-group v-model = "selectAddress">
                  <div class = "mt-2">
                      <div class = "w-full relative pr-8 pl-[20px] ">
                          <ion-list class = "relative w-full ion-no-padding">               
                            <ion-item-sliding ref = "itemSliding2" @ionDrag = "onSlidingStart2" @ionDragEnd="onDragEnd2">
                                <div class = "h-[90px] rounded-[15px] flex items-center overflow-hidden relative">
                                  <div class = "w-full">
                                  <ion-item  lines = "none" class = "custom_item"> 
                                    <div class = "flex flex-col space-y-[-1px] mt-[-10px] ">
                                          <h2 class = "font-font2 text-[0.8rem] font-semibold">My Home Address</h2>
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">No. 21 St. Agustin Street, Brgy. De Jose</p>
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">Delgado City 2234 Philippines</p>
                                      </div>
                                      <div  class = "w-[20px] h-[20px] absolute right-5 top-4 bg-[white] rounded-[20px] flex items-center justify-center">
                                             <ion-radio name = "address" value = "address1" class = "address" ></ion-radio>
                                         </div>
                                  </ion-item>
                                  </div>
                                </div>
                                  <ion-item-options class = "space-x-1 ">
                                      <div class = "ml-1 space-x-1 flex">
                                        <ion-item-option class = " bg-[#FFE5D0] rounded-[13px]"><ion-icon name="pencil-outline" class = "text-[#FD8520] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                        <ion-item-option class = "bg-[#F8D7DA] rounded-[13px]"><ion-icon name="trash-outline" class = "text-[#DC3545] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                      </div>
                                    </ion-item-options>
                              </ion-item-sliding>
                          </ion-list>
                          <div v-if = "showDots2" class=" absolute top-1/2 right-[2px] transform -translate-y-1/2  mt-[-12px]">
                            <ion-icon name="ellipsis-vertical" @click = "slideItem2"  class = "text-[2rem] text-[#FFC02E]"></ion-icon>
                          </div>    
                        </div> 
                  </div>

                  <div class = "mt-2">
                      <div class = "w-full relative pr-8 pl-[20px] ">
                          <ion-list class = "relative w-full ion-no-padding">               
                            <ion-item-sliding ref = "itemSliding3" @ionDrag = "onSlidingStart3" @ionDragEnd="onDragEnd3">
                                <div class = "h-[90px] rounded-[15px] flex items-center overflow-hidden relative">
                                  <div class = "w-full">
                                  <ion-item  lines = "none" class = "custom_item"> 
                                    <div class = "flex flex-col space-y-[-1px] mt-[-10px] ">
                                          <h2 class = "font-font2 text-[0.8rem] font-semibold">Work/Office</h2>
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">3rd flr Anyeong Bldg. Seareal St. Joaqin</p>
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">City 3456 Philippines</p>
                                      </div>

                                      <div class = "w-[20px] h-[20px] absolute right-5 top-4 bg-[white] rounded-[20px] flex items-center justify-center">
                                          <ion-radio name = "address" value = "adress2" class = "address" ></ion-radio>
                                      </div>

                                  </ion-item>
                                  </div>
                                </div>
                                  <ion-item-options class = "space-x-1 ">
                                      <div class = "ml-1 space-x-1 flex">
                                        <ion-item-option class = " bg-[#FFE5D0] rounded-[13px]"><ion-icon name="pencil-outline" class = "text-[#FD8520] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                        <ion-item-option class = "bg-[#F8D7DA] rounded-[13px]"><ion-icon name="trash-outline" class = "text-[#DC3545] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                      </div>
                                    </ion-item-options>
                              </ion-item-sliding>
                          </ion-list>
                          <div v-if = "showDots3" class=" absolute top-1/2 right-[2px] transform -translate-y-1/2  mt-[-12px]">
                            <ion-icon name="ellipsis-vertical" @click = "slideItem3"  class = "text-[2rem] text-[#FFC02E]"></ion-icon>
                          </div>    
                        </div> 
                  </div>
                </ion-radio-group>
              </div>

              <!--Orders-->
              <div class = "mt-7"> 
                  <h2 class = "ml-[22px] font-font2 text-[1rem] font-semibold">Orders</h2>
                  <div class = "mt-2">
                      <div class = "w-full relative pr-8 pl-[20px] ">
                          <ion-list class = "relative w-full ion-no-padding">               
                            <ion-item-sliding ref = "itemSliding4" @ionDrag = "onSlidingStart4" @ionDragEnd="onDragEnd4">
                                <div class = "h-[200px] rounded-[15px]  overflow-hidden relative">
                                  <div class = "w-full ">
                                  <ion-item  lines = "none" class = "custom_order">
                                   <div class = "w-full pt-8 pb-3">
                                      <div class = "flex flex-row space-y-[-1px] mt-[-10px] space-x-3 items-center">
                                          <ion-thumbnail>
                                              <ion-img :src = "selectedProduct?.img"></ion-img>
                                          </ion-thumbnail>
                                          <div> 
                                            <h2 class = "font-font2 text-[0.8rem] font-semibold">{{ selectedProduct?.name }}</h2>
                                            <p class = "font-font2 text-[0.7rem]  font-medium ">{{ addons_count1}}x Tomato Sauce</p>
                                            <p class = "font-font2 text-[0.7rem]  font-medium mt-[-10px]">{{ addons_count2}}x White Rice</p>
                                            <p class = "font-font2 text-[0.7rem]  font-medium mt-[-10px]">1x {{ selectedButton }} {{ selectedOption }}</p>
                                            <p class = "font-font2 text-[0.7rem]  font-medium mt-[-10px]">1x Fried Chicken</p>
                                          </div>
                                      </div>
                                      
                                      <div class = "price_div flex flex-row items-center justify-between w-full">
                                        <p class = "text-primary font-font2 font-semibold">P 185</p>
                                        <div class = "flex flex-col items-end p-1 pr-2">
                                          <div class = "flex items-center justify-center space-x-3 z-[1000]" >
                                              <ion-buttons>
                                                  <ion-button @click = "decreaseOrder" class = "px-1 rounded-[15px] bg-[#D2D5D8] text-primary font-semibold text-[1.2rem] font-font2">-</ion-button>
                                              </ion-buttons> 
                                                  <span class = "font-font3 font-medium text-[0.95rem]">{{ order_no }}</span>
                                              <ion-buttons>
                                                  <ion-button @click = "increaseOrder" class = "px-1  rounded-[15px] bg-[#D2D5D8] text-primary font-semibold text-[1rem] font-font2 ">+</ion-button>
                                              </ion-buttons>
                                          </div> 
                                      </div>
                                </div>
                                      
                                    </div>
                                  </ion-item>
                                  </div>
                                </div>
                                  <ion-item-options class = "space-x-1 ">
                                      <div class = "ml-1 space-x-1 flex">
                                        <ion-item-option class = " bg-[#FFE5D0] rounded-[13px]"><ion-icon name="pencil-outline" class = "text-[#FD8520] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                        <ion-item-option class = "bg-[#F8D7DA] rounded-[13px]"><ion-icon name="trash-outline" class = "text-[#DC3545] text-[1.2rem] font-bold"></ion-icon></ion-item-option>
                                      </div>
                                    </ion-item-options>
                              </ion-item-sliding>
                          </ion-list>
                          <div v-if = "showDots4" class=" absolute top-1/2 right-[2px] transform -translate-y-1/2  mt-[-12px]">
                            <ion-icon name="ellipsis-vertical" @click = "slideItem4"  class = "text-[2rem] text-[#FFC02E]"></ion-icon>
                          </div>    
                        </div> 
                  </div>
              </div>


              <!--Payment-->
              <div class = "mt-7">
                <h2 class = "ml-[22px] font-font2 text-[1rem] font-semibold">Payment Option</h2>
                <ion-radio-group v-model = "selectPayment">
                  <!--Payment1-->
                  <div class = "mt-2">
                      <div class = "w-full relative pr-8 pl-[20px] ">
                          <ion-list class = "relative w-full ion-no-padding">               
                                <div class = "h-[70px] rounded-[15px] flex items-center overflow-hidden relative">
                                  <div class = "w-full">
                                  <ion-item  lines = "none" class = "custom_payment"> 
                                    <div class = "flex flex-col space-y-[-1px] mt-[-10px] ">
                                          <h2 class = "font-font2 text-[0.8rem] font-semibold">Cash on Delivery</h2>
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">Pay when you received the order</p>
                                      </div>
                                      <div class = "w-[20px] h-[20px] absolute right-5 top-4 bg-[white] rounded-[20px] flex items-center justify-center">
                                             <ion-radio name = "payment" value = "payment1" class = "payment" ></ion-radio>
                                      </div>
                                  </ion-item>
                                  </div>
                                </div>

                          </ion-list>   
                        </div> 
                    </div>

                    <!--Payment2-->
                    <div class = "mt-2">
                      <div class = "w-full relative pr-8 pl-[20px] ">
                          <ion-list class = "relative w-full ion-no-padding">               
                                <div class = "h-[70px] rounded-[15px] flex items-center overflow-hidden relative">
                                  <div class = "w-full">
                                  <ion-item  lines = "none" class = "custom_payment"> 
                                    <div class = "flex flex-col space-y-[-1px] mt-[-10px] ">
                                          <h2 class = "font-font2 text-[0.8rem] font-semibold">Loyalty Points <span class = "text-primary ml-2">(0 points)</span></h2>
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">Pay using your earned loyalty points</p>
                                      </div>
                                      <div class = "w-[20px] h-[20px] absolute right-5 top-4 bg-[white] rounded-[20px] flex items-center justify-center">
                                             <ion-radio name = "payment" value = "payment2" class = "payment" ></ion-radio>
                                      </div>
                                  </ion-item>
                                  </div>
                                </div>

                          </ion-list>   
                        </div> 
                    </div>

                    <!--Payment3-->
                    <div class = "mt-2">
                      <div class = "w-full relative pr-8 pl-[20px] ">
                          <ion-list class = "relative w-full ion-no-padding">               
                                <div class = "h-[70px] rounded-[15px] flex items-center overflow-hidden relative">
                                  <div class = "w-full">
                                  <ion-item  lines = "none" class = "custom_payment"> 
                                    <div class = "flex flex-col space-y-[-1px] mt-[-10px] ">
                                          <img src = "/images/paypal_logo.png" class = "w-[100px] mb-2 mt-3">
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">A new tab will open to access your account</p>
                                      </div>
                                      <div class = "w-[20px] h-[20px] absolute right-5 top-4 bg-[white] rounded-[20px] flex items-center justify-center">
                                             <ion-radio name = "payment" value = "payment3" class = "payment" ></ion-radio>
                                      </div>
                                  </ion-item>
                                  </div>
                                </div>

                          </ion-list>   
                        </div> 
                    </div>

                    <!--Payment4-->
                    <div class = "mt-2">
                      <div class = "w-full relative pr-8 pl-[20px] ">
                          <ion-list class = "relative w-full ion-no-padding">               
                                <div class = "h-[70px] rounded-[15px] flex items-center overflow-hidden relative">
                                  <div class = "w-full">
                                  <ion-item  lines = "none" class = "custom_payment"> 
                                    <div class = "flex flex-col space-y-[-1px] mt-[-10px] ">
                                          <img src = "/images/gcash_logo.png" class = "w-[100px] mb-[-10px] mt-1">
                                          <p class = "font-font2 text-[0.7rem] text-fourth font-medium">Choose Gcash services available from you</p>
                                      </div>
                                      <div class = "w-[20px] h-[20px] absolute right-5 top-4 bg-[white] rounded-[20px] flex items-center justify-center">
                                             <ion-radio name = "payment" value = "payment4" class = "payment" ></ion-radio>
                                      </div>
                                  </ion-item>
                                  </div>
                                </div>

                          </ion-list>   
                        </div> 
                    </div>
                  </ion-radio-group>
              </div>

              <div class = " pb-[18px] mr-[10px] ">
                <div class ="mt-2 px-[20px] flex flex-col space-y-[-20px]">
                  <div class = "flex justify-between"> 
                    <p class = "text-[0.8rem] font-font2 font-semibold">Subtotal</p>
                    <p class = "text-[0.8rem] font-font2 font-semibold">P 185</p>
                  </div>
                  <div class = "flex justify-between"> 
                    <p class = "text-[0.8rem] font-font2 font-semibold">Delivery Charge</p>
                    <p class = "text-[0.8rem] font-font2 font-semibold">P 59</p>
                  </div>
               </div>
              
               <div class = "px-[20px]">
                  <ion-item class = "change_input" lines="none">
                      <ion-input class = "font-font2 text-[0.9rem] font-semibold" label="Change for" label-placement="stacked" placeholder="e.g 1,000"></ion-input>
                    </ion-item>
                </div>
              </div>

              <ion-footer class="payment_footer bg-[#fff]  w-full bottom-0 sticky z-[100]">
                <div class = "flex justify-between px-4">
                        <div>
                            <h4 class = "text-[0.7rem] font-font2 font-medium">Grand Total</h4>
                            <p class = "text-[0.9rem] font-font2 font-semibold mt-[-8px]">P 244</p>
                        </div>
                        <ion-buttons>
                            <ion-button @click = "PaymentOpen" class = "w-[190px] bg-primary text-[#fff] capitalize text-[0.8rem] font-font1 font-medium w-[140px] p-1 rounded-[15px] no-underline text-center" >Place Order</ion-button>
                        </ion-buttons>
                    </div>
                  </ion-footer>
         </ion-content>
        </ion-modal>

        <ion-modal :is-open = "isPaymentOpen" @did-miss = "isPaymentOpen = false" backdropDismiss="true" aria-hidden = "false">
            <ion-content>
              <div class = "flex items-center flex-col px-4 mt-[80px]">
                <ion-img src = "images/thumbs_logo2.png" class = "w-[140px]"></ion-img>
                <div class = "text-center"> 
                  <h1 class = "font-font2 text-[1.2rem] font-semibold">Order Received!</h1>
                  <p class = "text-[0.8rem] font-font2 text-fourth">Your order <span class = "text-primary font-semibold">No. 19049585</span> has succesfully take and now being processesd. Kindly wait for our notification regarding your order</p>
                </div>
              </div>
            </ion-content>

              <ion-footer class = "ion-no-border px-3">
                <ion-buttons class = "flex flex-col">
                  <ion-button class = "w-full bg-primary text-[#fff] capitalize text-[0.8rem] font-font1 font-medium w-[140px] p-1 rounded-[15px] no-underline text-center"> 
                    Track Order
                  </ion-button>
                  <router-link :to = "'/HomePage'">
                    <ion-button @click = "isPaymentOpen = false, isCheckOutOpen = false, isOrderModalOpen = false, isModalOpen = false" class = "w-full  text-primary capitalize text-[0.8rem] font-font1 font-medium w-[140px] p-1 rounded-[15px] no-underline text-center"> 
                      Back to Home
                    </ion-button>
                  </router-link>
                </ion-buttons>
              </ion-footer>
           
          
        </ion-modal>
     

           
            
            <transition name = "fade">
            <div v-show="isMenuOpen" class=" fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] transition-bg duration-400 ease-in-out"></div>
            </transition>
        </div>
      </ion-page>

  </template>
  
  
  
  <script>
import {
  IonPage,
  IonToolbar,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonButton,
  IonMenuToggle,
  IonSearchbar,
  IonChip,
  IonThumbnail,
  IonList,
  IonModal,
  IonSelect,
  IonPopover,
  IonItemSliding,
  IonRadioGroup,
  IonRadio
} from '@ionic/vue';
import { defineComponent, ref, computed } from 'vue';
import { product_list } from '../components/data.js';
import { navdata } from '../components/navdata.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonContent,
    IonHeader,
    IonMenu,
    IonTitle,
    IonButton,
    IonMenuToggle,
    IonSearchbar,
    IonChip,
    IonThumbnail,
    IonList,
    IonModal,
    IonSelect,
    IonPopover,
    IonItemSliding,
    IonRadioGroup,
    IonRadio,
    FontAwesomeIcon
  },
  setup() {
    //piece no
    const piece_no = ref(1);
    const increasePiece = () => {
      piece_no.value += 1;
    }

    const decreasePiece = () => {
      if (piece_no.value > 0) {
        piece_no.value -= 1;
      }
    };
    //increase order

    const order_no = ref(1);

    const increaseOrder = () => {
      order_no.value += 1;
      console.log("wenks");
    };

    const decreaseOrder = () => {
      if (order_no.value > 0) {
        order_no.value -= 1;
      }
    };
    //adds on 1
    const addons_count1 = ref(1);
    const increaseCount1 = () => {
      console.log("increasing");
      addons_count1.value += 1;
    }
    const decreaseCount1 = () => {
      if(addons_count1.value > 0)
        addons_count1.value -= 1;
    }

    //add ons 2
    const addons_count2 = ref(1);
    const increaseCount2 = () => {
      console.log("increasing");
      addons_count2.value += 1;
    }
    const decreaseCount2 = () => {
      if(addons_count2.value > 0)
        addons_count2.value -= 1;
    }


    
    //change size btn
    const selectedButton = ref(null);
   
    //showDots1
    const showDots1 = ref(true);
    const isDragging1 = ref(false);
    const onSlidingStart1 = () => {
      showDots1.value = !showDots1.value;
        };

    const onDragEnd1 = () => {
      isDragging1.value = false;
      showDots2.value = true; 
    };
    
    //showDots2
    const showDots2 = ref(true);
    const isDragging2 = ref(false);
    const onSlidingStart2 = () => {
      showDots2.value = !showDots2.value;
        };

    const onDragEnd2 = () => {
      isDragging2.value = false;
      showDots2.value = true; 
    };

    //showDots3
    const showDots3 = ref(true);
    const isDragging3 = ref(false);
    const onSlidingStart3 = () => {
      showDots3.value = !showDots3.value;
        };

    const onDragEnd3 = () => {
      isDragging3.value = false;
      showDots2.value = true; 
    };

    //showDots3
    const showDots4 = ref(true);
    const isDragging4 = ref(false);
    const onSlidingStart4 = () => {
      showDots4.value = !showDots4.value;
        };

    const onDragEnd4 = () => {
      isDragging4.value = false;
      showDots2.value = true; 
    };


    // chips
    const menuType = ref('push');
    const allCategory = ref('All');
    const product_categories = ['All', 'Breakfast', 'Chicken', 'Seafood', 'Veggie', 'Pizza', 'Desserts', 'Steak'];

    const navigate_category = (category) => {
      allCategory.value = category;
    };

    const filter_products = computed(() => {
      if (allCategory.value === 'All') {
        return product_list;
      } else {
        return product_list.filter(item => item.category === allCategory.value);
      }
    });

    // overlay
    const isMenuOpen = ref(false);
    const showBackdrop = () => {
      isMenuOpen.value = true;
    };

    const hideBackdrop = () => {
      isMenuOpen.value = false;
    };

    const hideMenu = () => {
      hideBackdrop();
      document.querySelector('ion-menu').close();
    };

    // nav
    const sidelink_id = ref(null);
    const sidelink_category = (id) => {
      sidelink_id.value = id;
    };

    // modal
    const isModalOpen = ref(false);
    const selectedProduct = ref(null);

    const selectProduct = (item) => {
      selectedProduct.value = item;
      isModalOpen.value = true;
    };

    const isOrderModalOpen = ref(false);
    const openOrderModal = () => {
      isOrderModalOpen.value = true;
    };

    const isCheckOutOpen = ref(false);
    const CheckOutOpen = () => {
      isCheckOutOpen.value = true;
    };

    const isPaymentOpen = ref(false);
    const PaymentOpen = () => {
      isPaymentOpen.value = true;
    }

    // Item Sliding
    const itemSliding1 = ref(null);
    const itemSliding2 = ref(null);
    const itemSliding3 = ref(null);
    const itemSliding4 = ref(null);

    const slideItem1 = async () => {
      const slidingElement1 = itemSliding1.value;
      if (slidingElement1 && slidingElement1.$el) {
        slidingElement1.$el.open('end');
       
      }
    
    };

    const slideItem2 = async () => {
      const slidingElement2 = itemSliding2.value;
      if (slidingElement2 && slidingElement2.$el) {
        slidingElement2.$el.open('end');
      }
    };

    const slideItem3 = async () => {
      const slidingElement3 = itemSliding3.value;
      if (slidingElement3 && slidingElement3.$el) {
        slidingElement3.$el.open('end');
      }
    };

      const slideItem4 = async () => {
      const slidingElement4 = itemSliding4.value;
      if (slidingElement4 && slidingElement4.$el) {
        slidingElement4.$el.open('end');
      }
    };

    return {
      piece_no,
      increasePiece,
      decreasePiece,
      order_no,
      increaseOrder,
      decreaseOrder,
      addons_count1,
      addons_count2,
      increaseCount1,
      increaseCount2,
      decreaseCount1,
      decreaseCount2,
      showDots1,
      showDots2,
      showDots3,
      showDots4,
      itemSliding1,
      itemSliding2,
      itemSliding3,
      itemSliding4,
      slideItem1,
      slideItem2,
      slideItem3,
      slideItem4,
      onDragEnd1,
      onDragEnd2,
      onDragEnd3,
      onDragEnd4,
      onSlidingStart1,
      onSlidingStart2,
      onSlidingStart3,
      onSlidingStart4,
      menuType,
      navigate_category,
      filter_products,
      product_categories,
      allCategory,
      showBackdrop,
      hideBackdrop,
      isMenuOpen,
      hideMenu,
      sidelink_category,
      sidelink_id,
      isModalOpen,
      selectProduct,
      selectedProduct,
      isOrderModalOpen,
      openOrderModal,
      isCheckOutOpen,
      CheckOutOpen,
      isPaymentOpen,
      PaymentOpen,
     
      selectedButton
      
    };
  },

  
});
</script>

  
  <style scoped>
  ::-webkit-scrollbar{
    scrollbar-width:none;
  }
  ion-content::part(scroll)::-webkit-scrollbar {
    display: none;
  }
  ion-content::part(scroll) {
    scrollbar-width: none;
  }
  
  ion-menu{
    --transition-duration:6s !important;
  
  }
  ion-page::-webkit-scrollbar {
    width: 0;
  }
  ion-thumbnail{
    --size:100px;
  }
  ion-thumbnail.user{
    --size:60px;
  }
  
  .ion-item-divider{
    padding-bottom:20px;
    border-bottom:2px solid #ebebeb !important;
  }
  
  .fade-enter-active, .fade-leave-active{
    transition:opacity 0.3s ease-in-out;
  }
  .fade-enter, .fade-leave-to{
    opacity:0;
  }
  .custom-ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding: 0;
  }
.dropdown_div{
    border:2px solid #e9e9e9;
}

ion-select::part(icon){
    display:none !important;
}
ion-select::part(label){
    color:#7D858C !important;
}
.size_btn ion-button{
    border:2px solid #E5E8EB;
}

.btn_active{
    background-color: #FFC02E;
    border:1px solid red;
    color:#fff;
    transition:all 0.3s;
}
ion-checkbox{
    --size:13px;
    --checkbox-background-checked: #fff;
    --checkmark-color: rgb(254, 111, 111);
    --border-color:white;

    --border-color-checked:#fff;
}

.orderModal{
  
    --width:85%;
    --backdrop-opacity:var(--ion-backdrop-opacity, 1);
    --border-radius:20px;
    --max-height:270px;
    --max-width:400px;
    
}
.orderModal::part(backdrop) {
    --background: rgba(0, 0, 0, 0.2) !important; /* Set backdrop color */
    --backdrop-opacity: 0.2 !important; /* Ensure the opacity is set */
    --width:100%
}
.thumbs_up{
    --size:60px;
}
ion-item.custom_item::part(native){
    height:90px !important;
    background-color: #E9ECEF;
    border-radius:15px;
}
ion-item.custom_order::part(native){
  height:190px;
  background-color: #E9ECEF;
  border-radius:15px;
}
.price_div{
  border-top:2px solid #e6e4e4;
}
ion-item.custom_payment::part(native){
    height:70px !important;
    background-color: #E9ECEF;
    border-radius:15px;
}
ion-radio{
  --color-checked:#FFC02E;
  --color: #fff;
  transform:scale(0.8);

}
ion-radio::part(container){
  border:none;
}
ion-item.change_input::part(native){
  background-color:#F8F9FA;
  border-radius:15px;
  border:2px solid #E2E6E9;
}
ion-input{
  --color:#7a7a7a;
}

.payment_footer{
  border-top:2px solid #f0f0f0;
  box-shadow:none;

}




</style>