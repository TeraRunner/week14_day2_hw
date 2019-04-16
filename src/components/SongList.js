import React, {Component} from 'react';
import SongDetail from './SongDetail';

export default class SongList extends Component {
  render() {
    const songNodes = this.props.songs.map(song => {
      return (
        <SongDetail
          title={song.title}
          artist={song['artist']}
          key={song.id}
          >
        </SongDetail>
      )
    })
    return(
      <div className="song-list">
        {songNodes}
      </div>
    )
  }
}
