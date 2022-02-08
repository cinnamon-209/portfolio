import { Image, Box, Button, Center, Container, Grid, GridItem, Badge } from '@chakra-ui/react'
import Link from 'next/link';
import { useState } from 'react';
import Project from './project'
import {BlogPost} from "../models/dtos";

export default function ProjectList(props : any) {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [projectModalData, setProjectModalData] = useState<BlogPost | null | undefined>(undefined); // only one

  const openProject = (projectData: any) => {
    setProjectModalData(projectData);
    setOpenProjectModal(true);
  }

  const handleCloseModal = () => {
    setOpenProjectModal(false)
  }

  return (
    <>
      {
        props.content != undefined ?
      <>
      {openProjectModal ? <Project projectData={projectModalData} openModal={openProjectModal} closeModal={handleCloseModal} /> : ""}
      <Container maxW='5xl' centerContent >
        {
          props.content?.length == 0 ? <Center>{"Projects not available"}</Center> :
            <Grid
            pt='1em'
            pb='1em'
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            gap={6}
            >
                {
                  props.content.map((m : BlogPost) =>
                  <GridItem bg='dark' key={m.title}>
                        <Box maxW='sm' borderWidth='2px'   borderRadius='lg' p='1em' boxShadow='lg' overflow='hidden' onClick={() => openProject(m)} _hover={{ bg: "teal.600" }} style={{cursor: 'pointer'}}>
                            <Image src={m.heroImage.url} alt={m.title} width={'346px'} height={'231px'} objectFit={'contain'}/>
                            <Box
                                m='1'
                                fontWeight='semi-bold'
                                as='h4'
                                lineHeight='tight'
                            >
                              {m.title}
                            </Box>
                            {m.tags.map((t: any) =>
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
                                Object.keys(m.links).map((k : any) =>
                                <Button key={k} isFullWidth>
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
      </> : "" }
    </>
    )
  }