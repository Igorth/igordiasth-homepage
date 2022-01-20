import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Cities API">
      <Container>
        <Title>
          Cities API <Badge>2021</Badge>
        </Title>
        <P>TextTextTextTextTextTextTextTextTextTextTextText</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Igorth/cities-api">
              https://github.com/Igorth/cities-api <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java, JUnit, Rest Assurance</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/project1.png" alt="Project Cities API" />
      </Container>
    </Layout>
  )
}

export default Work
