import React, {Component} from 'react'

export default class Form extends Component{
    constructor(){
        super()
        this.state ={
          imageUrl:'',
          productName:'',
          price: ''
       
        }
      }
      handleimageUrl = (e) => {
        this.setState({imageUrl: e.target.value})
      }
    
      handleProductName = (e) => {
        this.setState({productName: e.target.value})
      }
    
      handlePrice = (e) => {
        this.setState({price: e.target.value})
      }
    
    
      addItem = () =>{
        const {imageUrl,productName,price} = this.state
        const newItem = {imageUrl,productName,price}
      }
    
      handleReset = () => {
        this.setState({
          imageUrl:'',
          productName:'',
          price:'',
          inventoryList:[]
        })
        }
      
    
      
      render() {
        return (
          <div className="App">
            

           <div>
             <p> Image URL:</p>
            <input type= 'text'value={this.state.imageUrl} onChange={this.handleimageUrl}></input>
            </div>
            <div>
              <p> Product Name:</p>
            <input type= 'text'value={this.state.productName} onChange={this.handleProductName}></input>
            </div>
            <div>
              <p> Price:</p>
            <input type = 'number' value={this.state.price} onChange={this.handlePrice}></input>
            </div>
            <button onClick={this.handleReset} type='button'>Cancel</button>
            <button>Add</button>
            
          </div>
      
          
        )
      }
    }
    