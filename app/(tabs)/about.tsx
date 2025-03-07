import React from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import Link from "expo-router/link";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Divider,
  Center,
} from "@gluestack-ui/themed";

export default function AboutPage() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  return (
    <ScrollView>
      <Center>
        <Box
          p="$5"
          bg="$white"
          maxWidth={isDesktop ? 1024 : "100%"}
          w="$full"
          my={isDesktop ? "$8" : "$0"}
          rounded={isDesktop ? "$xl" : "$none"}
          shadowColor="$gray900"
          shadowOpacity={isDesktop ? 0.1 : 0}
          shadowRadius={isDesktop ? 4 : 0}
          shadowOffset={{ width: 0, height: 2 }}
        >
          <VStack space="md">
            <Heading size="xl" textAlign="center">
              About Tunis Car Services
            </Heading>

            <Text mt="$4">
              Welcome to Tunis Car Services, your trusted directory for finding
              the best automotive services in Tunis.
            </Text>

            <Text>
              Our mission is to connect car owners with reliable, high-quality
              service providers throughout the city. Whether you need routine
              maintenance, emergency repairs, or specialized services for luxury
              vehicles, our directory helps you find the right professionals for
              the job.
            </Text>

            <Heading size="md" mt="$4">
              Our Features
            </Heading>
            <Text>
              • Comprehensive listings of verified car service providers{"\n"}•
              Detailed information about services offered{"\n"}• Direct contact
              options{"\n"}• Location information with map integration
            </Text>

            <Heading size="md" mt="$4">
              Contact Us
            </Heading>
            <Text>
              If you'd like to add your business to our directory or have any
              questions, please contact us at:{"\n"}
              contact@tuniscarservices.com
            </Text>

            <Divider my="$4" />

            <Text color="$gray500" textAlign="center" mt="$4">
              Version 1.0.0
            </Text>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
}
