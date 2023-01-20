import react from "react"

const gst = (formlink) => {

return (
    <div className="w-100">
    <div className="w-96">
<h6 class="font-medium leading-tight text-base mt-0 mb-2">GST Number is required to sell products on Yamart</h6>
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Because the Government needs all suppliers to provide their GST number to sell online. </p>

</div>
<div className="w-full flex flex-row gap-4">
        <input
          required
          type="text"
          name="title"
          value=""
          onChange=""
          className="w-96  text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Product Name"
        />
        <input id="link-checkbox" type="checkbox" value="" className="mt-2 mx-8 content-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

        <button className="flex bg-black hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-lg">
  Verify
</button>
        </div>
        <div class="max-w-2xl mt-10 grid grid-cols-2 gap-2">
  <div>
  <p class=" font-light text-gray-500 dark:text-gray-400">GSTIN </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300">27AAJCA4788P1ZR </p>
  </div>

  <div><p class=" font-light text-gray-500 dark:text-gray-400">Business Type </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">Service Provision </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">Business Name </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">ATS CARGO PRIVATE LIMITED </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">Registered Business Address </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">208, 2ND FLOOR, AVOIR, NIRMAL GALAXY,
MULUND W, LBS MARG, Pincode - 400080,
Mumbai Suburban, Maharashtra </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">PAN Number </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">AAJCA4788P </p>
  </div>

</div>
<button class="bg-primary hover:bg-indigo-500 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  "><span>Continue</span>
 </button>
        </div>
);

};
export default gst;