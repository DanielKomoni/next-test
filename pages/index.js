import Head from 'next/head'

export default function Home({articles}) {
  return (
    <div >
       <Head>
                <title>Main Page</title>
                <meta name="keywords" content="web development
                , programming"/>
            </Head>

      
    </div>
  )
}

export const getStaticProps=async()=>{
  const res= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const article= await res.json()

  return{
    props: {
      articles
    }
  }


}
