import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

export default class EditProd extends React.Component {
  constructor() {
    super();
    this.state = { prod: {id: '', name: '', des: ''}, errors: { errs: ''} }
  }

  componentDidMount() {
    request
     .get(`/prods/${this.props.params.id}.json`)
     .end( (err, res) => {
       this.state.prod = res.body
       this.setState({ prod: this.state.prod});
   });
  }

  changeName(event) {
    this.state.prod.name = event.target.value
    this.setState({ prod : this.state.prod })
  }

  changeDes(event) {
    this.state.prod.des = event.target.value
    this.setState({ prod : this.state.prod })
  }

  updateProd() {
    request
      .put(`/prods/${this.props.params.id}.json`)
      .send( {prod: this.state.prod })
      .end( (err, res) => {
        if (err) {
          this.state.errors = err.response.body
          this.setState({ errors: this.state.errors});
        }
      });
  }

  renderError(key) {
    const error = this.state.errors[key];
    if (error) {
      return (
        <li key={key}>
          {key+": "+error[0]}
        </li>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Editing prod</h1>
        <ul>
         {Object.keys(this.state.errors).map( (key) => this.renderError(key) )}
       </ul>
        <div className="field">
          <label>name</label>
          <input type="text" value={this.state.prod.name} onChange={ (e) => this.changeName(e) }/>
        </div>
        <div className="field">
          <label>des</label>
          <textarea value={this.state.prod.des} onChange={ (e) => this.changeDes(e) }/>
        </div>
        <div className="actions">
          <button onClick={() => this.updateProd()}>Update prod</button>
        </div>
        <Link to={ "/crud/prods" }>Back</Link>
      </div>
    );
  }
}