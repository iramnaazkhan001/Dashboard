import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <div style={{ border:"2px",fontSize:'11px'}}>
    <Table striped bordered hover variant='light' style={{borderColor:'rgb(1,184,170)'}}>
      <thead>
        <tr>
         
          <th>Product ID</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Order Time</th>
          <th>Customer</th>
          <th>Satus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>id00001</td>
          <td>20</td>
          <td>$80.00</td>
          <td>27-08-2018 1:22:12</td>
          <td>Patric J. King</td>
          <td>InTransit</td>
        </tr>
        <tr>
          
          <td>id00002</td>
          <td>12</td>
          <td>$180.00</td>
          <td>25-08-2018 21:12:56</td>
          <td>Rachel j. Wicker</td>
          <td>Delivered</td>
        </tr>
        <tr>
         
          <td>id00003</td>
          <td>23</td>
          <td>$820.00</td>
          <td>24-08-2018 14:12:19</td>
          <td>Michael K. Ledford</td>
          <td>Delivered</td>
        </tr>
        <tr>
          
          <td>id00004</td>
          <td>34</td>
          <td>$340.00</td>
          <td>23-08-2018 09:12:35</td>
          <td>Michael K. Ledford</td>
          <td>Delivered</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default BasicExample;