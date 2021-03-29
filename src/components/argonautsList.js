import React from 'react';
import axios from 'axios';

const Argonaut = props => (
    <tr>
        <td>{props.argonaut.name}</td>
        <td className='tags'>{props.argonaut.tags}</td>
        <td>
            <button onClick={() => (props.deleteArgonaut(props.argonaut.id))}> Delete </button>
        </td>
    </tr>
)

export default class ArgonautsList extends React.Component{
    constructor(props){
        super(props);

        this.state = { argonauts: []};
        this.deleteArgonaut =this.deleteArgonaut.bind(this);
    }

    componentDidMount(){
        axios.get('http:localhost:5000/argonauts/')
        .then(response =>{
            this.setState({argonauts: response.data});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    argonautsList(){
        return this.state.argonauts.map(currentargonaut => {
            return <Argonaut 
                        argonaut={currentargonaut}
                        deleteArgonaut={this.deleteArgonaut}
                        key={currentargonaut._id}
                    />
        });
    }

    deleteArgonaut(id){
        axios.delete('http:localhost:5000/argonauts/'+id)
            .then( res => console.log(res.data));
            
        this.setState({
            argonauts: this.state.argonauts.filter(el => el.id !== id)
        })
    }

    render(){
        return(
            <div className="argonautsList">
                <h3> Membre de l'équipage :</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th className="tags">Qalifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.argonautsList()}
                    </tbody>
                </table>
            </div>
        )
        
    }
}