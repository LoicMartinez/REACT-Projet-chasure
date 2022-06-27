import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import {AccountCircle} from "@mui/icons-material";
import {FormHelperText} from "@mui/material";
import FormControl from "@mui/material/FormControl";

function LoginForm({values, onLoginChanged}) {
    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Identifiant
            </InputLabel>
            <Input
                type="text"
                id="input-with-icon-adornment"
                error={values.login === ''}
                value={values.login}
                onChange={onLoginChanged('login')}
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
            />
            <FormHelperText error id="component-error-text">Champ vide</FormHelperText>
        </FormControl>
    );
}

export default LoginForm;