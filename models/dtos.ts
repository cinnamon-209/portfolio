export interface Category {
  id: string
  name: string
  articles: Article[]
}

export interface UploadFile{
  url: string
}

export interface Article {
  id: string
  title: string
  image: UploadFile
  category: Category
  description: string
  techStack: string
  reflection: string
  links: JSON
}


