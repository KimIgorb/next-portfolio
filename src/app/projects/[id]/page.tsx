
export default async function Project ({params}:{params: {id: number}}) {

  const {id} = await params
  
  console.log(id)

  return (
    <main>
      <section>
        <div className="container">
          {id}
        </div>
      </section>
    </main>
  )
}