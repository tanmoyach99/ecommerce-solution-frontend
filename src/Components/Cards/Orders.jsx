import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "./ShowPaymentInfo";

const Orders = ({ orders, handleStatusChange }) => {
  const showOrderInTable = (order) => {
    console.log(order);
    return (
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Color</th>
            <th scope="col">Count</th>
            <th scope="col">Shipping</th>
          </tr>
        </thead>
        <tbody>
          {order?.products?.map((p, i) => {
            return (
              <tr key={i}>
                <td>
                  {" "}
                  <b>{p?.product?.title}</b>{" "}
                </td>
                <td>{p?.product?.price}</td>
                <td>{p?.product?.brand}</td>
                <td>{p?.color}</td>
                <td>{p?.count}</td>
                <td>
                  {p?.product?.shipping === "Yes" ? (
                    <CheckCircleOutlined className="text-success" />
                  ) : (
                    <CloseCircleOutlined className="text-danger" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  return (
    <div>
      {orders.map((order) => {
        return (
          <div key={order?._id} className="row pb-5">
            <div className="btn btn-light p-2">
              <ShowPaymentInfo order={order} showStatus={false} />
              <div className="row">
                <div className="col-md-2">Delivery Status : </div>

                <div className="col-md-2">
                  <select
                    onChange={(e) =>
                      handleStatusChange(order?._id, e.target.value)
                    }
                    className="form-control bg bg-warning text-white"
                    value={order?.orderStatus}
                    name="status"
                  >
                    <option value="Not Processed"> Not Processed</option>
                    <option value=" Processing">Processing</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                    <option value="Cash On Delivery">Cash On Delivery</option>
                  </select>
                </div>
              </div>
            </div>
            {showOrderInTable(order)}
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
