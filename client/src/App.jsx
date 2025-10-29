import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Flex,
    Text,
    Button,
    Input,
    VStack,
    HStack,
    Grid,
    GridItem,
    Skeleton,
    SkeletonText,
    SkeletonCircle,
    IconButton,
    Drawer,
    useDisclosure,
    Container,
    Select,
    Circle, defaultSystem
} from '@chakra-ui/react';



const App = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        company: '',
        role: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setCurrentPage('dashboard');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setCurrentPage('dashboard');
    };

    const fillDemoAccount = () => {
        setFormData({
            email: 'demo@amlblockchain.com',
            password: 'demo123',
            company: 'AML Solutions Inc',
            role: 'Compliance Officer'
        });
    };

    // Header Component
    const Header = () => (
        <Box bg="white" borderBottom="2px" borderColor="gray.200" px={6} py={4}>
            <Flex justify="space-between" align="center">
                <HStack spacing={4}>
                    <IconButton
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={isOpen ? onClose : onOpen}
                        variant="ghost"
                        size="lg"
                    />
                    <Skeleton height="24px" width="200px" />
                </HStack>
                <HStack spacing={4}>
                    <Box position="relative">
                        <IconButton icon={<BellIcon />} variant="ghost" />
                        <Circle size="16px" bg="red.500" position="absolute" top="0" right="0" />
                    </Box>
                    <SkeletonCircle size="40px" />
                </HStack>
            </Flex>
        </Box>
    );

    // Sidebar Component
    const Sidebar = () => (
        <VStack align="stretch" spacing={2} p={4}>
            {['Dashboard', 'Fund Tracer', 'Analytics', 'Account'].map((item, idx) => (
                <Button
                    key={idx}
                    variant={currentPage === item.toLowerCase().replace(' ', '') ? 'solid' : 'ghost'}
                    colorScheme={currentPage === item.toLowerCase().replace(' ', '') ? 'blue' : 'gray'}
                    justifyContent="flex-start"
                    onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
                >
                    <Skeleton height="20px" width="120px" />
                </Button>
            ))}
        </VStack>
    );

    // Landing Page
    const LandingPage = () => (
        <Box minH="100vh" bg="gray.100">
            <Box bg="white" borderBottom="2px" borderColor="gray.200" px={6} py={4}>
                <Flex justify="space-between" align="center">
                    <Skeleton height="32px" width="200px" />
                    <HStack spacing={4}>
                        <Button variant="ghost" onClick={() => setCurrentPage('login')}>
                            <Skeleton height="20px" width="60px" />
                        </Button>
                        <Button colorScheme="blue" onClick={() => setCurrentPage('register')}>
                            <Skeleton height="20px" width="80px" />
                        </Button>
                    </HStack>
                </Flex>
            </Box>

            <Container maxW="container.xl" py={20}>
                <VStack spacing={12}>
                    <VStack spacing={6} textAlign="center">
                        <Skeleton height="60px" width="600px" />
                        <Skeleton height="24px" width="500px" />
                        <Button colorScheme="blue" size="lg" mt={4} onClick={() => setCurrentPage('register')}>
                            <Skeleton height="24px" width="150px" />
                        </Button>
                    </VStack>

                    <Grid templateColumns="repeat(3, 1fr)" gap={8} w="full" mt={20}>
                        {[1, 2, 3].map((item) => (
                            <GridItem key={item}>
                                <Box bg="white" p={8} borderRadius="lg" border="2px" borderColor="gray.200">
                                    <SkeletonCircle size="48px" mb={4} />
                                    <Skeleton height="24px" width="80%" mb={3} />
                                    <SkeletonText noOfLines={2} spacing={2} />
                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>
            </Container>
        </Box>
    );

    // Register Page
    const RegisterPage = () => (
        <Flex minH="100vh" align="center" justify="center" bg="gray.100">
            <Box bg="white" p={8} borderRadius="lg" border="2px" borderColor="gray.200" maxW="md" w="full">
                <VStack spacing={6} align="stretch">
                    <Skeleton height="36px" width="200px" mx="auto" />

                    <Button colorScheme="yellow" onClick={fillDemoAccount}>
                        Fill Demo Account
                    </Button>

                    <form onSubmit={handleRegister}>
                        <VStack spacing={4}>
                            <FormControl>
                                <FormLabel><Skeleton height="16px" width="60px" /></FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter email"
                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel><Skeleton height="16px" width="80px" /></FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter password"
                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel><Skeleton height="16px" width="100px" /></FormLabel>
                                <Input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="Enter company name"
                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel><Skeleton height="16px" width="40px" /></FormLabel>
                                <Select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    placeholder="Select role"
                                    required
                                >
                                    <option value="Compliance Officer">Compliance Officer</option>
                                    <option value="Analyst">Analyst</option>
                                    <option value="Administrator">Administrator</option>
                                </Select>
                            </FormControl>

                            <Button type="submit" colorScheme="blue" w="full" mt={4}>
                                Register
                            </Button>
                        </VStack>
                    </form>

                    <Text textAlign="center" fontSize="sm" color="gray.600">
                        Already have an account?{' '}
                        <Button variant="link" colorScheme="blue" onClick={() => setCurrentPage('login')}>
                            Login
                        </Button>
                    </Text>
                </VStack>
            </Box>
        </Flex>
    );

    // Login Page
    const LoginPage = () => (
        <Flex minH="100vh" align="center" justify="center" bg="gray.100">
            <Box bg="white" p={8} borderRadius="lg" border="2px" borderColor="gray.200" maxW="md" w="full">
                <VStack spacing={6} align="stretch">
                    <Skeleton height="36px" width="150px" mx="auto" />

                    <form onSubmit={handleLogin}>
                        <VStack spacing={4}>
                            <FormControl>
                                <FormLabel><Skeleton height="16px" width="60px" /></FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter email"
                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel><Skeleton height="16px" width="80px" /></FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter password"
                                    required
                                />
                            </FormControl>

                            <Button type="submit" colorScheme="blue" w="full" mt={4}>
                                Login
                            </Button>
                        </VStack>
                    </form>

                    <Text textAlign="center" fontSize="sm" color="gray.600">
                        Don't have an account?{' '}
                        <Button variant="link" colorScheme="blue" onClick={() => setCurrentPage('register')}>
                            Sign up
                        </Button>
                    </Text>
                </VStack>
            </Box>
        </Flex>
    );

    // Dashboard Page
    const Dashboard = () => (
        <Flex h="100vh" bg="gray.50">
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box bg="white" h="full" borderRight="2px" borderColor="gray.200">
                        <Sidebar />
                    </Box>
                </DrawerContent>
            </Drawer>

            <Box display={{ base: 'none', md: 'block' }} w="250px" bg="white" borderRight="2px" borderColor="gray.200">
                <Sidebar />
            </Box>

            <Flex direction="column" flex="1" overflow="hidden">
                <Header />

                <Box flex="1" overflowY="auto" p={6}>
                    <VStack align="stretch" spacing={6}>
                        <Box>
                            <Skeleton height="32px" width="300px" mb={2} />
                            <Skeleton height="16px" width="250px" />
                        </Box>

                        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                            {[1, 2, 3, 4].map((item) => (
                                <GridItem key={item}>
                                    <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                        <Flex justify="space-between" align="center" mb={4}>
                                            <SkeletonCircle size="40px" />
                                            <Skeleton height="32px" width="60px" />
                                        </Flex>
                                        <Skeleton height="16px" width="120px" />
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>

                        <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                            <Flex justify="space-between" align="center" mb={6}>
                                <Skeleton height="24px" width="150px" />
                                <Skeleton height="20px" width="80px" />
                            </Flex>

                            <VStack spacing={4} align="stretch">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <Box key={item} bg="gray.50" p={4} borderRadius="md">
                                        <Flex justify="space-between" align="center">
                                            <HStack spacing={4} flex="1">
                                                <SkeletonCircle size="12px" />
                                                <VStack align="start" spacing={1}>
                                                    <Skeleton height="16px" width="120px" />
                                                    <Skeleton height="12px" width="80px" />
                                                </VStack>
                                            </HStack>
                                            <HStack spacing={6}>
                                                <VStack align="end" spacing={1}>
                                                    <Skeleton height="16px" width="80px" />
                                                    <Skeleton height="12px" width="100px" />
                                                </VStack>
                                                <Skeleton height="24px" width="80px" borderRadius="full" />
                                                <Skeleton height="20px" width="90px" />
                                            </HStack>
                                        </Flex>
                                    </Box>
                                ))}
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );

    // Fund Tracer Canvas Page
    const CanvasPage = () => (
        <Flex h="100vh" bg="gray.50">
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box bg="white" h="full" borderRight="2px" borderColor="gray.200">
                        <Sidebar />
                    </Box>
                </DrawerContent>
            </Drawer>

            <Box display={{ base: 'none', md: 'block' }} w="250px" bg="white" borderRight="2px" borderColor="gray.200">
                <Sidebar />
            </Box>

            <Flex direction="column" flex="1" overflow="hidden">
                <Header />

                <Box flex="1" overflowY="auto" p={6}>
                    <VStack align="stretch" spacing={6}>
                        <Box>
                            <Skeleton height="32px" width="200px" mb={2} />
                            <Skeleton height="16px" width="300px" />
                        </Box>

                        <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                            <VStack spacing={4}>
                                <HStack w="full" spacing={4}>
                                    <Input placeholder="Enter wallet address or transaction hash" flex="1" />
                                    <Button colorScheme="blue" px={8}>
                                        <Skeleton height="20px" width="60px" />
                                    </Button>
                                </HStack>
                                <HStack spacing={4}>
                                    <Button variant="outline">
                                        <Skeleton height="20px" width="100px" />
                                    </Button>
                                    <Button variant="outline">
                                        <Skeleton height="20px" width="100px" />
                                    </Button>
                                    <Button variant="outline">
                                        <Skeleton height="20px" width="120px" />
                                    </Button>
                                </HStack>
                            </VStack>
                        </Box>

                        <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                            <Box bg="gray.50" borderRadius="md" h="600px" position="relative">
                                {/* Grid pattern */}
                                <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(8, 1fr)" h="full" opacity={0.1}>
                                    {[...Array(96)].map((_, i) => (
                                        <GridItem key={i} border="1px" borderColor="gray.300" />
                                    ))}
                                </Grid>

                                {/* Node visualization */}
                                <Flex position="absolute" inset="0" align="center" justify="center" direction="column" gap={20}>
                                    <HStack spacing={32}>
                                        <VStack>
                                            <Skeleton circle height="80px" width="80px" />
                                            <Skeleton height="16px" width="100px" />
                                            <Skeleton height="12px" width="120px" />
                                        </VStack>
                                        <Box w="200px" position="relative">
                                            <Skeleton height="4px" width="full" />
                                            <Skeleton
                                                height="20px"
                                                width="60px"
                                                position="absolute"
                                                top="-30px"
                                                left="50%"
                                                transform="translateX(-50%)"
                                            />
                                        </Box>
                                        <VStack>
                                            <Skeleton circle height="80px" width="80px" />
                                            <Skeleton height="16px" width="100px" />
                                            <Skeleton height="12px" width="120px" />
                                        </VStack>
                                    </HStack>

                                    <HStack spacing={32}>
                                        <VStack>
                                            <Skeleton circle height="80px" width="80px" />
                                            <Skeleton height="16px" width="100px" />
                                            <Skeleton height="12px" width="120px" />
                                        </VStack>
                                        <Box w="200px" position="relative">
                                            <Skeleton height="4px" width="full" />
                                            <Skeleton
                                                height="20px"
                                                width="60px"
                                                position="absolute"
                                                top="-30px"
                                                left="50%"
                                                transform="translateX(-50%)"
                                            />
                                        </Box>
                                        <VStack>
                                            <Skeleton circle height="80px" width="80px" />
                                            <Skeleton height="16px" width="100px" />
                                            <Skeleton height="12px" width="120px" />
                                        </VStack>
                                    </HStack>
                                </Flex>

                                {/* Legend */}
                                <Box position="absolute" bottom={4} left={4} bg="white" p={4} borderRadius="md" border="1px" borderColor="gray.200">
                                    <Skeleton height="16px" width="80px" mb={3} />
                                    <VStack align="start" spacing={2}>
                                        {[1, 2, 3].map((item) => (
                                            <HStack key={item}>
                                                <Skeleton height="16px" width="16px" />
                                                <Skeleton height="12px" width="80px" />
                                            </HStack>
                                        ))}
                                    </VStack>
                                </Box>
                            </Box>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );

    // Account Page
    const AccountPage = () => (
        <Flex h="100vh" bg="gray.50">
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box bg="white" h="full" borderRight="2px" borderColor="gray.200">
                        <Sidebar />
                    </Box>
                </DrawerContent>
            </Drawer>

            <Box display={{ base: 'none', md: 'block' }} w="250px" bg="white" borderRight="2px" borderColor="gray.200">
                <Sidebar />
            </Box>

            <Flex direction="column" flex="1" overflow="hidden">
                <Header />

                <Box flex="1" overflowY="auto" p={6}>
                    <VStack align="stretch" spacing={6}>
                        <Box>
                            <Skeleton height="32px" width="250px" mb={2} />
                            <Skeleton height="16px" width="300px" />
                        </Box>

                        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                            {/* Profile Information */}
                            <GridItem>
                                <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                    <Skeleton height="24px" width="180px" mb={6} />
                                    <VStack spacing={4} align="stretch">
                                        {[1, 2, 3, 4].map((item) => (
                                            <FormControl key={item}>
                                                <FormLabel><Skeleton height="14px" width="80px" /></FormLabel>
                                                <Box bg="gray.50" p={3} borderRadius="md" border="1px" borderColor="gray.200">
                                                    <Skeleton height="16px" width="60%" />
                                                </Box>
                                            </FormControl>
                                        ))}
                                        <Button colorScheme="blue" mt={2}>
                                            <Skeleton height="20px" width="120px" />
                                        </Button>
                                    </VStack>
                                </Box>
                            </GridItem>

                            {/* Security Settings */}
                            <GridItem>
                                <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                    <Skeleton height="24px" width="160px" mb={6} />
                                    <VStack spacing={4} align="stretch">
                                        {[1, 2, 3].map((item) => (
                                            <FormControl key={item}>
                                                <FormLabel><Skeleton height="14px" width="100px" /></FormLabel>
                                                <Input type="password" placeholder="Enter password" />
                                            </FormControl>
                                        ))}
                                        <Button colorScheme="blue" mt={2}>
                                            <Skeleton height="20px" width="140px" />
                                        </Button>
                                    </VStack>
                                </Box>
                            </GridItem>

                            {/* Notification Preferences */}
                            <GridItem>
                                <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                    <Skeleton height="24px" width="200px" mb={6} />
                                    <VStack spacing={4} align="stretch">
                                        {[1, 2, 3, 4].map((item) => (
                                            <Flex key={item} justify="space-between" align="center">
                                                <Skeleton height="16px" width="120px" />
                                                <Skeleton height="20px" width="40px" />
                                            </Flex>
                                        ))}
                                    </VStack>
                                </Box>
                            </GridItem>

                            {/* API Access */}
                            <GridItem>
                                <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                    <Skeleton height="24px" width="120px" mb={6} />
                                    <VStack spacing={4} align="stretch">
                                        <FormControl>
                                            <FormLabel><Skeleton height="14px" width="60px" /></FormLabel>
                                            <Flex bg="gray.50" p={3} borderRadius="md" border="1px" borderColor="gray.200" justify="space-between" align="center">
                                                <Skeleton height="16px" width="150px" />
                                                <Skeleton height="16px" width="40px" />
                                            </Flex>
                                        </FormControl>
                                        <Button variant="outline" w="full">
                                            <Skeleton height="20px" width="140px" />
                                        </Button>
                                        <Button variant="outline" w="full">
                                            <Skeleton height="20px" width="160px" />
                                        </Button>
                                    </VStack>
                                </Box>
                            </GridItem>
                        </Grid>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );

    // Analytics Page
    const AnalyticsPage = () => (
        <Flex h="100vh" bg="gray.50">
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box bg="white" h="full" borderRight="2px" borderColor="gray.200">
                        <Sidebar />
                    </Box>
                </DrawerContent>
            </Drawer>

            <Box display={{ base: 'none', md: 'block' }} w="250px" bg="white" borderRight="2px" borderColor="gray.200">
                <Sidebar />
            </Box>

            <Flex direction="column" flex="1" overflow="hidden">
                <Header />

                <Box flex="1" overflowY="auto" p={6}>
                    <VStack align="stretch" spacing={6}>
                        <Box>
                            <Skeleton height="32px" width="300px" mb={2} />
                            <Skeleton height="16px" width="280px" />
                        </Box>

                        {/* Top Metrics */}
                        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                            {[1, 2, 3].map((item) => (
                                <GridItem key={item}>
                                    <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                        <Skeleton height="14px" width="180px" mb={3} />
                                        <Skeleton height="36px" width="120px" mb={2} />
                                        <Skeleton height="14px" width="150px" />
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>

                        {/* Charts */}
                        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                            {/* Bar Chart */}
                            <GridItem>
                                <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                    <Skeleton height="24px" width="220px" mb={6} />
                                    <Box bg="gray.50" borderRadius="md" h="300px" p={4}>
                                        <Flex h="full" align="flex-end" justify="space-around" gap={2}>
                                            {[60, 75, 55, 85, 70, 90].map((height, idx) => (
                                                <VStack key={idx} spacing={2} flex="1">
                                                    <Skeleton height={`${height}%`} width="full" />
                                                    <Skeleton height="12px" width="30px" />
                                                </VStack>
                                            ))}
                                        </Flex>
                                    </Box>
                                </Box>
                            </GridItem>

                            {/* Pie Chart */}
                            <GridItem>
                                <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                                    <Skeleton height="24px" width="180px" mb={6} />
                                    <Box bg="gray.50" borderRadius="md" h="300px" display="flex" alignItems="center" justifyContent="center">
                                        <SkeletonCircle size="200px" />
                                    </Box>
                                    <Flex justify="space-around" mt={6}>
                                        {[1, 2, 3].map((item) => (
                                            <VStack key={item} spacing={1}>
                                                <Skeleton height="16px" width="16px" />
                                                <Skeleton height="12px" width="50px" />
                                                <Skeleton height="16px" width="40px" />
                                            </VStack>
                                        ))}
                                    </Flex>
                                </Box>
                            </GridItem>
                        </Grid>

                        {/* Top Flagged Addresses */}
                        <Box bg="white" p={6} borderRadius="lg" border="2px" borderColor="gray.200">
                            <Skeleton height="24px" width="220px" mb={6} />
                            <VStack spacing={3} align="stretch">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <Box key={item} bg="gray.50" p={4} borderRadius="md">
                                        <Flex justify="space-between" align="center">
                                            <HStack spacing={4}>
                                                <Skeleton height="16px" width="20px" />
                                                <Skeleton height="16px" width="150px" />
                                            </HStack>
                                            <HStack spacing={8}>
                                                <VStack align="end" spacing={1}>
                                                    <Skeleton height="12px" width="40px" />
                                                    <Skeleton height="16px" width="30px" />
                                                </VStack>
                                                <VStack align="end" spacing={1}>
                                                    <Skeleton height="12px" width="40px" />
                                                    <Skeleton height="16px" width="40px" />
                                                </VStack>
                                                <VStack align="end" spacing={1}>
                                                    <Skeleton height="12px" width="50px" />
                                                    <Skeleton height="16px" width="60px" />
                                                </VStack>
                                            </HStack>
                                        </Flex>
                                    </Box>
                                ))}
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );

    // Route handler
    if (!isLoggedIn) {
        if (currentPage === 'register') return <ChakraProvider value={defaultSystem}><RegisterPage /></ChakraProvider>;
        if (currentPage === 'login') return <ChakraProvider value={defaultSystem}><LoginPage /></ChakraProvider>;
        return <ChakraProvider value={defaultSystem}><LandingPage /></ChakraProvider>;
    }

    return (
        <ChakraProvider value={defaultSystem}>
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'canvas' && <CanvasPage />}
            {currentPage === 'fundtracer' && <CanvasPage />}
            {currentPage === 'account' && <AccountPage />}
            {currentPage === 'analytics' && <AnalyticsPage />}
            {!['dashboard', 'canvas', 'fundtracer', 'account', 'analytics'].includes(currentPage) && <Dashboard />}
        </ChakraProvider>
    );
};

export default App;