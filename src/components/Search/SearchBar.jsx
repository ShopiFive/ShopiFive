import {useState, useCallback, useMemo} from 'react';
import { Autocomplete, Icon } from '@shopify/polaris';
import { SearchMajor } from '@shopify/polaris-icons';
import { setTimeout } from 'timers/promises';

export default function SearchBar() {
    const deselectedOptions = useMemo(
        () => [
          {value: 'theme', label: 'Theme'},
          {value: 'brand', label: 'Brand'},
          {value: 'orders', label: 'Orders'},
          {value: 'products', label: 'Products'},
          {value: 'rates', label: 'Rates'},
        ],
        [],
    );
    
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);
    const [loading, setLoading] = useState(false);

    const updateText = useCallback((value) => {
        setInputValue(value)

        if(!loading) {
            setLoading(true)
        }

        setTimeout(() => {
            if (value === '') {
                setOptions(deselectedOptions)
                setLoading(false)
                return
            }
            const filterRegex = new RegExp(value, 'i')
            const resultOptions = deselectedOptions.filter((option) => 
                option.label.match(filterRegex)
            )
            setOptions(resultOptions)
            setLoading(false)
        }, 300)
    }, [deselectedOptions, loading])

    const updateSelection = useCallback((selected) => {
        const selectedText = selected.map((selectedItem) => {
            const matchedOption = options.find((option) => {
                return option.value.match(selectedItem)
            })
            return matchedOption && matchedOption.label
        })
        setSelectedOptions(selected)
        setInputValue(selectedText[0] || '')
    }, [options])

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label="Search"
            value={inputValue}
            prefix={<Icon source={SearchMajor} color="base" accessibilityLabel="search field" />}
            placeholder='Go to...'
            autoComplete='off'
        />
    )

    return (
        <div style={{height: '225px'}}>
            <Autocomplete
                options={options}
                selected={selectedOptions}
                onSelect={updateSelection}
                loading={loading}
                textField={textField}
            />
        </div>
    )
}