import * as React from "react"
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import Planets from "../components/Planets"
import ProyectMenu from "../components/ProyectMenu"
import { graphql } from "gatsby"
import "../styles/planets.scss"
import FirefoxModal from "../components/Modal/firefox.modal"

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
function isFirefox() {
  let sUsrAg =  typeof window !== 'undefined' && navigator.userAgent.indexOf("Firefox") > -1;
  let isFirefox = false

  if (sUsrAg) {
      isFirefox = true;
  } 

  return isFirefox
}
const IndexPage = ({data}) => {
  const planets = data.allDataJson.edges[0].node
  const firefox = isFirefox()
  console.log(firefox);
  return (
    
    <Layout>
        <ProyectMenu planets={planets.menu} isFirefox={firefox}/>
        <Planets planets={planets.preview} isFirefox={firefox}/>
        {
          !firefox
            ? <Modal planets={planets.details}/> 
            : <FirefoxModal planets={planets.details}/> 
        }
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Rafa Leal</title>
