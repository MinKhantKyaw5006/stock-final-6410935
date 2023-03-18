import Head from 'next/head';
import SupplierTable from '../components/SupplierTable';

export default function SupplierManagement() {
  return (
    <>
      <Head>
        <title>Supplier Management</title>
        <meta name="description" content="Supplier Management Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SupplierTable />
      </main>
    </>
  );
}
