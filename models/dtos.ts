export interface HomePage{
  name: string,
  title: string,
  shortBio: string,
  email: string,
  github: string
  linkedin: string,
  image: Url,
}

export interface Url{
  url: string
}

export interface Category{
  name: string
}

export interface BlogPost{
  author: Author,
  title: string,
  description: string,
  body: string,
  heroImage: Url,
  tags: string[]
  links: string[]
}

export interface Author{
  name: string
}