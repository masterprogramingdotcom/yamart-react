import react from "react"
const supplier = ({formik}) => {

return (
    <div className="max-w-xl">
<div className="">
<div className="mb-3  w-full flex flex-row gap-4 content-center">
<div class="py-2 px-2 flex mb-4 text-sm text-gray-700 rounded bg-red-100"  role="alert">
<svg aria-hidden="true" class=" flex-shrink-0 inline w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">“Store Name” is visible on the Yamart reseller app with your listed products.</span>
  </div>
  </div>
  </div>
        <input
          required
          type="text"
          name="store_name"
          value={formik.values.store_name}
          onChange={formik.handleChange}
          className="mb-3 w-full text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Store Name"
        />
        
<p class="mb-4 mt-2 font-light text-gray-500 dark:text-gray-400">Eg. Business Name, Trade Name, etc. </p>

<input
          required
          type="text"
          name="full_name"
          value={formik.values.full_name}
          onChange={formik.handleChange}
          className="mb-4 w-full text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Your Full Name"
        />
          <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to comply with Yamart seller T&C</label>
</div>
</div>
        </div>
);

};
export default supplier;