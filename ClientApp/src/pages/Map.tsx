import React, { useState } from 'react'
import { MainHeader } from '../components/MainHeader'
import { Link } from 'react-router-dom'
import title from '../images/title.png'
import pin from '../images/map/visitedPark.png'
import fullScreen from '../images/map/full-screen2.svg'
import '../css/miniMap.scss'
// import { ParkType } from '../types'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import { ParkType } from '../types'
import { useQuery } from 'react-query'

export function MiniMap() {
  // const [value, setValue] = useState('')

  const [viewport, setViewport] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 2,
  })

  const { data: parks = [] } = useQuery<ParkType[]>(
    ['parks'],
    async function () {
      const response = await fetch('/api/parks')

      // Do not await here... We want to return the promise
      return response.json()
    }
  )

  const MAPBOX_TOKEN = import.meta.env.VITE_APP_MAPBOX_TOKEN as string

  return (
    <>
      <MainHeader />
      <div className="project-title-container">
        <div className="project-title">
          <img src={title} />
        </div>
      </div>

      <div className="map-container">
        <ReactMapGL
          {...viewport}
          style={{ position: 'absolute' }}
          width="100%"
          height="100%"
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={setViewport}
        >
          <div style={{ position: 'absolute', right: 35, top: 5 }}>
            <NavigationControl />
          </div>

          <div className="full-screen-container">
            <Link to="/">
              <img src={fullScreen} />
            </Link>
          </div>

          {parks.map((park) => (
            <Marker
              key={park.id}
              latitude={park.latitude}
              longitude={park.longitude}
            >
              <img className="pin" src={pin} />
            </Marker>
          ))}
        </ReactMapGL>
      </div>

    </>
  )
}
