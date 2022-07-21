import { Avatar, Center, Circle, Grid, GridItem, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Index.module.css'

import { createBreakpoints } from '@chakra-ui/theme-tools'
import {useState} from "react";

import {HomePage} from "../models/dtos";

const heightBreakpoints = createBreakpoints({
    xs: '14em',
    sm: '20em',
    md: '15em',
    lg: '12em',
    xl: '15em',
    '2xl': '14em'
})

const widthBreakPoints = createBreakpoints({
    xs: '14em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '50em',
    '2xl': '60em'
})

export default function HomePageContent({data} : any) {
    const [homePageData, setHomePageData] = useState<HomePage | null >(null)

    useState(()=>{
        setHomePageData(data)
    })

return (
    <>
        {
            homePageData != undefined || homePageData != null ?
  <div>
      <Grid

        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
        // gap={4}
      >
        {/* bg='tomato' */}
        <GridItem rowSpan={1} colSpan={5} 
        >
          <Center >
            <Text fontSize='xl' textAlign={[ 'center' ]} color='white' >
                      {
                          homePageData.shortBio
                      }
            </Text>
            {/* <Avatar size='2xl' name={homePageData.name} src={homePageData.image.url}/> */}
          </Center>
        </GridItem>
      </Grid>

    <Center pt='1em' pb='1em' >
      <a 
      href={homePageData.github}
      target="_blank"
      rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className={styles.logo}/>
      </a>
    </Center>
  </div>
        : "" }
</>
  )
}
