import react from "react"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { LoadingBtn } from "../../../../components/AuthPageComponents";

const Gst = ({formik}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [gstnumber, setgstnumber] = useState("")
  const [gstdata, setgstdata] = useState("")
  const [gstin, setgstin] = useState()
  const [business_type, setbusiness_type] = useState()
  const [business_name, setbusiness_name] = useState()
  const [business_address, setbusiness_address] = useState()
  

const handlechange = (async) => {
  setIsLoading(true);
		 axios.get(`http://sheet.gstincheck.co.in/check/d289319584384f2b08b8f8fc5e0ab1c1/${gstnumber}/`,)
			 .then((response = response.json()) => {
        setIsLoading(false);
		     setgstdata(response?.data?.data)
         setgstin(response?.data?.data.gstin)
         setbusiness_type(response?.data?.data.dty)
         setbusiness_name(response?.data?.data.lgnm)
         setbusiness_address(response?.data?.data.pradr.adr)
         localStorage.setItem("gstdata", JSON.stringify(response?.data?.data));
        				})
      }
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
          value={gstnumber}
          onChange={(e) => setgstnumber(e.target.value)}
          className="w-96  text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Product Name"
        />
        <input id="link-checkbox" type="checkbox" value="" className="mt-2 mx-8 content-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        {isLoading ? (
            <div className="w-full flex justify-center items-center h-full">
              <LoadingBtn />
            </div>):(
        <button onClick={handlechange} className="flex bg-black hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-lg">
  Verify
</button>)
}
        </div>
        <div class="max-w-2xl mt-10 grid grid-cols-2 gap-2">
  <div>
  <p class=" font-light text-gray-500 dark:text-gray-400">GSTIN </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300">{gstdata?.gstin}</p>
  </div>

  <div><p class=" font-light text-gray-500 dark:text-gray-400">Business Type </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{gstdata?.dty} </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">Business Name </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{gstdata?.lgnm} </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">Registered Business Address </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">{gstdata?.pradr?.adr} </p>
  </div>
  <div><p class=" font-light text-gray-500 dark:text-gray-400">PAN Number </p>
  <p class="mb-3 text-gray-900 dark:text-gray-300 ">AAJCA4788P </p>
  </div>

</div>
        </div>
);

};
export default Gst;