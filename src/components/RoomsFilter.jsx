import { useContext } from "react"
import { RoomContext } from "../context_data/Context"


const getUnique = (items , value) => {
  return [...new Set(items.map(item=> item[value]))]
}

const RoomsFilter = ({rooms}) => {
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = useContext(RoomContext)
  let types = getUnique(rooms , 'type')
  types = ['all' , ...types]

  let capacities = getUnique(rooms , 'capacity')

  return (
    <section className="filter-container">
      <form className="filter-form">
        
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type" 
            id="type"
            value={type}
            onChange={handleChange} 
            className='form-control'
          >
            {
              types.map((type,index)=> {
                return <option key={index} value={type}>{type}</option>
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select 
            name="capacity" 
            id="capacity"
            value={capacity}
            onChange={handleChange} 
            className='form-control'
          >
            {
              capacities.map((capacity,index)=> {
                return <option key={index} value={capacity}>{capacity}</option>
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price {'$'+ price}</label>
          <input
            type='range'
            name='price'
            id='price'
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input 
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className='size-input'
            />
            <input 
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input 
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input 
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>

      </form>
    </section>
  )
}

export default RoomsFilter