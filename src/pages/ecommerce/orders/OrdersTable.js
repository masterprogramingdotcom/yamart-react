import React, { useEffect, useState } from "react";
import {Pagination} from "../../../components/ECommercePageComponents";
import {ordersTableData} from "../ecommerceContant";
import {  Orderget} from "../../../api/orders";
import { useSelector } from "react-redux";

const OrdersTable = () => {
	const [orderdid, setorderdid] = useState()
	const [isLoading, setIsLoading] = useState(false);

	const isLoad = useSelector((state) => state.loader.isLoad);
	const token = useSelector((state) => state.auth.token);
  
const [orders, setorders] = useState()
	useEffect(() => {
		(async () => {
		  setIsLoading(true);
		  const res = await Orderget(token);
		  setorders(res.data);
		})();
		setIsLoading(false);
	  }, [isLoad, token]);
	  console.log(orders)
	return (
		<div className="overflow-hidden w-full max-w-6xl mx-auto overflow-x-auto rounded-lg border border-gray-200">
			<table className="min-w-full divide-y divide-gray-100 text-sm">
				<thead className="bg-gray-100">
					<tr className="font-medium text-left text-darken">
						<th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-3 text-left">
							<input className="h-4 cursor-pointer w-4 rounded border-gray-200 text-primary focus:ring-primary" type="checkbox" id="SelectAll" />
						</th>
						{ordersTableData.header.map((each) => (
							<th key={each.id} className="whitespace-nowrap px-4 text-base py-3">
								{each.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 text-muted">
					{orders?.map((each) => (
						<tr key={each.id}>
							<td className="sticky inset-y-0 left-0 bg-white px-4 py-3">
								<input className="h-4 w-4 cursor-pointer rounded border-gray-200 text-primary focus:ring-primary" type="checkbox" id={each.id} />
							</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.id}</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.order_id}</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.user_first_name} {each.user_last_name}</td>
							<td className="whitespace-nowrap px-4 py-3 ">₹ {each.Total}.00</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.payment_mode}</td>
							<td className="whitespace-nowrap px-4 py-3 text-white tracking-wide text-xs">
								{each.status === "not-paid" && <span className="bg-indigo-500 px-3 py-1 rounded-full">On pre-order (not paid)</span>}
								{each.status === "awaiting" && <span className="bg-blue-500 px-3 py-1 rounded-full">Awaiting check payment</span>}
								{each.status === "preparing" && <span className="bg-yellow-500 px-3 py-1 rounded-full">Preparing the order</span>}
								{each.status === "error" && <span className="bg-red-500 px-3 py-1 rounded-full">Payment error</span>}
								{each.status === "Accepted" && <span className="bg-green-500 px-3 py-1 rounded-full">Accepted</span>}
							</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.ordered_date}</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* <Pagination selectValue={""} increaseValue={""} /> */}
		</div>
	);
};

export default OrdersTable;
