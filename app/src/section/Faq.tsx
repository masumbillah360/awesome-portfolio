// import React, { useState } from 'react';

// const ComponentName = () => {
//     return (
//         <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">

//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="max-w-2xl mx-auto text-center">
//                     <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//                         Frequently asked questions
//                     </h2>
//                     <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
//                         Ask everything you need to know about our products and services.
//                     </p>
//                 </div>

//                 <div
//                     className="max-w-5xl mx-auto mt-12 overflow-hidden border border-gray-200 divide-y divide-gray-200 sm:mt-16 rounded-xl "
//                     x-data="{ active: 1 }">
//                     <div>
//                         <h3>
//                             <button
//                                 //    @click="expanded = !expanded" :aria-expanded="expanded"
//                                 className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6">
//                                 <span>
//                                     Q. How this theme is different from others in market?
//                                 </span>
//                                 <span x-show="expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                                     </svg>
//                                 </span>
//                                 <span x-show="!expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                                     </svg>
//                                 </span>
//                             </button>
//                         </h3>

//                         <div x-show="expanded" x-collapse>
//                             <div className="px-6 pb-6">
//                                 <p className="text-base text-gray-600">
//                                     It is a long established fact that a reader will be distracted by the readable content of a page when
//                                     looking at its
//                                     layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div x-data="{
//                                           id: 2,
//                                           get expanded() {
//                                               return this.active === this.id
//                                           },
//                                           set expanded(value) {
//                                               this.active = value ? this.id : null
//                                           },
//                                       }" role="region">
//                         <h3>
//                             <button
//                                 className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6">
//                                 <span>
//                                     Q. Does this theme supports plugins?
//                                 </span>
//                                 <span x-show="expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                                     </svg>
//                                 </span>
//                                 <span x-show="!expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                                     </svg>
//                                 </span>
//                             </button>
//                         </h3>

//                         <div x-show="expanded" x-collapse>
//                             <div className="px-6 pb-6">
//                                 <p className="text-base text-gray-600">
//                                     It is a long established fact that a reader will be distracted by the readable content of a page when
//                                     looking at its
//                                     layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div x-data="{
//                                                       id: 3,
//                                                       get expanded() {
//                                                           return this.active === this.id
//                                                       },
//                                                       set expanded(value) {
//                                                           this.active = value ? this.id : null
//                                                       },
//                                                   }" role="region">
//                         <h3>
//                             <button
//                                 className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6">
//                                 <span>
//                                     Q. Do you provide any moneyback guarantee in this product?
//                                 </span>
//                                 <span x-show="expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                                     </svg>
//                                 </span>
//                                 <span x-show="!expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                                     </svg>
//                                 </span>
//                             </button>
//                         </h3>

//                         <div x-show="expanded" x-collapse>
//                             <div className="px-6 pb-6">
//                                 <p className="text-base text-gray-600">
//                                     It is a long established fact that a reader will be distracted by the readable content of a page when
//                                     looking at its
//                                     layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div x-data="{
//                                                         id: 4,
//                                                         get expanded() {
//                                                             return this.active === this.id
//                                                         },
//                                                         set expanded(value) {
//                                                             this.active = value ? this.id : null
//                                                         },
//                                                     }" role="region">
//                         <h3>
//                             <button
//                                 //   @click="expanded = !expanded" :aria-expanded="expanded"
//                                 className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6">
//                                 <span>
//                                     Q. What payment method do you support?
//                                 </span>
//                                 <span x-show="expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                                     </svg>
//                                 </span>
//                                 <span x-show="!expanded" aria-hidden="true" className="ml-4">
//                                     <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                                     </svg>
//                                 </span>
//                             </button>
//                         </h3>

//                         <div x-show="expanded" x-collapse>
//                             <div className="px-6 pb-6">
//                                 <p className="text-base text-gray-600">
//                                     It is a long established fact that a reader will be distracted by the readable content of a page when
//                                     looking at its
//                                     layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
//                                 </p>
//                             </div>
//                         </div>

//                         <div x-data="{
//                                                           id: 5,
//                                                           get expanded() {
//                                                               return this.active === this.id
//                                                           },
//                                                           set expanded(value) {
//                                                               this.active = value ? this.id : null
//                                                           },
//                                                       }" role="region">
//                             <h3>
//                                 <button
//                                     //    @click="expanded = !expanded" :aria-expanded="expanded"
//                                     className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6">
//                                     <span>
//                                         Q. Will I get money back if I am not satisfied?
//                                     </span>
//                                     <span x-show="expanded" aria-hidden="true" className="ml-4">
//                                         <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                             stroke="currentColor">
//                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                                         </svg>
//                                     </span>
//                                     <span x-show="!expanded" aria-hidden="true" className="ml-4">
//                                         <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                             stroke="currentColor">
//                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                                         </svg>
//                                     </span>
//                                 </button>


//                                 <div x-show="expanded" x-collapse>
//                                     <div className="px-6 pb-6">
//                                         <p className="text-base text-gray-600">
//                                             It is a long established fact that a reader will be distracted by the readable content of a page when
//                                             looking at its
//                                             layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
//                                         </p>
//                                     </div>
//                                 </div>


//                                 <div x-data="{
//                                                             id: 2,
//                                                             get expanded() {
//                                                                 return this.active === this.id
//                                                             },
//                                                             set expanded(value) {
//                                                                 this.active = value ? this.id : null
//                                                             },
//                                                         }" role="region">
//                                     <h3>
//                                         <button 
//                                         // @click="expanded = !expanded" :aria-expanded="expanded"
//                 className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6">
//                                         <span>
//                                             Q. How do you provide support?
//                                         </span>
//                                         <span x-show="expanded" aria-hidden="true" className="ml-4">
//                                             <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                                 stroke="currentColor">
//                                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                                             </svg>
//                                         </span>
//                                         <span x-show="!expanded" aria-hidden="true" className="ml-4">
//                                             <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                                 stroke="currentColor">
//                                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//                                             </svg>
//                                         </span>
//                                     </button>
//                             </h3>
//                         </div>

//                         <div x-show="expanded" x-collapse>
//                             <div className="px-6 pb-6">
//                                 <p className="text-base text-gray-600">
//                                     It is a long established fact that a reader will be distracted by the readable content of a page when
//                                     looking at its
//                                     layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
//                                 </p>
//                             </div>
//                         </div>


//                         <div className="max-w-5xl mx-auto mt-8 overflow-hidden text-center bg-gray-100 sm:mt-12 rounded-xl ">
//                             <div className="px-6 py-12 sm:p-12">
//                                 <div className="max-w-sm mx-auto">
//                                     <div className="relative z-0 flex items-center justify-center -space-x-2 overflow-hidden">
//                                         <img className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
//                                             src="https://landingfoliocom.imgix.net/store/collection/saasui/images/faq/1/avatar-male.png" alt="">
//                                             <img className="relative z-30 inline-block w-16 h-16 rounded-full ring-4 ring-gray-100"
//                                                 src="https://landingfoliocom.imgix.net/store/collection/saasui/images/faq/1/avatar-female-1.png" alt="">
//                                                 <img className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
//                                                     src="https://landingfoliocom.imgix.net/store/collection/saasui/images/faq/1/avatar-female-2.png" alt="">
//                                                 </div>

//                                                 <h3 className="mt-6 text-2xl font-semibold text-gray-900">
//                                                     Still have questions?
//                                                 </h3>
//                                                 <p className="mt-2 text-base font-normal text-gray-600">
//                                                     Can't find the answer you're looking for? Please chat with our friendly team.
//                                                 </p>
//                                                 <div className="mt-6">
//                                                     <a href="#" title=""
//                                                         className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
//                                                         role="button">
//                                                         Start free trial
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                     )
// }
//                     export default ComponentName;