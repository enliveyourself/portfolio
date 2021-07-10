import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <div className='h-screen w-screen p-4 md:p-10 bg-primary flex items-center justify-center'>
        <div className='h-full w-full p-2 md:p-4 bg-white bg-opacity-50 flex items-center justify-center shadow-primary rounded-2xl'>
          <div className='h-full w-full bg-white shadow-primary rounded-2xl p-2 md:p-4 flex flex-col justify-between'>
            <div className='flex flex-row justify-between'>
              <p>Logo</p>
              <p>hello.</p>
            </div>
            <div className='flex flex-row justify-end'>
              <Image
                src='/images/hero.png'
                alt='Hero'
                width='855'
                height='674'
              />
              <div className='flex flex-col justify-around w-6'>
                <p className='h-6'>A</p>
                <p className='h-6'>E</p>
                <p className='h-6'>I</p>
                <p className='h-6'>O</p>
                <p className='h-6'>U</p>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <p>blog.</p>
              <Link href='/creations'>
                <a>creations.</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
