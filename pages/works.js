import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbProjectOne from '../public/images/works/project1.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="api"
              title="Cities API"
              thumbnail={thumbProjectOne}
            >
              Project developed during the bootcamp DIO. Creating an API that
              searches for Brazilian cities and calculates the distance between
              them using latitude and longitude. Using Postman for testing our
              API, and Heroku to deploy our app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="api"
              title="Cities API"
              thumbnail={thumbProjectOne}
            >
              Project developed during the bootcamp DIO. Creating an API that
              searches for Brazilian cities and calculates the distance between
              them using latitude and longitude. Using Postman for testing our
              API, and Heroku to deploy our app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="api"
              title="Cities API"
              thumbnail={thumbProjectOne}
            >
              Project developed during the bootcamp DIO. Creating an API that
              searches for Brazilian cities and calculates the distance between
              them using latitude and longitude. Using Postman for testing our
              API, and Heroku to deploy our app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="api"
              title="Cities API"
              thumbnail={thumbProjectOne}
            >
              Project developed during the bootcamp DIO. Creating an API that
              searches for Brazilian cities and calculates the distance between
              them using latitude and longitude. Using Postman for testing our
              API, and Heroku to deploy our app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
