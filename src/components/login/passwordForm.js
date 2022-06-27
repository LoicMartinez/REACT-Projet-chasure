import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {FormHelperText} from "@mui/material";
import FormControl from "@mui/material/FormControl";

function PasswordForm({values, setValues, onPasswordChanged}) {
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Mot de passe</InputLabel>
            <Input
                id="component-error"
                error={values.password === ''}
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={onPasswordChanged('password')}
                aria-describedby="component-error-text"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText error id="component-error-text">Champ vide</FormHelperText>
        </FormControl>
    );
}

export default PasswordForm;