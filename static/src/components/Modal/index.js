import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Input from '../Input'

const Modal = ({open, setOpen, addProduct}) => {
  const cancelButtonRef = useRef(null)
 const [product, setProduct] = useState({
  name: "",
  price: "",
  image: "",
 })

 const onChangeHandler = (e) => {
  setProduct((prev) => ({...prev, [e.target.name]: e.target.value}))
 }

  return (
   <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
     <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
     >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
     </Transition.Child>

     <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
       <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
       >
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-3 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
         <div className="sm:flex sm:items-start">

          <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
           <h3 className='text-lg font-medium'>Add Product</h3>
           <div className="mt-2">
            <div>
             <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

              <Input
               label="Product Name"
               name="name"
               value={product?.name}
               onChange={(e) => onChangeHandler(e)}
              />
              <Input
               label="Price"
               name="price"
               value={product?.price}
               onChange={(e) => onChangeHandler(e)}
              />
              <Input
               label="Image Name"
               name="image"
               value={product?.image}
               onChange={(e) => onChangeHandler(e)}
              />
             </div> 
            </div>
           </div>
          </div>
         </div>
         <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
           type="button"
           className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
           onClick={() => {
             addProduct(product);
           }}
          >
           Add Product
          </button>
          <button
           type="button"
           className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
           onClick={() => setOpen(false)}
           ref={cancelButtonRef}
          >
           Cancel
          </button>
         </div>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition.Root>
  )
}

export default Modal