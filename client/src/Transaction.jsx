import { useState } from 'react';

const Transaction = () => {
    return (
        <>
            <h1>Adicionar Transação</h1>
            <form>
                <label>Descrição:</label>
                <input type="text" name="description" required/>

                <label>Valor:</label> 
                <input type="number" name="amount" required step="0.01"/>

                <label>Tipo:</label>
                <select name="tipo">
                    <option value="input">Entrada</option>
                    <option value="exit">Saída</option>
                </select>

                <button type="submit">Salvar</button>
            </form>

            <a href="/Dashboard">Voltar</a>
         </>
    )
}

export default Transaction;