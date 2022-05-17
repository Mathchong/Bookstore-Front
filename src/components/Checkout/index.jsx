import { Container, Form, Input } from "./style";
import { useState, useEffect, useContext } from "react";
import TokenContext from "../../contexts/TokenContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Checkout(){
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();
    const [ orderData, setOrderData ] = useState({nome: "", cpf: "", endereco: "",
                                        bairro: "", cidade: "", uf: "",
                                        cep: "", pagamento:"", pedido: {}});

    useEffect(() => !token && navigate("/"), [token, navigate]);

    useEffect(() => {
        if (token === "") return;

        const URL_SHOPPINGCART = `${process.env.REACT_APP_URL_API}/user/shoppingCart`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.get(URL_SHOPPINGCART, config);
        request.then(response => setOrderData({...orderData, pedido: response.data}));
        request.catch(error => console.log(error));
    },[token]);

    function sendOrder(e) {
        e.preventDefault();
        const URL_SENDORDER = `${process.env.REACT_APP_URL_API}/sendOder`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.post(URL_SENDORDER, orderData, config);
        request.then(() => {
            const modal = swal({title:"Compra finalizada com sucesso.",
                icon:"success",
                buttons: {true: "Uhuul" }
            });
            modal.then(() => navigate("/"));
        }); 
        request.catch(error => console.log(error));
    }

    return (
        <Container>
            <Form onSubmit={sendOrder}>
                <Input type="text" placeholder="Nome do destinatário" 
                value={orderData.nome} required
                onChange={e => setOrderData({...orderData, nome: e.target.value})}/>
                
                <Input type="text" placeholder="CPF" 
                value={orderData.cpf} required
                pattern="^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$"
                title="Formato de CPF. Ex.: 12345678900 ou 123.456.789-00"
                onChange={e => setOrderData({...orderData, cpf: e.target.value})}/>
                
                <Input type="text" placeholder="Endereço" 
                value={orderData.endereco} required
                onChange={e => setOrderData({...orderData, endereco: e.target.value})}/>
                
                <Input type="text" placeholder="Bairro" 
                value={orderData.bairro} required
                onChange={e => setOrderData({...orderData, bairro: e.target.value})}/>
                
                <Input type="text" placeholder="Cidade" 
                value={orderData.cidade} required
                onChange={e => setOrderData({...orderData, cidade: e.target.value})}/>
                
                <Input type="text" placeholder="UF" 
                value={orderData.uf} required
                onChange={e => setOrderData({...orderData, uf: e.target.value})}/>
                
                <Input type="text" placeholder="CEP" 
                value={orderData.cep} required
                pattern="^[0-9]{5}-[0-9]{3}$"
                title="Formato de CEP. Ex: 12345-67"
                onChange={e => setOrderData({...orderData, cep: e.target.value})}/>
                
                <h1>Escolha a sua forma de pagamento:</h1>

                <div onChange={e => setOrderData({...orderData, pagamento: e.target.id})}>
                    <input type="radio" id="pix" name="payment" required/>
                    <label htmlFor="pix" >Pix</label>

                    <input type="radio" id="boleto" name="payment" required/>
                    <label htmlFor="boleto" >Boleto</label>

                    <input type="radio" id="credito" name="payment" required/>
                    <label htmlFor="credito">Cartão de Crédito</label>
                </div>

                <button type="submit">Finalizar</button>
            </Form>
    
        </Container>
    );
}