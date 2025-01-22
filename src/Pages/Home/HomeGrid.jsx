import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  HStack,
  useBreakpointValue,
  Link
} from "@chakra-ui/react";
import { testimonials, clients, WhoWeAre, WhyChooseUs, OurServices } from "./HomeGridInfo";
import { product, productDescription } from "./HomeGridInfo";
import { card } from "../../assets"

export const HomeGrid = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Heading as="h1" color="#3574a5c7" fontSize={60} textAlign="center" mt={16} mb={8}>
        Nuestra Empresa
      </Heading>

      {/* Highlight Section */}
      <Box w="100%" py={8} bg="gray.50">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          px={{ base: 4, md: 8, lg: 16 }}
        >
          <GridItem bg="white" p={6} shadow="md" borderRadius="md">
            <WhoWeAre />
          </GridItem>
          <GridItem bg="white" p={6} shadow="md" borderRadius="md">
            <OurServices />
          </GridItem>
          <GridItem bg="white" p={6} shadow="md" borderRadius="md">
            <WhyChooseUs />
          </GridItem>
        </Grid>
      </Box>

      {/* Featured Products/Services */}
      <Box w="100%" py={8} textAlign="center">
        <Heading as="h2" size="lg" mt={6} mb={8}>
          Productos Destacados
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          px={{ base: 4, md: 8, lg: 16 }}
        >
          {product.map((item, index) => (
            <GridItem key={item} bg="white" p={6} shadow="md" borderRadius="md">
              <Image
                src={ card }
                alt={`Producto ${item}`}
                mb={4}
                borderRadius="md"
                _hover={{ transform: "scale(1.03)" }}
                transition="transform 0.2s ease-in-out"
              />
              <Heading size="sm">{item}</Heading>
              <Text mt={2}>{productDescription[index]}.</Text>
              <Button mt={4} colorScheme="teal">
                Ver Más
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box w="100%" py={8} bg="gray.100" textAlign="center">
        <Heading as="h2" size="lg" m={10}>
          Lo Que Dicen Nuestros Clientes
        </Heading>
        <HStack
          spacing={6}
          px={{ base: 4, md: 8, lg: 16 }}
          // overflowX={isMobile ? "scroll" : "hidden"}
          overflowX="scroll"
        >
          {clients.map((cliente, index) => (
            <Link
              minW={{ base: "80%", md: "30%" }}
              href="/testimonios"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease-in-out"
            >
              <VStack
                key={cliente}
                bg="white"
                p={6}
                shadow="md"
                borderRadius="md"
              >
                <Text fontWeight="bold">
                  " {cliente} "
                </Text>
                <Text fontStyle="italic">-
                  {testimonials[index]}
                </Text>
              </VStack>
            </Link>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}