import Card from 'react-bootstrap/Card';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Home() {
  return (
    <>
    <div style={{display:'flex'}}>
        <div>
    <Card style={{ width: '15rem', backgroundColor:'rgb(78,119,245,00.5)' }}>
      <Card.Body>
        <Card.Title>$2156        <AccessTimeIcon/> </Card.Title>
        <Card.Text>
         Total Tax 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    <div>
    <Card style={{ width: '15rem' , marginLeft:'60px',backgroundColor:'rgb(241,62,68,00.5)'}}>
      <Card.Body>
        <Card.Title>$1567 <FilterNoneIcon/></Card.Title>
        <Card.Text>
         Total Earning
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div>
    <Card style={{ width: '15rem', marginLeft:'60px', backgroundColor:'rgb(201,57,144,00.5)' }}>
      <Card.Body>
        <Card.Title>$4566 <FilterAltIcon/></Card.Title>
        <Card.Text>
          Total Sales
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
    
  );
}

export default Home;