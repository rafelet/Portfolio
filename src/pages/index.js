import * as React from "react"
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import Planets from "../components/Planets"
import ProyectMenu from "../components/ProyectMenu"
import { graphql } from "gatsby"
import "../styles/planets.scss"

export const query = graphql`
  query{
    allDataJson {
      edges {
        node {
          preview {
            img
            nombre
            description
            celestialObjectName
          }
          menu {
            au
            mini
            img
            nombre
            num
          }
          details {
            nombre
            type
            img
            video
            me
            oficio
          }
        }
      }
    }
  }
`
const IndexPage = ({data}) => {
  const planets = data.allDataJson.edges[0].node
  // console.log(planets);
  return (
    
    <Layout>
        <ProyectMenu planets={planets.menu}/>
        <Planets planets={planets.preview}/>
        <Modal planets={planets.details}/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Rafa Leal</title>
