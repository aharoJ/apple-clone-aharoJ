import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPage } from 'next'
import Header from '@/components/Header'


const Home: NextPage =() => 
{
  return (
    <>
    <div className='bg-red-300'>
      <Head>
        <title>Apple Redesign</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
    </div>
    </>
  )
}
export default Home;