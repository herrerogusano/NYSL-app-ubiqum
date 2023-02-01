import React from 'react'
import GameDetails from '../components/GameDetails'
import LocationDetails from '../components/LocationDetails'
import { useParams } from 'react-router-dom'
import { tableData } from '../data/tableData'

const GamesPage = () => {


  return (
    <div>
      <GameDetails />
      <LocationDetails />
    </div>
  )
}

export default GamesPage
