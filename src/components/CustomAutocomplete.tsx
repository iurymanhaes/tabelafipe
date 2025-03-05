import { IOption } from "@/types/fipeTypes";
import { Autocomplete, TextField } from "@mui/material";

type SelectProps = {
  label: string;
  value: string;
  options: IOption[];
  onChange: (selected: IOption | null) => void;
};

const CustomAutocomplete = ({
  label,
  value,
  options,
  onChange,
  ...other
}: SelectProps) => {
  const selectedOption =
    options.find((option) => option.codigo === value) || null;

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.nome}
      value={selectedOption}
      onChange={(_, newValue) => onChange(newValue || { codigo: "", nome: "" })}
      isOptionEqualToValue={(option, value) => option.codigo === value.codigo}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      fullWidth
      {...other}
    />
  );
};

export default CustomAutocomplete;
