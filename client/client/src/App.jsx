import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <h1 align="center">My Trains</h1>
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Train No</th>
          <th>Train Name</th>
          <th>Price</th>
          <th>Seats Available</th>
          <th>Depature time</th>
          <th>Delay time</th>          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default App
