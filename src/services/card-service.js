import axios from 'axios';

const API_URL = 'https://app-pabloferreira-api.azurewebsites.net/api/card';

export const fetchItems = async (searchTerm, pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${API_URL}/obtertodospaginados`, {
      params: {
        searchTerm,
        propertyName: 'name',
        pageNumber,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/remover/?id=${id}`);
  } catch (error) {
    console.error("Erro ao remover o item:", error);
    throw error;
  }
};

export const updateItem = async (data) => {
  try {
    await axios.put(`${API_URL}/atualizar`, data);
  } catch (error) {
    console.error("Erro ao atualizar o item:", error);
    throw error;
  }
};

export const registerItem = async (data) => {
  try {
    await axios.post(`${API_URL}/registrar`, data);
  } catch (error) {
    console.error("Erro ao registrar o item:", error);
    throw error;
  }
};
