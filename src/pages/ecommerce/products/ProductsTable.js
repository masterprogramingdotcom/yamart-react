import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { productGet, productDelete } from "../../../api/product";
import { Pagination } from "../../../components/ECommercePageComponents";
import { productsTableData } from "../ecommerceContant";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ProductsTable = (Query) => {
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [pdelete, setpdelete] = useState()
  const isLoad = useSelector((state) => state.loader.isLoad);
  const token = useSelector((state) => state.auth.token);
console.log(Query)
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await productGet(token);
      setProducts(res.data);
    })();
    setIsLoading(false);
  }, [isLoad, token]);

  useEffect(() => {
  (async () => {
      const res = await productDelete(token, pdelete);
      if(res.status===204) {
        toast.success("Product Deleted Successful!");
        var newallproduct = products.filter((item)=> {
          return item.id !==pdelete;
        })
        setProducts(newallproduct)
      }
      if (res?.code === "ERR_BAD_REQUEST") {
        toast.error("Some Error! please try again!");
      }
})();
  }, [pdelete]);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  console.log(currentTableData)
  
// console.log(products.filter(user=>user.title.toLowerCase().includes("a")))
  return (
    <div className="overflow-hidden w-full max-w-6xl mx-auto overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-100 text-sm">
        <thead className="bg-gray-100">
          <tr className="font-medium text-left text-darken">
            <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-3 text-left">
              <input
                className="h-4 cursor-pointer w-4 rounded border-gray-200 text-primary focus:ring-primary"
                type="checkbox"
                id="SelectAll"
              />
            </th>
            {productsTableData?.header.map((each) => (
              <th key={each.id} className="whitespace-nowrap px-4 py-3">
                {each.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-muted">
          {!isLoading ? (
            products &&
            products.filter(user=>user.title.toLowerCase().includes(Query.Query)).map((each) => (
              <tr key={each.id}>
                <td className="sticky inset-y-0 left-0 bg-white px-4 py-3">
                  <input
                    className="h-4 w-4 cursor-pointer rounded border-gray-200 text-primary focus:ring-primary"
                    type="checkbox"
                    id={each.id}
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-3 capitalize">
                  {each.title}
                </td>
                <td className="whitespace-nowrap px-4 py-3 ">
                  {each.category}
                </td>
                <td className="whitespace-nowrap px-4 py-3 ">
                  {each.price ? ` ₹ ${each.price}.00` : "Not Available"}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-green-600">
                  {each.availablity}
                </td>
                <td className="whitespace-nowrap px-4 flex items-center  py-3">
                  <Link to="" className="text-2xl">
                    <AiFillEye />
                  </Link>
                  <Link to={`/edit-product/${each.id}`} className="text-sm	px-2">
                    Edit
                  </Link>
                  <Link onClick={(e)=> {setpdelete(each.id)}} to="" className="text-sm	px-2">
                    Delete
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <p className="mx-2">Loading...</p>
          )}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductsTable;
