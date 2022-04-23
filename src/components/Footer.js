import React from "react";
import {
    Link,
    Container,
    Box,
    Grid
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return <footer>
        <Box px={{xs:3, sm:10}} py={{xs:5, sm:10}}  bgcolor="text.secondary" color="white">
            <Container maxWidth='lg'>
                <Grid container spacing={5}>

                <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ajuda</Box>
                        <Box>
                            <Link href="/" color="inherited">Contato</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherited">Suporte</Link>
                        </Box> 
                        <Box>
                            <Link href="/" color="inherited">Políticas de Privacidade</Link>
                        </Box>                                               
                    </Grid> 

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Mídias Sociais</Box>
                        <Box>
                            <TwitterIcon />
                            <FacebookIcon />
                            <YouTubeIcon />
                            <InstagramIcon />                              
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Conta</Box>
                        <Box>
                            <Link href="/" color="inherited">Logar</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherited">Registrar</Link>
                        </Box> 
                        <Box>
                            <Link href="/" color="inherited">E-mail</Link>
                        </Box>                                               
                    </Grid>                      
                </Grid>
            </Container>
        </Box>
    </footer>
}

export default Footer;