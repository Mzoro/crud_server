import React from 'react';
import { Link } from 'react-router'
import request from 'superagent';

export default class ShowProd extends React.Component {
  constructor() {
    super();
    this.state = { prod: [] }
  }

  componentDidMount() {
    request
     .get(`/prods/${this.props.params.id}.json`)
     .end( (err, res) => {
       this.state.prod = res.body
       this.setState({ prod: this.state.prod});
    });
  }

  render(){
    const path = `/crud/prods/${this.state.prod.id}/edit`
    return (
      <div>
        Prod:
        <ul>
          <li>{this.state.prod.name}</li>
          <li>{this.state.prod.des}</li>
        </ul>
        <Link to={path}><button>Edit</button></Link>
        <Link to='/crud/prods'><button>Back</button></Link>
      </div>
    )
  }
}