import react from "react";
import style from '../signin/sign.module.css'
import {TextField,Box,styled,alpha} from '@material-ui/core';


export default function SignInBlock(props){
    const RedditTextField = styled((props) => (
        <TextField InputProps={{ disableUnderline: true }} {...props} />
      ))(({ theme }) => ({
        '& label.Mui-focused': {
            color: '#8c8c8c',
          },
          '& label': {
            color: '#8c8c8c !important',
            fontSize: '16px',
            margin:'10px'
          },

        '& .MuiFilledInput-root': {
          overflow: 'hidden',
          borderRadius: 4,
          backgroundColor: '#333',
          color:"#8c8c8c",
          margin: '10px',
          
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
                <h1 id={style.text}>Entrar</h1>
              
                <RedditTextField id="filled-basic-one" label="Email ou número de telefone" variant="filled" />
                <RedditTextField id="filled-basic-two" label="Senha" variant="filled" />
            
            
            </div>
            <div id={style.InputInfo}></div>
        </div>
    )
};

