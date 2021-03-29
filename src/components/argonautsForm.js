import React from 'react';
import axios from 'axios';

export default class ArgonautsForm extends React.Component{
    constructor(props){
        super(props);
        
        this.onChangeArgonautName = this.onChangeArgonautName.bind(this);
        this.onChangeArgonautTags = this.onChangeArgonautTags.bind(this);
        
        this.state = {
            name:'',
            tags:[],
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
        console.log('OnSubmit fonction');
        
        const argonaut= {
            name: this.state.name,
            tags: this.state.tags
        }

        console.log(
            'Argonout is {name : '+this.state.name+" tags: "+this.state.tags+'}.'
        );

        axios.post('http://localhost:5000/argonauts/add', argonaut)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error);
            });

        this.setState({
            name: '',
            tags: [],
        })
        
    }

    render(){
        return(
                <form className="argonautsForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="from-element-wrapper">
                            <div className="imput">
                                <label>Argonaut Name:</label>
                                <input 
                                    type="text" required
                                    className="imput-text"
                                    value={this.state.name}   // A REMPLIR 
                                    onChange={this.onChangeArgonautName} // A REMPLIR 
                                />
                            </div>
                        </div>
                        <div className="form-element-wrapper">
                            <div className="imput">
                                <label>Qualifications:</label>
                                <input 
                                    type="text" required
                                    className="imput-text"
                                    value={this.state.tags}   // A REMPLIR 
                                    onChange={this.onChangeArgonautTags} // A REMPLIR 
                                />
                            </div>
                        </div>
                        <div className="form-element-wrapper">
                            <div className="submit-group">
                                    <input 
                                        type="submit"
                                        className="btn btn-primary"
                                        value="insert argonaut"  
                                    />
                                </div>
                        </div>
                    </div>
                </form>
        )
    }
}