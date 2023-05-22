import {Box, Button, Divider, ProgressBar, Select, Text} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import "./Q2.scss";

export default function Q2() {
    const [selected, setSelected] = useState()
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
                <Text variant="heading3xl" as="h2" fontWeight="medium">
                    What industry is your company involved in?
                </Text>
                <Text variant="bodySm" as="p" color='subdued'>
                    e.g. "fitness" or "travel and hospitality".
                </Text>
                <Divider />
                <Select
                    label='Search or select an industry'
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                />
                <Button primary disabled>
                    Next
                </Button>
            </Box>
        </Box>
    )
}