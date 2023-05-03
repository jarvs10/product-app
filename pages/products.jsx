import Lacteos from '@/components/Lacteos';
import Layout from '@/components/Layout'
import axios from 'axios'
import { useState } from 'react'

const Products = ({lacteos}) => {

  const [actual, setActual] = useState()

  return (
    <Layout>
      <div className='grid-personal mt-10 mb-10'>
        <h1 className='text-3xl font-bold border-gray-300 border-r-2'>Lacteos</h1>

        <div className='px-10 grid grid-cols-2 gap-4'>
          {
            lacteos.map(item => {
              return (
                <Lacteos 
                  key={item.id}
                  item={item}
                />
              )
            })
          }
          
        </div>
      </div>
      
    </Layout>
  )
}

export default Products

export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/lacteos');
  // const productos = data.docs.map(item => ({
  //   ...item,
  //   img: `http://localhost:3000/api/media`
  // }))

  return {
    props: {
      lacteos: data.docs
    }
  }
}