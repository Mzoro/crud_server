import React from 'react';
import { Link } from 'react-router'
import request from 'superagent';

export default class IndexProd extends React.Component {
  constructor() {
    super();
    this.state = { prods: [] }
  }
  componentDidMount() {
    request
     .get('/prods.json')
     .end( (err, res) => {
       this.state.prods = res.body
       this.setState({ prods: this.state.prods});
   });
  }

  destroyProd(key, id) {
    delete this.state.prods[key];
    this.setState({ prods: this.state.prods })
    request
      .del(`/prods/${id}.json`)
      .end(function(err, res){
    })
  }

  renderProd(key) {
    const prod = this.state.prods[key]
    const id = prod.id
    const edit_path = `/crud/prods/${id}/edit`;
    const show_path = `/crud/prods/${id}`;
    return (
      <li key={id}>
        {prod.name+" "+prod.des+" "}
        <Link to={show_path}><button>Show</button></Link>
        <Link to={edit_path}><button>Update</button></Link>
        <button onClick={ () => this.destroyProd(key, id)}>Delete</button>
      </li>
    )
  }

  render(){
    return (
      <div>
        Our prods:
        <ul>
          {Object.keys(this.state.prods).map( (key) => this.renderProd(key) )}
        </ul>
        <Link to='/crud/prods/new'><button>Create</button></Link>
      </div>
    )
  }
}