function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`;
    }

    return (
        <>
            {nome ? (<p>{gerarSaudacao(nome)}</p> ) : (
                <p>Coloque alguma informação</p>
            )}
        </>
    )
}

export default Saudacao
