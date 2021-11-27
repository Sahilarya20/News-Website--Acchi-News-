import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
   
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
   async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ab9ff70437794a05b3628bde9f18782b&page=1&pageSize=12 ";
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
    handlePrevClick=async()=>{
        console.log("prev");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ab9ff70437794a05b3628bde9f18782b&page=${this.state.page-1}&pageSize=12`;
        let data=await fetch(url);
        let parsedData=await data.json();
    this.setState({
        page :this.state.page-1,
        articles:parsedData.articles
    })
    }
    handleNextClick=async()=>{

        console.log("next");
        if(this.state.page+1>Math.ceil(this.state.totalResults/12)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ab9ff70437794a05b3628bde9f18782b&page=${this.state.page+1}&pageSize=12`;
            let data=await fetch(url);
            let parsedData=await data.json();
        this.setState({
            page :this.state.page+1,
            articles:parsedData.articles
        })
    }
    }
    render() {
        return (
            <div className="container my-3 ">
                <h1>Acchi News-Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                     <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl= {element.urlToImage}newsUrl={element.url}/>
                     </div>
                })}
               
                </div>
                
                <div className="cantainer d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick} >&larr;Previous</button>
                <button type="button" className="btn btn-primary"onClick={this.handleNextClick} >Next&rarr;</button>
                
                </div>
                </div>
                
            
        )
    }
}
