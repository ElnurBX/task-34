import React, { useContext, useState, useEffect } from 'react';
import MultiCardCarusel from '../../../components/multicardcarusel/MultiCardCarusel';
import MainContext from '../../../context/context';

const Shop = () => {
    const { data, setdata } = useContext(MainContext);
    const [sortedData, setSortedData] = useState(data);
    useEffect(() => {
        setSortedData(data);
    }, [data]);
    const handleSort = (sortOrder) => {
        let sortedArray = [...data];
        switch (sortOrder) {
            case "low-height":
                sortedArray.sort((a, b) => a.price - b.price);
                break;
            case "height-low":
                sortedArray.sort((a, b) => b.price - a.price);
                break;
            default:
                sortedArray = data;
                break;
        }
        setSortedData(sortedArray);
    };
    const handleSearch = (searchQuery) => {
        setSortedData(data.filter((item) => 
            item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    };

    return (
        <main>
            <div className='container'>
                <select onChange={(e) => handleSort(e.target.value)}>
                    <option value="default">DEFAULT</option>
                    <option value="height-low">Price: High to Low</option>
                    <option value="low-height">Price: Low to High</option>
                </select>
                <div className='search-bar'>
                    <input 
                        type="text" 
                        placeholder="Search by name" 
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>
            <MultiCardCarusel data={sortedData} />
        </main>
    );
};

export default Shop;
