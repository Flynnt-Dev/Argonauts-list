import React from 'react';
import axios from 'axios';

export default class ArgonautsForm extends React.Component{
    constructor(props){
        super(props);
        
        this.onChangeArgonautName = this.onChangeArgonautName.bind(this);
        this.onChangeArgonautTags = this.onChangeArgonautTags.bind(this);
        
        this.state = {
            name:'',
            tags:[''],
        }
    }

    onChangeArgonautName(e){
        this.setState({name: e.target.value});
    }

    onChangeArgonautTags(e){
        this.setState({tags: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const argonaut= {
            name: this.state.name,
            tags: this.state.tags
        }

        axios.post('http://localhost:5000/argonauts/add', argonaut)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error);
            });

        this.setState({
            name: '',
            tags: [''],
        })
        
    }

    render(){
            <section id='argonautImput'>
                <form>
                    <div className="form-group">
                        <label>Argonaut Name:</label>
                        <input 
                            type="text" required className="form-control"
                            value={this.state.name}   // A REMPLIR 
                            onchange={this.onChangeArgonautName} // A REMPLIR 
                        />
                        <label>Qualifications:</label>
                        <input 
                            type="text" required className="form-control"
                            value={this.state.tags}   // A REMPLIR 
                            onchange={this.onChangeArgonautTags} // A REMPLIR 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            className="btn btn-primary"
                            value="insert argonaut"  
                        />
                    </div>
                </form>
            </section>
    }
}