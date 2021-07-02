import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Shield } from 'shield-js-fp'

export default function Home() {
  useEffect(() => {
    const shield = new Shield();

    shield.init('6fd648795efdc712a7254be6225f504e086c1145');
  }, []);
  
  return (
    <div className={styles.container}>
      <p>Hello world!</p>
    </div>
  )
}
