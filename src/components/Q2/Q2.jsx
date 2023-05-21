import {Box, ProgressBar, Text} from '@shopify/polaris';
import "./Q2.scss";

export default function Q2() {
    return (
        <Box className='q2'>
            <div className='q2__progress'>
                <ProgressBar progress={30} size='small' color='primary' />
            </div>
            <Box className='q2__text'>
                <Text variant="heading3xl" as="h2" fontWeight="medium">
                    
                </Text>
            </Box>
        </Box>
    )
}