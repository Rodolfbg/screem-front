import react from "react";
import style from '../signin/sign.module.css'
import {TextField,Box,styled,alpha} from '@material-ui/core';


const fbimg = `https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png`


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
                <input type="button" id={style.buttonOn} value='Entrar'></input>
            </div>
            <div id={style.info}>
                <div id={style.box} >
                  <input id={style.checkbox} type="checkbox"></input>
                  <label id={style.textRemenber}>Lembre-se de mim</label>
                </div>
                <div id={style.help}>
                  <a id={style.textHelp}>Precisa de ajuda?</a>
                </div>
            
            </div>
            <div id={style.InputInfo}>
                <div id={style.fbconect}>
                  <img id={style.imgFace} src={fbimg}></img>
                  <label id={style.textConect}>Conectar com facebook</label>
                </div>
                <div id={style.buyassin}>
                  <label className={style.textBuy}>Novo por aqui?</label> 
                  <label className={style.textBuy}>Assine agora</label> 
                </div>
                <div id={style.protectpage}>
                  <label id={style.protect}>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</label>
                </div>
            </div>
        </div>
    )
};

