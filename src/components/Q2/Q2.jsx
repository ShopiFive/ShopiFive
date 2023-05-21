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
                    What industry is your company involved in?
                </Text>
                <Text variant="bodySm" as="p" color='subdued'>
                    e.g. "fitness" or "travel and hospitality".
                </Text>
            </Box>
        </Box>
    )
}