import SearchFrom from "@/components/SearchFrom";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams
}:{
  searchParams: Promise<{query?:string}>
}) {

  const query = (await searchParams)?.query;

  const posts = [{
    _createAt: new Date(),
    views:55,
    author:{_id:1, name: "Adrian"},
    _id:1,
    description:'This is a description.',
    image:'https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0',
    categry:"Robots",
    title:"We Robots",
  }]

  return(
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your StartUp, <br /> Connect With Entrepreneurs</h1>
        
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitons
        </p>

        <SearchFrom query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"`:'All Startups'}
        </p>
      </section>

      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType) => 
            <StartupCard key={post?._id} post={post} />
          )):(
            <p className="no-result"></p>
          )
        }
      </ul>
      
    </>
  )
}
