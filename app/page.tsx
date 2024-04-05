'use client';

// import _ from "lodash";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

// const HeavyComponent = dynamic(
//   () => import('./components/HeavyComponent'),
//   {
//     ssr: false,
//     loading: () => <div>Loading...</div>
//   });

export default function Home() {
  // const session = await getServerSession(authOption)

  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">Hello
        {/* {session && <span>{session.user!.name}</span>} */}
      </h1>
      <Link href="/users">users</Link>
      <ProductCard />
      {/* <Image src="https://bit.ly/react-cover"
        alt="something"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <button onClick={() => {
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'}
        ];

        // const sorted = _.orderBy(users, ['name']);
        // console.log(sorted);
        
        
      }}>Show</button>
    </main>
  )
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch(''); 

//   return {
//     title: 'product.title',
//     description: '...',
//   }
// }
