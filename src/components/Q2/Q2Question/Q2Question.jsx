import {Box, Button, Divider, Link, ProgressBar, Select, Text, VerticalStack} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import "./Q2Question.scss";

export default function Q2Question() {
    const [selected, setSelected] = useState({ onNext })

    const handleSelectChange = useCallback((value) => setSelected(value),
    [],)

    const options = [
        {label: 'Education', value: 'education'},
        {label: 'Clothing', value: 'clothing'},
        {label: 'Footware', value: 'footware'},
        {label: 'Software', value: 'software'},
        {label: 'Technology', value: 'technology'},
        {label: 'Retail', value: 'retail'},
        {label: 'Cosmetics', value: 'cosmetics'},
        {label: 'Health & Wellness', value: 'health_wellness'},
        {label: 'Fitness', value: 'fitness'},
        {label: 'Travel & Hospitality', value: 'travel_hospitality'},
        {label: 'Food', value: 'food'},
        {label: 'Accessories', value: 'accessories'},
        {label: 'Toys', value: 'toys'},
        {label: 'Arts & Crafts', value: 'arts_crafts'},
        {label: 'Furniture', value: 'furniture'},
    ]

    return (
        <Box className='q2'>
            <div className='q2__progress'>
                <ProgressBar progress={30} size='small' color='primary' />
            </div>
            <Box className='q2__text'>
                <Text variant="heading2xl" as="h2" fontWeight="medium">
                    What industry is your company involved in?
                </Text>
                <Text className='q2__text--subdued' variant="bodySm" as="p" color='subdued'>
                    e.g. "fitness" or "travel and hospitality"
                </Text>
                <Divider />
                <Select
                    placeholder='Search or select an industry'
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                    onNext={onNext}
                />
                <div className='push'></div>
                <div className='q2__text--btn'>
                    <VerticalStack gap="3" inlineAlign="center">
                        <Button primary disabled={!selected} onClick={onNext}>
                            Next
                        </Button>
                        <Link monochrome url='/home'>
                            Save and Exit
                        </Link>
                    </VerticalStack>
                </div>
            </Box>
            <div className='push__footer'></div>
        </Box>
    )
}