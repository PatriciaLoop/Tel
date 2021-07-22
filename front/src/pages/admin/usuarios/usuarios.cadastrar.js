import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import api from "../../../services/api";

import ImgPokem from '../../../assets/img/logopoke.png';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Usuario() {
  const classes = useStyles();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      
      const response = await api.post("/api/usuarios", {
        nome_usuario: nome,
        sobrenome_usuario: nome,
        email_usuario: email,
        senha_usuario: senha,
        tipo_usuario: tipo,
      });
   
      window.location.href = "/";
    } catch (err) {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Button style={{marginBottom:1,marginTop:10}} variant="contained" href={'/'}><ArrowBackIcon /> Voltar</Button>
      <div className={classes.paper}>
    
        <Grid>
                  < img src ={ImgPokem} />
                  
           </Grid>
        
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nome"
                name="nome"
                label="Nome"
                autocompleto="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                autocompleto="sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Email"
                name="email"
                label="Email"
                autocompleto="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                variant="outlined"
                required
                fullWidth
                id="senha"
                name="senha"
                label="Senha"
                autocompleto="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl
                helperText="Full width!"
                fullWidth
                variant="outlined"
                required
                className={classes.formControl}>
                  
                  <InputLabel id="labelTipo">Tipo</InputLabel>
                    <Select
                      labelId="labelTipo"
                      id="tipo"
                      value={tipo}
                      onChange={e => setTipo(e.target.value)}
                    >
                      <MenuItem value={1}>Médico</MenuItem>
                      <MenuItem value={2}>Paciente</MenuItem>

                    </Select>
                  </FormControl>
                  </Grid>
          </Grid>
          <Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleSubmit}
              className={classes.submit}
              style={{backgroundColor: "#1e185f"}}
            >
              Enviar
            </Button>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Ja Possui cadastro? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
