import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Button, Center, Circle, Container, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ProjectList from './project_list'
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client";
import {BlogPost, Category} from '../models/dtos';

export default function ProjectPage(data : any) {
  console.log(data )
  const [categories, setCategories] = useState<Category[] | undefined >(undefined)
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | undefined >(undefined)
  const [projectType, setProjectType] = useState<string | undefined | null>("");

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
        {
          categories != undefined || blogPosts != undefined ?
              <div>
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
                categories != undefined ?
                    <>
                      {
                        categories.map((m: Category) => (
                                <MenuItem key={m.name} minH='48px' onClick={() => switchProjectType(m.name)}>
                                  <span>{m.name}</span>
                                </MenuItem>
                            )
                        )
                      }
                    </>
                    : ""
              }
            </MenuList>
          </Menu>
        </Center>
        </div>
                {
                    blogPosts != undefined ? <ProjectList content={blogPosts.filter((blog: any) => blog.author.name == projectType)}/> : ""
                }
              </div>

        : "" }
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
          links
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