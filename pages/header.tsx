import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => (
  <header>
        <Button size="lg"> 
          <Link href="/projects/">
            <a>Projects</a>
          </Link>
        </Button>
  </header>
)

export default Header
