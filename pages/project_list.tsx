import { Image, Box, Button, Center, Container, Grid, GridItem, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react';
import {Article} from '../models/dtos'; 
import Project from './project'

export default function ProjectList(props : any) {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [projectModalData, setProjectModalData] = useState({});

  const openProject = (projectData: Article) => {
    setProjectModalData(projectData); 
    setOpenProjectModal(true);
  }

  const handleCloseModal = (close: boolean) => {
    setOpenProjectModal(close);
  }

  return (
    <>
      {openProjectModal ? <Project projectData={projectModalData} openModal={openProjectModal} closeModal={handleCloseModal} /> : ""}
      <Container maxW='3xl' centerContent color='white.200'  borderColor='gray.200' border='1px'>
        {
          props.content == 0 ? <Center>{"Projects not available"}</Center> : 
            <Grid
            pt='1em'
            pb='1em'
            templateColumns='repeat(2, 1fr)'
            gap={6}
            >
                {
                  props.content.map((m : Article) => 
                  <GridItem bg='dark' key={m.id}>
                        <Box padding='4' boxShadow='lg' bg='white' overflow='hidden' onClick={() => openProject(m)}>
                          {/* <Image src={"http://localhost:1337" + m.image.url} alt={m.title} /> */}
                          <Text mt='4' noOfLines={5} spacing='4' color={"black"}>{m.title}</Text>
                          <Text mt='4' noOfLines={10} spacing='4' color={"black"}>{m.techStack}</Text>
                        </Box>
                  </GridItem>
                  )
                }
            </Grid>
        }
      </Container>
    </>
    )
  }