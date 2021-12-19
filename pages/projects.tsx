import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Button, Center, Circle, Container, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ProjectPageContent from './project_content'

const ProjectPage: NextPage = () => {
  let defaultProjectType: string = 'School Project'; 
  const [projectType, setProjectType] = useState<string>(defaultProjectType);

  const switchProjectType = (projectType: string) => {
    console.log(projectType); 
    setProjectType(projectType)
  }

  return (
      <>
      <Head>
          <title>{"CG's Project"}</title>
          <meta name="description" content="CG project" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container>
        <Center pt='1em' pb='1em' >
          <Button>
            Back
          </Button>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {projectType}
            </MenuButton>
            <MenuList >
              {/* for loop to be inserted here with the project type */}
              <MenuItem minH='48px' onClick={() => switchProjectType('School Projects')}>
                <span>School Projects</span>
              </MenuItem>
              <MenuItem minH='40px' onClick={() => switchProjectType('Personal Projects')}>
                <span>Personal Projects</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </Center>
        </Container>

        <ProjectPageContent />

      </>
    )
  }

export default ProjectPage
