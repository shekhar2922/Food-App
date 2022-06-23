import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder, setClose }) => {
  const [customer, setCustomer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if(total <= 0){
      alert("Please add a product to cart first")
      return;
    }
    createOrder({ customer, phoneNumber, address, total, method: 0 });
    alert("Your order is successfull!")
    setClose(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1 className={styles.title}>You will pay ${total} after delivery.</h1>
        <form onSubmit={handleClick}>
          <div className={styles.item}>
            <label className={styles.label}>FullName</label>
            <input
              placeholder="John Doe"
              type="text"
              className={styles.input}
              onChange={(e) => setCustomer(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="text"
              placeholder="+1 234 567 89"
              className={styles.input}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              maxLength="10"
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Full Address</label>
            <textarea
              rows={5}
              placeholder="Elton St. 505 NY"
              type="text"
              className={styles.textarea}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderDetail;
