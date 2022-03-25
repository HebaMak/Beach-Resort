import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail , FaHiking , FaShuttleVan , FaBeer} from 'react-icons/fa'

class Services extends Component {

  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque accusamus totam voluptatibus.'
      },
      {
        icon: <FaHiking/>,
        title: 'Free Hiking',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque accusamus totam voluptatibus.'
      },
      {
        icon: <FaShuttleVan/>,
        title: 'Free Shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque accusamus totam voluptatibus.'
      },
      {
        icon: <FaBeer />,
        title: 'Free Beer',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque accusamus totam voluptatibus.'
      }
    ]
  }
  render() {
    const services = this.state.services
    return (
      <section className='services'>
        <Title title='services'/>
        <div className="services-center">
          {
            services.map((item,index)=>{
              return(
                <article key={index} className='service'>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Services