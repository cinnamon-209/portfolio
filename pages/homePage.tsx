import { Avatar, Center, Circle, Grid, GridItem, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Index.module.css'


export default function HomePageContent({homePageContent} : any) {

return (
  <div>
    <Center bg='#171717' h='50vh' w='100vh' color='dark'>
      <Grid
        h='50vh'
        w='100vh'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} >
              <Center pl='1vh' pt='15vh'>
                <Avatar size='2xl' name='Chuan Geng' src={homePageContent.image.url} />
              </Center>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3} >
          <Text fontSize='xl' pt='15vh' textAlign={[ 'center' ]} color='white'> 
            {
              homePageContent.shortBio
            }
            </Text>
        </GridItem>
      </Grid>
    </Center>

    <Center pt='1em' pb='1em' >
      <a 
      href={homePageContent.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="10x" className={styles.logo}/>
      </a>
      <a 
      href={homePageContent.github}
      target="_blank"
      rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className={styles.logo}/>
      </a>
    </Center>
  </div>
  )
}
