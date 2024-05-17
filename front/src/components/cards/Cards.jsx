import React from 'react'
import Card from '../card/Card'
import './Cards.scss'
const Cards = ({data ,cut}) => {
    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };
    const chunks = chunkArray(data, cut);

    return (
        <>
        
            {
                cut ? 
                <div className={'d-flex   '}  style={{width:`calc(100%*${chunks.length})` } }>
                {chunks.map((chunk, chunkIndex) => (
                    <div className="container">
                        <div key={chunkIndex} className='row'>
                            {chunk.map((item, index) => (
                                <Card key={index} item={item} />
                            ))}
                        </div>
                    </div>
                    ))}
                </div>
                
                :<div className='cards row'>
                    {data.map((item, index) => {
                        return <Card key={index} item={item}/> 
                    })} 
                </div>
            }
    </>
    )
}

export default Cards