import React, { useState , useEffect} from "react";
import axios from "axios";
import dummyOb from "./SongConstants";

function Discover(){
    const [srch, setSrch] = useState("");
    const [inputs, setparam] = useState("")
    const [audio, setaudio] = useState(dummyOb)
    
    const getSrch = () =>{
        setparam(srch)
        console.log('parameter' , inputs)
        setSrch("")
        // setparam("")
        // fetchData()
    }

    useEffect(() => {
        async function fetchData() {
            // console.log("useEffect",param)
            const options = {
                method: 'GET',
                url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
                params: {q: inputs},
                headers: {
                  'X-RapidAPI-Key': 'd46c05d02cmsh9c6cf4ce6e91283p1155d4jsnb4f8ae7a3b50',
                  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
              };
            const request = await axios.request(options).then(function(response) {
                console.log(response.data.data);
                setaudio(response.data.data)
            }).catch(function (error) {
                console.error(error);
            });
            return request
        }
        fetchData()
    }, [inputs]);
    
    if(audio){
    return(
        <div>
        <div className="DiscoverContainer"> 
            <h4 className="DiscoverTitle">LSTN.</h4>
            <input className="DiscoverSrch" value={srch} placeholder="Search to Lstn" onChange={(event) => setSrch(event.target.value)}></input>
            <button className="DiscoverButton" onClick={getSrch}>GO</button>
            
            <div className="AllSongs">
            {
                audio.map(aud=>(
                    <div className='SongContianer' key = {aud.id}>
                    <img className="SongImage" src={aud.album.cover} alt='thumbnail'></img>
                    <div className='SongText'>{aud.album.title}</div>
                    <div className='SongText'>{aud.artist.name}</div>
                </div>
                ))
            }
            </div>
           </div>     
        </div>
        
    )}
    else{
        return(
            <div>
            <div className="DiscoverContainer"> 
                <h4 className="DiscoverTitle">LSTN.</h4>
                <input className="DiscoverSrch" value={srch} placeholder="Search to Lstn" onChange={(event) => setSrch(event.target.value)}></input>
                <button className="DiscoverButton" onClick={getSrch}>GO</button>
            </div>
            {/* <div>Find Your Song!!</div> */}
        </div>
        )
    }
}

export default Discover;