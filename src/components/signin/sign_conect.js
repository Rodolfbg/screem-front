import react from "react";
import style from '../signin/sign.module.css'
import {TextField,Box,styled,alpha} from '@material-ui/core';


export default function SignInBlock(props){
    const RedditTextField = styled((props) => (
        <TextField InputProps={{ disableUnderline: true }} {...props} />
      ))(({ theme }) => ({
        '& label.Mui-focused': {
            color: '#fafafa',
          },
          '& label': {
            color: '#fafafa !important',
            fontSize: '12px',
          },

        '& .MuiFilledInput-root': {
          overflow: 'hidden',
          borderRadius: 4,
          backgroundColor: '#333',
          color:"#8c8c8c",
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          
          '&.Mui-focused': {
            backgroundColor: '#454545',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            border:'none !important'
          },
        },
      }));
    return(
        <div id={style.SignInBlock}>
            {props.children}
            <div id={style.InputSign}>
              
                <RedditTextField id="filled-basic" label="E-mail ou número de telefone" variant="filled" />
            
            
            </div>
            <div id={style.InputInfo}></div>
        </div>
    )
};

