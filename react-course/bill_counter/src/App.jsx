import { useState } from 'react';
import './App.css';
import AllProducts from './AllProducts';
import ItemInput from './ItemInput';
import GeneratedBills from './GeneratedBills';

function App() {

  const [customerName,setCustommerName] = useState("");
  const [customerPhone,setCustomerPhone] = useState("+91")

  const [productName,setProductName] = useState("");
  const [productQTY,setProductQTY] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

  const [productList, setProductList] = useState([]);
  const [showGeneretedBill,setShowGeneretedBills] = useState(false);

  const handleAddButton =()=>{
    let obj1 ={
      productName:productName,
      qty: productQTY,
      total: productQTY* productPrice
    }
    setProductList([...productList,obj1]);
    setProductName("");
    setProductQTY(0);
    setProductPrice(0);

  }

  const handleGeneretBills =()=>{
    if(!showGeneretedBill){
      setShowGeneretedBills(true);
    }
  }

  const resetBills = ()=>{
    setProductList([]);
    setCustomerPhone("+91");
    setCustommerName("");
    setProductName("");
    setProductQTY(0);
    setProductPrice(0);
    setShowGeneretedBills(false);
  }

  return (
    <>
      <h1>Billing counter</h1>
      <div className="customerDetails">
        <div className="custmerName">
          <label htmlFor="name">Customer Name: </label>
          <input type="text" name="name" value={customerName}  onChange={(e)=>setCustommerName(e.target.value)}/>
        </div>
        <div className="customerPhone">
          <label htmlFor="contact">Customer Phone: </label>
          <input type="phone" name="contact" value={customerPhone} onChange={(e)=>setCustomerPhone(e.target.value)}/>
        </div>
      </div>
      {productList.length>0&&<AllProducts productList={productList} handleGeneretBills={handleGeneretBills}/>}

      <ItemInput productName={productName} productQTY={productQTY} productPrice={productPrice} setProductName={setProductName} setProductQTY={setProductQTY} setProductPrice={setProductPrice} handleAddButton={handleAddButton}/>

      {showGeneretedBill&&<GeneratedBills productList={productList} resetBills={resetBills} customerName={customerName} customerPhone={customerPhone}/>}
    </>
  );
}

export default App
