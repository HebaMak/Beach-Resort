import React, { Component } from 'react'
import { RoomContext } from '../context_data/Context'
import Title from './Title'
import Room from './Room'
import Loading from './Loading'

class FeaturedRooms extends Component {

  static contextType = RoomContext 

  render() {
    let {featuredRooms: rooms , loading} = this.context

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />
    })

    return (
      <section className='featured-rooms'>
        <Title title='featured rooms' />
        <div className="featured-rooms-center">
          {loading ? <Loading text='rooms data loading...'/> : rooms}
        </div>
      </section>
    )
  }
}

export default FeaturedRooms