import loadingGif from '../images/gif/loading-arrow.gif'

const Loading = ({text}) => {
  return (
    <div className='loading'>
      <h4>{text}</h4>
      <img src={loadingGif} alt="loading" />
    </div>
  )
}

export default Loading