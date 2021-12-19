import { Avatar, Center, Circle, Grid, GridItem, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Index.module.css'

const HomePageContent: NextPage = () => {

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
                <Avatar size='2xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
              </Center>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4} >
          <Text fontSize='xl' pt='15vh' textAlign={[ 'center' ]} color='white'> 
                {
                  `Hi, my name is Chuan Geng ~ CG , a final year Singapore Management University (SMU) student.
                  Currently in Bachelor's degree in Information system graduating in 2022.
                  Love to build stuff and have fun while doing so ! 
                  `
                }
            </Text>
        </GridItem>
      </Grid>
    </Center>

    <Center pt='1em' pb='1em' >
      <a 
      href="https://www.linkedin.com/in/foo-chuan-geng/"
      target="_blank"
      rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles.logo}/>
      </a>
      <a 
      href="https://github.com/chuangeng555"
      target="_blank"
      rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className={styles.logo}/>
      </a>
    </Center>
  </div>
  )
}

export default HomePageContent
