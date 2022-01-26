import { Image, Box, Button, Center, Container, Grid, GridItem, Text, Badge } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import {Article} from '../models/dtos'; 
import Project from './project'
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client";

export default function ProjectList(props : any) {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [projectModalData, setProjectModalData] = useState({});

  const openProject = (projectData: any) => {
    setProjectModalData(projectData); 
    setOpenProjectModal(true);
  }

  const handleCloseModal = () => {
    setOpenProjectModal(false)
  }

  return (
    <>
      {openProjectModal ? <Project projectData={projectModalData} openModal={openProjectModal} closeModal={handleCloseModal} /> : ""}
      <Container maxW='5xl' centerContent >
      {/* centerContent color='white.200'  borderColor='gray.200' border='1px' */}
        {
          props.content == 0 ? <Center>{"Projects not available"}</Center> : 
            <Grid
            pt='1em'
            pb='1em'
            templateColumns='repeat(2, 1fr)'
            gap={6}
            >
                {
                  props.content.map((m : any) => 
                  <GridItem bg='dark' key={m.id}>
                    {/* w={[300, 400, 500]} h={[300, 400, 500]} */}
                        <Box maxW='sm' borderWidth='2px'   borderRadius='lg' p='1em' boxShadow='lg' overflow='hidden' onClick={() => openProject(m)} _hover={{ bg: "teal.600" }} style={{cursor: 'pointer'}}>
                          {/* swap with the env url later on */}
                            <Image src={m.heroImage.url} alt={m.title} />
                            <Box
                            m='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated 
                            >
                            {m.title}
                            </Box>
                            {m.tags.map((t) => 
                                <Badge key={t} borderRadius='full' px='3' p='1' m='0.5' colorScheme='teal'>
                                  {t}
                                </Badge>
                            )}
                        </Box>
                        <Grid
                          pt='1em'
                          pb='1em'
                          templateColumns='repeat(2, 1fr)'
                          gap={6}>
                             {
                               m.links == null ? "" : 
                                Object.keys(m.links).map((k : string) => 
                                <Button key={k}>
                                  <Link href={m.links[k]}>
                                    {k}
                                  </Link>
                                </Button>  
                               )
                             }
                        </Grid>
                  </GridItem>
                  )
                }
            </Grid>
        }
      </Container>

    </>
    )
  }