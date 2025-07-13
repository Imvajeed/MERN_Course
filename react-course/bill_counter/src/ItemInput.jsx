import './App.css'

function ItemInput({productName,productPrice,productQTY,setProductName,setProductQTY,setProductPrice,handleAddButton}){
    return(
        <>
        <div className="itemInput">
        <div className="productNameBox">
          <label htmlFor="productname">Product Name: </label>
          <input type="text" name='productname' value={productName} onChange={(e)=>setProductName(e.target.value)}/>
        </div>
        <div className="productQTYBox">
          <label htmlFor="productQTY">QTY: </label>
          <input type="number" name='productQTY' value={productQTY} onChange={(e)=>setProductQTY(e.target.value)} />
        </div>
        <div className="productQTYBox">
          <label htmlFor="productPrice">Price: </label>
          <input type="number" name='productPrice' value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
        </div>
        <div className="totalAmount">
          <p><b>Total: </b> Rs.{productPrice*productQTY}</p>
        </div>
        <div className="addItemBox">
          <button onClick={handleAddButton} >Add Item</button>
        </div>
      </div>
        </>
    )
}

export default ItemInput;