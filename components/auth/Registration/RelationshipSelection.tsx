'use client'

import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';

type OptionType = {
    label: string;
    value: string;
};

const options: OptionType[] = [
    { value: 'son', label: 'Son' },
    { value: 'daugther', label: 'Daugther' },
    { value: 'wife', label: 'Wife' },
    { value: 'brother', label: 'Brother' },
    { value: 'family friend', label: 'Family friend' },
    { value: 'guardian', label: 'Guardian' },
    { value: 'manager', label: 'Manager' },
    { value: 'others', label: 'Others' },
];

const Option: FC<any> = (props) => {
    return (
        <components.Option {...props}>
            <p className='py-[7px] text-center'>
                {props.data.label}
            </p>
        </components.Option>
    );
};

const Relationship: FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    return (
        <div>
            <div className='text-[12px] font-arial font-[400] text-distlineColor'>
                {'Relationship'}
            </div>
            <div>
                <Select
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'black',
                            boxShadow: 'none',
                            outline: state.menuIsOpen ? 'none' : 'none',
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingTop: 5,
                            paddingBottom: 5,
                            '&:hover': {
                                borderColor: 'black'
                            }
                        }),
                    }}
                    className='mt-2'
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    components={{ IndicatorSeparator: () => null, Option }}

                />
            </div>
        </div>
    );
}

Relationship.displayName = 'Relationship';

export default Relationship;