import React, { Component } from 'react';
import axios from 'axios';

//import Post from '../../components/Post/Post';
//import FullPost from './FullPost/FullPost';
//import NewPost from './NewPost/NewPost';

import './Blog.css';
import Posts from './Posts/Posts'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent';


const AsyncComponent= asyncComponent(()=>{ //means './NewPost/NewPost' is used only when AsyncComponent is used somewhere 
    return import ('./NewPost/NewPost')
})



class Blog extends Component {
    
    
    render () {

        
        return (
            <div className="Blog">
            <header >
                <nav>
                    <ul>
                    <li><NavLink to="/posts/" exact activeClassName='Gow active' 
                    activeStyle={{textDecoration:'underline', color:'blue'}}exact>Posts</NavLink></li>
                    <li><NavLink to={{
                            pathname:'/new-post',
                            hash:'#submit',
                            search:'?quick-submit=true'

                        }} >New Post</NavLink></li>
                        
                       
                        
                    </ul>
                </nav>
            </header>
           
            <Switch>
            <Route path="/posts/" component={Posts}/>
            
            {/* //kept this route from ouside switch to here, as these 2 paths are diff always */}
            <Route path="/new-post"  component={AsyncComponent}/>
            <Route render={()=><h1>not found</h1>}/>
            {/* <Redirect from="/" to="/posts"/> */}
           
               {/* <Route path="/" exact render={()=><Posts/>}/> */}
              
               </Switch> 
               
            </div>
        );  
    }
}

export default Blog;