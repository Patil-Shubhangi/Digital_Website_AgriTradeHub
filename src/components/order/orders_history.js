import React, { useState, useEffect } from "react";
import img from "../images/robo.png";
import Back from "../common/Back";
import "./orders.css";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);
  const [markedOrderId, setMarkedOrderId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:9000/orders");
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  // Search functionality
  const filteredOrders = orders.filter(order =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleStatusChange = async (newStatus, orderId) => {
    try {
      const response = await fetch(
        `http://localhost:9000/orders/${orderId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
      fetchOrders();
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  };

  const handleRatingChange = (newRating, orderId) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order._id === orderId ? { ...order, rating: newRating } : order
      )
    );
    // Here you can add code to update the rating in the backend database
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedOrders = orders.map(order =>
        order.status === "Shipped" ? { ...order, status: "Delivered" } : order
      );
      setOrders(updatedOrders);
    }, 5000); // Change status after 5 seconds (for demonstration purposes)
    return () => clearTimeout(timer);
  }, [orders]);

  const handleMark = (orderId) => {
    setMarkedOrderId(orderId === markedOrderId ? null : orderId);
  };

  return (
    <div className="container">
      <section className="order mb">
        <Back name="Orders" title="Sell - Buy" cover={img} />
        </section>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Estimated Arrival</th>
              <th>Rate Us</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.productName}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(e.target.value, order._id)
                    }
                    className="status-select"
                  >
                    <option value="Ordered" className="ordered">Ordered</option>
                    <option value="Pending" className="pending">Pending</option>
                    <option value="Shipped" className="shipped">Shipped</option>
                    <option value="Delivered" className="delivered">Delivered</option>
                  </select>
                </td>
                <td>{order.deliveryDate}</td>
                <td>
                  <StarRating
                    value={order.rating}
                    onChange={(newRating) => handleRatingChange(newRating, order._id)}
                  />
                </td>
                <td>
                  <button className="normal-button" onClick={() => handleMark(order._id)}>Track Address</button>
                  {markedOrderId === order._id && (
                    <div>
                      <p className="hidden-column"><strong>Order ID:</strong> {order._id}</p>
                      <p className="hidden-column"><strong>Address:</strong> {order.shippingAddress}</p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        ordersPerPage={ordersPerPage}
        totalOrders={filteredOrders.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="#!">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

const StarRating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHoverValue(ratingValue)}
            onMouseLeave={() => setHoverValue(0)}
            onClick={() => onChange(ratingValue)}
          >
            {ratingValue <= (hoverValue || value) ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default OrdersList;
