
import React, { useState, useEffect } from 'react';
import './style.css';
import EastIcon from '@mui/icons-material/East';
import Card from '../shared/Card';
function Main() {
    const [carddata, setCardData] = useState([]);
    const [search, setSearch] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/cards');
                const data = await res.json();
                console.log("coming data", data);
                setCardData(data.data);
                setCards(data.data);
            }
            catch (error) {
                console.log("API Error is", error);
            }

        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        const newsearch = e.target.value;
        const filteredItems = carddata.filter((item) => {
            return item.title.toLowerCase().includes(newsearch.toLowerCase())
        })
        if (search !== "") {
            setCards(filteredItems);
        }
        else {
            setCards(carddata);
        }
        setSearch(newsearch);

    }


    return (
        <>
            <div className="main">
                <p className="howtitle">How can we help?</p>
                <div className="search-box">
                    <input type="text" placeholder="Search" value={search} onChange={handleChange} />
                    <button type="submit">
                        <span><EastIcon /></span> {/* Unicode for the right arrow symbol */}
                    </button>
                </div>

            </div>
            <Card cards={cards} />
        </>
    );
}

export default Main;
