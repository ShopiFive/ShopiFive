import {AlphaCard, Box, Button, HorizontalStack, Icon, List, Text} from '@shopify/polaris';
import {ClockMajor} from '@shopify/polaris-icons'
import Graphic from '../../../assets/images/how-to-write-a-business-plan.webp'
import "./Q2HowTo.scss";

export default function Q2HowTo({ handleClick }) {
    return (
        <>
        <AlphaCard>
            <img src={Graphic} alt='business plan illustration' className='howto-card__img-container' />
            <Box className='howto-card__text-container'>
                <Text className='howto-card__text-container--header' variant="headingMd" as="h3">
                    You Will Learn:
                </Text>
                <List type="bullet" spacing='extraTight'>
                    <List.Item>How to create a mission statement</List.Item>
                    <List.Item>How to create a vision statement</List.Item>
                </List>
                <Text variant="bodyMd" as="p">
                    You will also complete an introductory section with general information about your business.
                </Text>
                <HorizontalStack gap='5rem' wrap={false}>
                    <div>
                        <Text variant="bodyLg" as="p">
                            Estimated time to complete
                        </Text>
                        <Text variant="bodyLg" as="p" fontWeight="bold">
                            5-10 minutes
                        </Text>
                    </div>
                    <Icon color='base' source={ClockMajor} />
                </HorizontalStack>
                <HorizontalStack align='center'>
                    <Button primary onClick={handleClick}>Get started</Button>
                </HorizontalStack>
            </Box>
        </AlphaCard>
        <div className='push'></div>
        </>
    )
}