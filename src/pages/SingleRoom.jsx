import { useContext} from 'react'
import { Link , useParams} from 'react-router-dom'
import {RoomContext} from '../context_data/Context'
import Banner from '../components/Banner'
import defaultBcg from '../images/room-1.jpeg'
import StyledHero from '../components/StyledHero'

const SingleRoom = () => {
  const {getRoom} = useContext(RoomContext)
  const params = useParams()
  const room = getRoom(params.slug)

  
  if(!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to='/rooms' className='btn-primary'>back to room</Link>
      </div>
    )
  }

  const {name, description, capacity , size, price, extras, breakfast, pets, images } = room
  const [mainImg , ...restImages] = images
  
  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className="single-room-images">
          {
            restImages.map((image , index)=> {
              return <img src={image} alt={name} key={index} />
            })
          }
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: {'$'+ price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>{capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free brekfast included'}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {
            extras.map((extra , index)=> {
              return <li key={index}>- {extra}</li>
            })
          }
        </ul>
      </section>
    </>
  )
}

export default SingleRoom






