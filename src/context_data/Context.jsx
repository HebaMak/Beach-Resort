import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
  state= {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }

  formatData = (items) => {
    let tempItems = items.map(item => {
      let id= item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)
      let room = {...item.fields , id , images}
      return room
    })
    return tempItems 
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find(room => room.slug === slug)
    return room
  }

  handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    } , this.filterRooms)
  }

  filterRooms = () => {
    let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state
    capacity = parseInt(capacity)
    price = parseInt(price)
    let tempRooms = [...rooms]
    
    if(type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }

    if(capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }

    tempRooms = tempRooms.filter(room => room.price <= price)

    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize) 

    if(breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    
    if(pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
    }
    
    this.setState({
      sortedRooms: tempRooms
    })
  }

  componentDidMount() {
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room => room.featured === true )
    let maxPrice = Math.max(...rooms.map(room => room.price))
    let maxSize = Math.max(...rooms.map(room => room.size))
    
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    })
  }

  render() {
    const value = {
      ...this.state,
      getRoom: this.getRoom,
      handleChange: this.handleChange,
      filterRooms: this.filterRooms
    }

    return (
      <RoomContext.Provider value={value}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer

export { RoomContext , RoomProvider , RoomConsumer }
