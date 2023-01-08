import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box as={"footer"} w="full" h={"2rem"} bgColor={"gray.700"} >
        <Flex align={"center"} justify="center" py={"2px"}>
            <Text color={"white"} fontWeight={"black"}>
                Made with ❤️ by <Link  href="https://www.github.com/Sachin96Boy">@sachin96Boy</Link>
            </Text>
        </Flex>
    </Box>
  )
}

export default Footer