import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Link,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a quality assurance engineer based in Canada!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Igor Dias
          </Heading>
          <p>Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/igor.png"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m a QA Engineer, passionate about technology and solving
          problems always aiming to learn new things. Motivated and committed
          professional with strong attention to detail and good communication
          skills. Expect me always to learn more about BDD and Automation Tester
          while creating and constantly pushing boundaries to deliver better
          products. Able to drive web application roadmap forward, with focus on
          efficiently delivering software that users will rave about, as well as
          able to collaborate on all aspects of software development. {' '}
          <NextLink href="/works/resume">
            <Link>Resume</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in Belo Horizonte, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>
           Completed the Bacharel&apos;s in Information System
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Web Developer, Rock Content
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Go to New Zealand
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Diploma in Quality Assurance Testing
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I love
        </Heading>
        <Paragraph>
          Cook, Snowboarding, Bear, {' '} <Link href="">Snow</Link>
        </Paragraph>

      </Section>
    </Container>
  )
}

export default Page
