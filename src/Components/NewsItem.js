import React, { Component } from 'react'

export default class NewsItem extends Component {
   
    render() {
        let {title,description,imageUrl,newsUrl}=this.props
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/20_06_2020_18_14_24_9764942.jpg?width=920&format=jpeg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a  rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
