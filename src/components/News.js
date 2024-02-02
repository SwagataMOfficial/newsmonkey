import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';
import { NewsData } from './DemoNews.js';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            totalResults: NewsData.totalResults,
            start: 0,
            end: 10,
            articles: []
        };
    }

    addNews = () => {
        let dataAmount = 10;
        this.setState({ articles: this.state.articles.concat(NewsData.articles.slice(this.state.start, this.state.end)), start: this.state.end, end: this.state.end + dataAmount });
    };

    componentDidMount() {
        this.addNews();
    }

    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.addNews();
        }, 1500);
    };

    render() {
        return (
            <>
                <h2 className='text-center text-warning mt-2'>Top Headlines - NewsMonkey</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length <= this.state.totalResults}
                    endMessage={
                        <h4 className='text-center mb-3'>Yay! You have seen it all</h4>
                    }
                    loader={<Spinner />}
                    scrollableTarget="scrollableDiv" >

                    <div className='container mb-4'>
                        <div className='row'>
                            {this.state.articles.map((e) => {
                                return <div className="col-md-4 mt-3 position-relative" key={e.url}>
                                    <NewsItem title={e.title} description={e.description} image={e.urlToImage} url={e.url} publisher={e.source.name} date={e.publishedAt} author={e.author} />
                                </div>;
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </>
        );
    }
}

export default News;
