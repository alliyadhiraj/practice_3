import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
      static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
      }

      static defaultPropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      }

      capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
      }

  constructor(props) {
    super(props);
    // console.log("Hello i am constructor of newsitem");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  }

  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=31b5dd8d5a5740a6ad8e4a0957b4f950&page=1&pageSize=${this.props.pageSize}`
    
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    this.setState({ articles: parsedData.articles,
                    totalResults:parsedData.totalResults,
                     loading: false
                  })
                  this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("click previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=31b5dd8d5a5740a6ad8e4a0957b4f950&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    console.log('Click next');

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) 
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=31b5dd8d5a5740a6ad8e4a0957b4f950&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

  fetchMoreData = async() => {
      this.setState({page: this.state.page + 1});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=31b5dd8d5a5740a6ad8e4a0957b4f950&page=1&pageSize=${this.props.pageSize}`
    
    
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: this.state.articles.concat(parsedData.articles),
                    totalResults:parsedData.totalResults,
                     
                  })
  };  

  render() {
    return (
    
     <>
        <h1 className='text-center my-3'>NewsApp Top {this.capitalizeFirstLetter(this.props.category)} HeadLines </h1>
          {this.state.loading &&<Spinner/>}        

          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        
      <div className="container">
         
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key= 
             {element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}imageUrl={element.urlToImage}newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}

        </div>
        </div>
        </InfiniteScroll>
        
        </>
    )
  }
}

export default News
