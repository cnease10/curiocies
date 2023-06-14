import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function About() {
    return (
    <>
    <Head>
        <title>About Curiocies</title>
      </Head>
        <h1>About Curiocies</h1>
        <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/CuriociesCrow.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Crow"
      />
    </>
    

    )
}