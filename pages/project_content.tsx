import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Center, Circle, Container, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const ProjectPageContent: NextPage = () => {

  return (
    <>
    <Container maxW='3xl' centerContent color='white.200'  borderColor='gray.200' border='1px'>
      <Grid
      pt='1em'
      pb='1em'
      templateColumns='repeat(2, 1fr)'
      gap={6}
      >
      {
        [1, 2, 3 ,4, 5].map((value: number, i: number) => 
            // eslint-disable-next-line react/jsx-key
        <GridItem bg='dark'>
              <Box boxSize={'xs'} padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' /> 
              </Box>
        </GridItem>
        )
      }
      </Grid>
    </Container>
    </>
    )
  }

export default ProjectPageContent
