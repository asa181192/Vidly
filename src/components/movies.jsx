import React , {Component} from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from './like'

 class Movies extends Component{
     constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleLike = this.handleLike.bind(this)
     }
    state = {
        movies : getMovies(),
        count : 1            
    } 
    handleDelete (id) {
        const movies = this.state.movies.filter(function(x){
            return x._id !== id 
        });
        this.setState({movies : movies});
    }

    handleLike(mov){
       let arr = [...this.state.movies]
       let index = arr.indexOf(mov)
       arr[index].liked ?  arr[index].liked = false :  arr[index].liked = true
       this.setState({movies:arr})

    }

    render(){
        if (this.state.movies.length === 0 ){
            return <h3>There is no movies on database</h3>
        }
        else{
            return <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Grade</th>
                    <th>Like</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(mov => 
                    <tr key={mov._id}>            
                        <th>{mov.title}</th>
                        <th>{mov.genre.name}</th>
                        <th>{mov.numberInStock}</th>
                        <th>{mov.dailyRentalRate}</th>
                        <th>
                            <Like liked={mov.liked} click={this.handleLike.bind(this,mov)} ></Like>                        
                        </th>
                        <th>
                            <button className="btn btn-sm btn-danger" onClick={this.handleDelete.bind(this,mov._id)} >Delete</button>
                        </th>
                     </tr>
                    )}                
            </tbody>
        </table>
        }
        
    }
}

export default Movies