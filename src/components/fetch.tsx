import React, {Component} from 'react';
import DisplayResults from './display';

type AcceptedProps = {
    // response: {
        // docs: [
            // multimedia: {
                url: string,
            // },
            // headline: {
                main: string,
            // },
            keywords: string[],
        // ]
    // },
    searchTerm: string,
    startDate?: string,
    endDate?: string,
    pageNumber: number,
    

}


export default class NytFetch extends Component<{}, AcceptedProps> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state={
                // response: {
                //     docs: [
                        // multimedia: {
                            url: '',
                        // },
                        // headline: {
                            main: '',
                        // },
                        keywords: [],
                    //]
                //},
            searchTerm: '',
            startDate: '',
            endDate: '',
            pageNumber: 1,
            
        }
        
    
    }

    fetchResults = (e: any) => {
        e.preventDefault();
        const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        const key = 'sOY5tyl2xd17ihXn16giBXmdALwdTlih';
        const fetchUrl = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.searchTerm}`;
        fetch(fetchUrl)
            .then((result) => {
                return result.json();
            })
            .then(json =>  {

                // for(let i: number =0; i < json.response.docs.length; i++){
                // this.setState({
                //     url: json.response.docs[i].web_url
                // })}
                // had a lot of trouble trying to map through with setState and trouble trying to access the json object outside of the fetch to do so there
                this.setState({
                    url: json.response.docs[0].multimedia[0].url,
                    main: json.response.docs[0].headline.main,
                    keywords: json.response.docs[0].keywords[0],

                })
                console.log(json)
                console.log(this.state.main)
            }
            )}

    handleSearchInput(e: any) {
        this.setState({
            searchTerm: e.target.value
        })
        console.log(this.state.searchTerm)
    }

//    changePageNumber = (event: any, direction: string) => {
//         event.preventDefault()
//         if (direction === 'down') {
//           if (this.state.pageNumber > 0) {
//             setState({this.state.pageNumber: - 1})
//             {this.fetchResults};
//           }
//         }
//         if (direction === 'up') {
//           setPageNumber(pageNumber + 1);
//           fetchResults();
//         }
//       }

    render(){
        return(
            <>
            <div>
                <h1>NYT Top Story</h1>
                <input placeholder="search here" type="text" onChange={this.handleSearchInput.bind(this)} />
                <button onClick={this.fetchResults.bind(this)}>Submit</button>
                <DisplayResults imageUrl={this.state.url} headline={this.state.main}/>
            </div>

            </>
        )
    }
}