import React, { useEffect, useState } from 'react'

import '../App.css';

const superagent = require('superagent')

const DadJokes = () => {

    const [jokes, setJokes] = useState([])

    const getJokes = async () => {

        const url = 'https://icanhazdadjoke.com/search?limit=20'
        const resp = await superagent.get(url).set('Accept', 'application/json')

        setJokes(resp.body.results)
    }

    useEffect(() => {
        getJokes()
    }, []) //only call getJokes() on the first reder because we don't want to get rate-limited
    
    return (
        <div className='App-body'>
            <table>
                <tbody>
                    {
                        jokes.map((joke, index) => {
                            return (
                                <tr key={joke.id}>
                                    <td>
                                    <p>{joke.joke}</p>
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>

    )

}

export default DadJokes