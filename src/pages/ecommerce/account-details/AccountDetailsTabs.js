import React, {useState} from "react";
import GST from "./tabs/gst"
import PICKUP from "./tabs/pickup"
import ACCOUNT from "./tabs/account"
import SUPPLIER from "./tabs/supplier"
const AccountDetailsTabs = ({ formik }) => {
    const [active, setActive] = useState(0);
	const [clicked, setClicked] = useState(0);
	const blocks = [
		{id: 0, name: "GST Details", icons: ""},
		{id: 1, name: "Pickup Address", icons: ""},
		{id: 2, name: "Account Details", icons: ""},
		{id: 3, name: "Supliers Details", icons: ""},
	];
	const handleActive = (index) => {
		setActive(index);
		setClicked(index);
	};
    return (
		<div className=" px-4 py-3 min-h-[300px] w-full bg-white border rounded-lg border-gray-200">
			<nav className="flex items-center gap-10 border-b border-gray-200 ">
				{blocks.map((block, index) => (
					<button
						key={block.id}
						onClick={() => handleActive(index)}
						className={` text-base font-sans-pro  pb-3 px-2 border-b-2 ${index === clicked ? "border-primary text-primary font-semibold " : "border-transparent text-gray-500"}`}
					>
						{block.name}
					</button>
				))}
			</nav>
			<div className="mt-5 mb-5">
			
				{active === 0 && <GST formik={formik} />}
				{active === 1 && <PICKUP  formik={formik} />}
				{active === 2 && <ACCOUNT formik={formik}  />}
				{active === 3 && <SUPPLIER formik={formik}  />}
			</div>
		</div>
	);
};
export default AccountDetailsTabs
