import Room from './Room'

const RoomsList = ({rooms}) => {
  if(rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search paramters</h3>
      </div>
    )
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map(room => {
            return <Room room={room} key={room.id}/>
          })
        }
      </div>
    </section>
  )
}

export default RoomsList