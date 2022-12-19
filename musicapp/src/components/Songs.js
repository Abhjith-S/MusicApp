import React from 'react'

function Songs(imgsrc, song, artist) {
  return (
    <div className='SongContianer'>
        <img className="SongImage" src={imgsrc} alt='thumbnail'></img>
        <div className='SongText'>{song}</div>
        <div className='SongText'>{artist}</div>
    </div>
  )
}

export default Songs



