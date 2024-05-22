"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

const Links = ["excel", "powerBi", "lookerStudio", "python", "website"];

export const NavBar = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "black",
        color: "white",
      }}
      href={`/${children}`}
    >
      {children?.toString().toLocaleUpperCase()}
    </Box>
  );
};

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="transparent" px={4}>
        <Flex h={10} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="black"
            color="white"
            _hover={{
              bg: "black",
            }}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link
                href="/"
                _hover={{
                  textDecoration: "none",
                }}
              >
                HOME
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavBar key={link}>{link}</NavBar>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"} color="black">
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1616356257367-9cd4bf56a45e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <FaGithub style={{ marginRight: "8px" }} />
                  <Link
                    href="https://github.com/nontanut"
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    github.com/nontanut
                  </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <PhoneIcon me={2} />
                  094-4898697
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <EmailIcon me={2} />
                  bo.nontanut@gmail.com
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavBar key={link}>{link}</NavBar>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
