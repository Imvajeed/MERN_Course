import './App.css';

function GeneratedBills({productList,resetBills,customerName,customerPhone}){
    return(
        <>
            <div className="generatedBillBox">
        <h1>Genereted Bills</h1>
        <div className='customerBox'>
          <p><b>Customer Name:</b>{customerName} <b>Contact: </b>{customerPhone}</p>
        </div>
        <div className="allProducts">
        <table>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Total</th>
          </tr>
          {
            productList.map((element,index)=>(
              <tr>
            <td>{index+1}</td>
            <td>{element.productName}</td>
            <td>{element.qty}</td>
            <td>{element.total}</td>
          </tr>
            ))
          }
        </table>
        <button onClick={resetBills}>Reset</button>
      </div>
      </div>
        </>
    );
}

export default GeneratedBills;