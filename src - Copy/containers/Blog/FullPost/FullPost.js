import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios'

class FullPost extends Component {
    state={
        loadedpost:null,
        
    }

    componentDidUpdate(){
        console.log(this.props)
        this.loadData();

    }
    loadData(){
        if(this.props.match.params.id){
           
            if(!this.state.loadedpost||(this.state.loadedpost&&this.state.loadedpost.id!=this.props.match.params.id))
            //id from params is string and id of loadedpost.id is num, so either we need to convert either of these 2(so !==(also checks for type equality) wont work). but != only checks for value but not type
        axios.get('/posts/'+this.props.match.params.id).then(response=> this.setState({
            loadedpost:response.data
        })
        ).catch(error=>{
           this.setState({
               error:true
           })
        })}
    }
    deleteDataHandler=()=>{
        axios.delete('/posts/'+this.props.match.params.id).then(response=>console.log(response))
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post=<p style={{textAlign:'center'}}>Loading...</p>
        }
       // if(!this.state.error)
        if(this.state.loadedpost)
             post = (
            <div className="FullPost">
                <h1>{this.state.loadedpost.title}</h1>
                <h1>{this.state.loadedpost.data}</h1>
                <p>{this.state.loadedpost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deleteDataHandler}>Delete</button>
                </div>
            </div>

        );

        
       
        return post;
    }
}

export default FullPost;