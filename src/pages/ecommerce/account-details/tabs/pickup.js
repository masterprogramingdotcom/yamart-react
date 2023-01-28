import react from "react"
const pickup = ({formik}) => {

return (
    <div className="max-w-xl">
<div className="">
<div className="mb-3  w-full flex flex-row gap-4 content-center">
<div class="py-2 px-2 flex mb-4 text-sm text-gray-700 rounded bg-red-100"  role="alert">
<svg aria-hidden="true" class=" flex-shrink-0 inline w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">product will be picked up from this location for delivery</span>
  </div>
  </div>
  </div>
        <input
          required
          type="text"
          name="address_1"
          value={formik.values.address_1}
          onChange={formik.handleChange}
          className="mb-3 w-full text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Room/ Floor/ Building Number"
        />
          <input
          required
          type="text"
          name="address_2"
          value={formik.values.address_2}
          onChange={formik.handleChange}
          className="mb-3 w-full text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Street/ Locality/ Landmark"
        />
        <div className="mb-3  w-full flex flex-row gap-4">
        <input
          required
          type="text"
          name="pincode"
          value={formik.values.pincode}
          onChange={formik.handleChange}
          className="w-96  text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Pincode"
        />
         <input
          required
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          className="w-96  text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="City"
        />
         <input
          required
          type="text"
          name="state"
          value={formik.values.state}
          onChange={formik.handleChange}
          className="w-96  text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="State"
        />
        </div>
        <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Use address registered on GST</label>
</div>
</div>
<div class="mt-10 grid grid-cols-[400px_auto] gap-2">
  <div className="">
  <p class=" font-light text-gray-500 dark:text-gray-400">Room/ Floor/ Building Number </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300">{formik.values.address_1}</p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">Pincode </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{formik.values.pincode} </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">Street/ Locality </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{formik.values.address_2}</p>
  </div>

  <div><p class=" font-light text-gray-500 dark:text-gray-400">City </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{formik.values.city} </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">Landmark </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{formik.values.address_2} </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">State </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{formik.values.state} </p>
  </div>
</div>
        </div>
);

};
export default pickup;