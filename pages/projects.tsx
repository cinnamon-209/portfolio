import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Button, Center, Circle, Container, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ProjectList from './project_list'
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client";
import {Category} from '../models/dtos'; 

export default function ProjectPage(data) {
  const [categories, setCategories] = useState<Category[]>([])
  const [blogPosts, setBlogPosts] = useState([])
  const [projectType, setProjectType] = useState<string>("");

  useEffect(() => {
    setBlogPosts(data.blogPosts)
    setCategories(data.categories)
    setProjectType(data.categories[0].name)
  }, [])

  const switchProjectType = (projectType: string) => {
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
              {projectType}
            </MenuButton>
            <MenuList >
              {
                categories.map((m: Category) => (
                  <MenuItem key={m.name} minH='48px' onClick={() => switchProjectType(m.name)}>
                    <span>{m.name}</span>
                  </MenuItem>
                  )
                )
              }
            </MenuList>
          </Menu>
        </Center>
        </div>

        {
          <ProjectList content={blogPosts.filter((blog: any) => blog.author.name == projectType)}/>
        }

      </>
    )
  }

export async function getServerSideProps() {
  // one query to rule them all 
  const { data } = await client.query({
    query: gql`
    query {
      personCollection {
        items {
          name
        }
      }
      blogPostCollection {
        items {
          author {
            name
          }
          title
          description
          body 
          heroImage {
            url
          }
          tags
        }
      }
    }
    `,
  })

  return {
    props: {
      categories: data.personCollection.items,
      blogPosts: data.blogPostCollection.items
    },
  };
}