import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import {motion} from "framer-motion";

interface TokenExProps {
    language : string;
}

const MotionImg = motion(Img);

const TokenEx : FC<TokenExProps> = () => {
  
    return (
        <>
        <Flex w="full" minH="70vh" alignItems="center"> 
            <Flex mx="auto" mt={56}>
                <Flex alignItems="center">                  
                <Flex w="full" maxW="100vw" justifyContent="center" alignItems="center">
                    <Flex w="full" flexDir="column" justifyContent="center" alignItems="center" mr={["0","0","0","30px","30px","30px"]}>
                        <MotionImg
                        h={["400px", "400px", "400px", "0", "0", "0"]}
                        src="images/tokenex.png"
                        zIndex={2}
                        position="relative"
                        mx="auto"
                        initial={{ opacity: 1, y: -20 }}
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        />
                        <Text
                        w={["320px","400px","400px","400px","400px","400px","400px"]}
                        textAlign="center"
                        fontSize={["32px", "32px", "32px", "32px", "32px", "40px", "40px"]}
                        fontWeight="bold"
                        color="#333333"
                        >
                        DogeX is a new paradigm in meme coin trading
                        </Text>
                        <Flex py={5} gap={4} justifyContent="center" alignItems="center">
                        <Img src="images/t_logo.png" w="120px" />
                        <Img src="images/x_logo.png" w="120px" />
                        <Img src="images/medium_logo.png" w="120px" />
                        </Flex>
                        <Button
                        h={["40px", "40px", "40px", "40px", "40px", "52px", "52px"]}
                        bgGradient="linear(to-r, #1a3b8f, #1a8f3b)"
                        color="white"
                        borderRadius="24px"
                        padding="12px 24px"
                        fontWeight="bold"
                        as="a"
                        href="/documents/DOGEX whitepaper ver 0.1_eng.pdf"
                        download="DOGEX whitepaper ver 0.1_eng.pdf"
                        overflow="hidden"
                        _hover={{
                            backgroundColor: "#0C0E27",
                            _before: {
                            transform: "translateX(100%)",
                            },
                        }}
                        _before={{
                            content: "''",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            background: "rgba(255, 255, 255, 0.3)",
                            transition: "transform 0.5s ease",
                            transform: "translateX(0%)",
                        }}
                        >
                        WHITEPAPER →
                        </Button>
                    </Flex>
                        <MotionImg
                            h={["0", "0", "0", "440px", "440px", "440px"]}
                            src="images/tokenex.png"
                            zIndex={2}
                            position="relative"
                            mx="auto"
                            initial={{ opacity: 1, y: -20 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                            duration: 2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "loop",
                            }}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex> 
        </>
    )
}

export default TokenEx;