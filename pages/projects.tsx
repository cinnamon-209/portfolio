import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Button, Center, Circle, Container, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import ProjectList from './project_list'
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client";

import {Category} from '../models/dtos'; 


export default function ProjectPage({categories} : any) {
  let defaultProjectType: Category = categories[0]; 
  const [projectType, setProjectType] = useState<Category>(defaultProjectType);

  const switchProjectType = (projectType: Category) => {
    setProjectType(projectType)
  }

  return (
      <>
      <Head>
          <title>{"CG's Project"}</title>
          <meta name="description" content="CG project" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Center pt='1em' pb='1em' >
          <Button mr='1em'>
            <Link href="/">Back</Link>
          </Button>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {projectType.name}
            </MenuButton>
            <MenuList >
              {
                categories.map((m: Category) => (
                  <MenuItem key={m.id} minH='48px' onClick={() => switchProjectType(m)}>
                    <span>{m.name}</span>
                  </MenuItem>
                  )
                )
              }
            </MenuList>
          </Menu>
        </Center>
        </div>

        <ProjectList content={projectType.articles}/>

      </>
    )
  }




export async function getServerSideProps() {
  // one query to rule them all 
  const { data } = await client.query({
    query: gql`
      query {
        categories {
          id
          name
          articles {
            id 
            title
            techStack
            description
            image {
              url 
            }
            reflection
            links
          }
        } 
      }
    `,
  })

  return {
    props: {
      categories: data.categories
    },
  };
}