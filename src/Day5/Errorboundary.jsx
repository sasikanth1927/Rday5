import { Component } from 'react'

export class Errorboundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null
      }
    }
    componentDidCatch(error,errorInfo){
        return ({error,errorInfo})
    }
    static getDerivedStateFromError(error){
        return {error}
    }
  render() {
      if(this.state.error){
        console.log('Error!!! You must enter a string...')
            return(
              <div><h2 style={{color:'red'}}>Error!!!</h2></div>
            )
    }
    return this.props.children
  }
}

export default Errorboundary;