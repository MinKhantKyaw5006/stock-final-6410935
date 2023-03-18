import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SupplierTable from './components/SupplierTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Supplier Page</title>
        
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1>Supplier Website</h1>
      <SupplierTable />
      </main>
    </>
  )
}




// import Head from 'next/head';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
// import SupplierTable from './components/SupplierTable';
// import SupplierManagement from './components/SupplierManagement';
// import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Hello world</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         {/* <Link href="/supplier-management">
//           <a>Go to Supplier Management</a>
//         </Link> */}
//         <SupplierTable />
        
//       </main>
//     </>
//   );
// }
