import react,{useState} from "react"
import { useEffect } from "react";
const Account = ({formik}) => {
  const [site_image, setsite_image] = useState('')
 const [account_number, setaccount_number] = useState()
 const [caccount_number, setcaccount_number] = useState()
 const handleaccount = (e) => {
  setaccount_number(e.target.value)
 }
 const handlecaccount = (e) => {
  setcaccount_number(e.target.value)
 }
 useEffect(() => {
 if(account_number===caccount_number) {
  formik.setFieldValue(`account_number`,account_number);
 }
 else {
  console.log("account number not Matching")
 }
},[caccount_number]);
  useEffect(() => {
    formik.setFieldValue(`bank_image`,site_image);
  },[site_image]);


return (
    <div className="max-w-xl">
<div className="">
<div className="mb-3  w-full flex flex-row gap-4 content-center">
<div class="py-2 px-2 flex mb-4 text-sm text-gray-700 rounded bg-red-100"  role="alert">
<svg aria-hidden="true" class=" flex-shrink-0 inline w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Bank account should be in the name of registered business name or trade name as per GSTIN.</span>
  </div>
  </div>
  </div>
        <input
          required
          type="text"
          name="account_number"
          value={account_number}
          onChange={handleaccount}
          className="mb-3 w-full text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Account Number"
        />
          <input
          required
          type="text"
          name="caccount_number"
          onChange={handlecaccount}
          value={caccount_number}
          className="mb-3 w-full text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Confirm Account Number "
        />
          <input
          required
          type="text"
          name="ifsc_code"
          value={formik.values.ifsc_code}
          onChange={formik.handleChange}
          className="mb-3 w-full text-darken border border-black focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="IFSC Code"
        />
<div className="mb-3  w-full flex flex-row gap-4 content-center">
<div class="py-2 px-2 flex mb-4 text-sm text-gray-700 rounded bg-red-100"  role="alert">
<svg aria-hidden="true" class=" flex-shrink-0 inline w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Please add Cancelled Cheaque/ Passbook for verification.</span>
  </div>
  </div>
  </div>
  <div class="flex items-center justify-start w-full">
    <label for="dropzone-file" class="border border-black rounded-md">
        <div class="px-4 flex flex-row items-center justify-center">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Upload Cancelled Cheque/Passbook</span></p>
        </div>
        <input onChange={(e) => { setsite_image(e.target.files[0]) }}   id="dropzone-file" type="file" class="hidden" name="bank_image"/>
    </label>
</div> 
<p class="mb-3 mt-3 font-light text-gray-500 dark:text-gray-400">Cheque/Passbook should have business or trade name on it. </p>
</div>
        </div>

);

};
export default Account;