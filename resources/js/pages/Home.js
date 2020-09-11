import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import PageTitle from "../components/PageTitle";
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/api/products`)
      .then(response => {
        setProducts(response.data);
      })
    return () => setProducts(null); // Abort both fetches on unmount
  }, []);

  return (
    <>
      <PageTitle title="HOME" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          { products.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}
  