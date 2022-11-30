import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Comp from '../components/comp'
import Footers from '../components/Footers'
import Header from '../components/Header'
import RoadMap from '../components/RoadMap'
import Solutions from '../components/Solutions'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <Card/>
      <RoadMap/>
      <Solutions/>
      <Footers/>
    </div>
  )
}
