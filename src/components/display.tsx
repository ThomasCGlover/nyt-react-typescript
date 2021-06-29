import React from 'react';
import NytFetch from './fetch';

interface Props {
    imageUrl: string,
    headline: string,


}
const DisplayResults: React.FunctionComponent<Props> = (props) => {
    return(
    <div>
        <br />
        <br />
        <h2>{props.headline}</h2>
        <img src={props.imageUrl} />
    </div>
    )
    }
export default DisplayResults;