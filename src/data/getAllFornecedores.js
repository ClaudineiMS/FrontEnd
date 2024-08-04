const getAllFornecedores = async () => {
    try {
      const response = await fetch('https://back-end-nine-peach.vercel.app/fornecedores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
  
      // Converte a resposta para JSON e retorna
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar os fornecedores:', error);
      throw error;
    }
  };
  
  export default getAllFornecedores;