import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, image, url, publisher, date, author } = this.props;
        let publishedAt = new Date(date).toGMTString();
        return (
            <div className="card">
                <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">{publisher}<span className="visually-hidden">unread messages</span>
                </span>
                <img src={image} className="card-img-top" alt="news" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text text-body-secondary">By {!author? "anonymous" : author} on {publishedAt}</p>
                    <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More -&gt;</a>
                </div>
            </div>
        );
    }
}

export default NewsItem;
