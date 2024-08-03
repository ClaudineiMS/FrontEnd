export const handleSubmit = async (event, formRef, setData) => {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  // Obtém o valor do input
  const consumoInput = formRef.current.querySelector('#valor').value;

  // Função para verificar se um valor é um número
  const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

  // Tentar extrair o número do input
  const consumo = parseFloat(consumoInput.replace(/[^0-9.]/g, ''));

  if (isNumber(consumo)) {
    try {
      // Faz a requisição para a API com o valor numérico
      const response = await fetch(`https://django-backend-mocha.vercel.app/fornecedores/consumo/${consumo}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Converte a resposta em JSON
      const data = await response.json();

      setData(data);

    } catch (error) {
      console.error('Erro ao buscar os dados!:', error);
    }
  } else {
    console.error('O valor inserido não é um número válido:', consumoInput);
  }
};
