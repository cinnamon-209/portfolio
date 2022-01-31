import { Avatar, Center, Circle, Grid, GridItem, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Index.module.css'

import { createBreakpoints } from '@chakra-ui/theme-tools'
import {useState} from "react";

import {HomePage} from "../models/dtos";

const heightBreakpoints = createBreakpoints({
    sm: '30em',
    md: '20em',
    lg: '20em',
    xl: '20em',
    // '2xl': '60em',
})

const widthBreakPoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '50em',
    // '2xl': '40em',
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
    <Center bg='#171717' h={heightBreakpoints} w={widthBreakPoints} color='dark'>
      <Grid
        h={heightBreakpoints}
        w={widthBreakPoints}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={10}
      >
        <GridItem rowSpan={2} colSpan={1} pl='13vh'>
              <Center pl='1vh' pt='15vh'>
                <Avatar size='2xl' name={homePageData.name} src={homePageData.image.url} />
              </Center>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3} >
                <Text fontSize='xl' textAlign={[ 'center' ]} color='white' pt='15vh' >
                    {
                        homePageData.shortBio
                    }
              </Text>
        </GridItem>
      </Grid>
    </Center>

    <Center pt='1em' pb='1em' >
      <a 
      href={homePageData.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="10x" className={styles.logo}/>
      </a>
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
