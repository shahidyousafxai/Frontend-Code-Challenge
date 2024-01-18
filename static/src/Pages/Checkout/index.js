import Header from "../../components/Header"

const products = [
 {
  id: 1,
  name: 'Fusion',
  price: '$49',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
 },
 {
  id: 2,
  name: 'Fusion',
  price: '$49',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
 },
 {
  id: 3,
  name: 'Fusion',
  price: '$49',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
 },
 {
  id: 4,
  name: 'Fusion',
  price: '$49',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
 },
 {
  id: 5,
  name: 'Fusion',
  price: '$49',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
 },
]

export default function Items() {
 return (
  <Header>
   <div className="bg-gray-100">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
     <div className="font-bold text-3xl capitalize">Checkout Items</div>
     <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
      {products?.map((product) => (
       <div key={product?.id} className="group relative border p-2 rounded-lg bg-gray-100 shadow-md">
        <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
         <img src={product.imageSrc} alt="" className="object-cover object-center" />
         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex items-end p-4 opacity-0 group-hover:opacity-100">
          <div className="w-full rounded-md bg-gray-200 bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter whitespace-nowrap">
           Checkout Product
          </div>
         </div>
        </div>
        <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
         <h3>
          <div>
           <span aria-hidden="true" className="absolute inset-0" />
           {product.name}
          </div>
         </h3>
         <p>{product.price}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </Header>
 )
}
