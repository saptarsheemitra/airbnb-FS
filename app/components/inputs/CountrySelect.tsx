"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

export interface CountrySelectValue {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}
const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhare"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-600 ml-1">{option.region}</span>
            </div>
          </div>
        )}
 
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,  
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
