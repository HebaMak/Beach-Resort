import { useContext } from 'react'
import { RoomContext } from '../context_data/Context'
import Loading from './Loading'
import Title from './Title'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

const RoomContainer = () => {
  const {loading , sortedRooms , rooms} = useContext(RoomContext)

  if(loading) {
    return <Loading />
  }
  return (
    <>
      <Title title='search rooms'/>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms} />
    </>
  )
}

export default RoomContainer
