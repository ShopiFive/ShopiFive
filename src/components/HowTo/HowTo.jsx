import {AlphaCard, Avatar, Box, HorizontalGrid, List, Text} from '@shopify/polaris';
import "./HowTo.scss";

export default function HowTo() {

    return (
        <AlphaCard>
            <Box>
                <img className='img-container' />
            </Box>
            <Box>
                <Text variant="headingSm" as="h5">
                    You Will Learn:
                </Text>
                <List type="bullet">
                    <List.Item>How to create a mission statement</List.Item>
                    <List.Item>How to create a vision statement</List.Item>
                </List>
                <Text variant="bodySm" as="p">
                    You will also complete an introductory section with general information about your business.
                </Text>
                <HorizontalGrid columns={['twoThirds', 'oneThird']}>
                    <Text variant="bodyMd" as="p">
                        Estimated time to complete
                        <span className='bold'>5-10 minutes</span>
                    </Text>
                    <Avatar source='' />
                </HorizontalGrid>
            </Box>
        </AlphaCard>
    )
}