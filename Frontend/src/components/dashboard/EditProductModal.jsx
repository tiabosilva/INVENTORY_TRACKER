import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

const EditProductModal = ({ isOpen, onClose, product, onUpdateProduct }) => {
  const [previewImage, setPreviewImage] = useState(product?.image);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: product
  });

  useEffect(() => {
    if (product) {
      reset(product);
      setPreviewImage(product.image);
    }
  }, [product, reset]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      setPreviewImage(URL.createObjectURL(file));
    }
  });

  const onSubmit = (data) => {
    const updatedProduct = {
      ...product,
      ...data,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
      image: previewImage,
      status: parseInt(data.stock) > 0 
        ? parseInt(data.stock) <= 5 
          ? 'Low Stock' 
          : 'In Stock'
        : 'Out of Stock',
    };

    onUpdateProduct(updatedProduct);
    onClose();
  };

  if (!product) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#1c2537] p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-2xl font-semibold text-white">
                    Edit Product
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Product Name
                      </label>
                      <input
                        {...register('name', { required: 'Product name is required' })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0f1c] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Category
                      </label>
                      <select
                        {...register('category', { required: 'Category is required' })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0f1c] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
                      >
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Food">Food</option>
                        <option value="Books">Books</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.category && (
                        <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Price
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        {...register('price', { 
                          required: 'Price is required',
                          min: { value: 0, message: 'Price must be positive' }
                        })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0f1c] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
                      />
                      {errors.price && (
                        <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Stock
                      </label>
                      <input
                        type="number"
                        {...register('stock', { 
                          required: 'Stock is required',
                          min: { value: 0, message: 'Stock cannot be negative' }
                        })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0f1c] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
                      />
                      {errors.stock && (
                        <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Description
                    </label>
                    <textarea
                      {...register('description', { required: 'Description is required' })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0f1c] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Product Image
                    </label>
                    <div
                      {...getRootProps()}
                      className="border-2 border-dashed border-[#2c374b] rounded-lg p-6 text-center cursor-pointer hover:border-[#33bbcf] transition-colors"
                    >
                      <input {...getInputProps()} />
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="mx-auto h-48 w-48 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="text-gray-400">
                          <p>Drag and drop an image here, or click to select one</p>
                          <p className="text-sm mt-2">PNG, JPG, WEBP up to 5MB</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 rounded-lg border border-[#2c374b] text-white hover:bg-[#2c374b] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[#33bbcf] text-white hover:bg-[#2ba9bd] transition-colors"
                    >
                      Update Product
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditProductModal;