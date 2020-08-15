import React from "react";
import { Table } from 'react-bootstrap';
import PageTitle from "../components/PageTitle";
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get(`/api/products`)
      .then(response => {
        const products = response.data;
        this.setState({ products });
        console.log(products)
      })
  }

  render() {
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
            { this.state.products.map(product => {
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
}
  