import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ModalCard from '../AddCard';
import ConfirmationModal from '../../components/Confirm';
import {  HomeWrapper,  ResultsGrid,  HomeDiv,  Title,  TitleAndButtonWrapper,  PaginationContainer,  PageIconsStyle, NoItemsMessage} from './styles';
import { fetchItems, deleteItem } from '../../services/card-service';
import ReactPaginate from 'react-paginate';
import { IconCaretRight, IconCaretLeft } from '@tabler/icons-react';
import Swal from 'sweetalert2';

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [cardToEdit, setCardToEdit] = useState(null);

  useEffect(() => {
    loadItems(currentPage);
  }, [searchTerm, currentPage]);

  const loadItems = async (page) => {
    try {
      const data = await fetchItems(searchTerm, page + 1, 8);
      setItems(data.items);
      setTotalPages(data.totalPages);
      setHasMore(data.currentPageCount === 8);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0);
    setItems([]);
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    setIsConfirmationModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await deleteItem(itemToDelete);
      Swal.fire({
        icon: 'success',
        title: 'Card removido com sucesso!',
        showConfirmButton: false,
        timer: 2000,
      });
      loadItems(currentPage);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao remover card!',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#DB2525',
      });
    } finally {
      closeConfirmationModal();
    }
  };

  const handleEdit = (item) => {
    setCardToEdit(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    loadItems(currentPage);
    resetModalForm(); 
  }
  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setItemToDelete(null);
  };

  const resetModalForm = () => {
    setCardToEdit(null);
};

  const handlePageClick = ({ selected }) => setCurrentPage(selected);

  return (
    <HomeWrapper>
      <Header onSearch={handleSearch} />
      <HomeDiv>
        <TitleAndButtonWrapper>
          <Title>Resultados de busca</Title>
          <Button type="default" onClick={() => setIsModalOpen(true)}>
            Novo Card
          </Button>
        </TitleAndButtonWrapper>

        <ResultsGrid hasItems={items.length > 0}>
          {items.length === 0 ? (
            <NoItemsMessage>Nenhum card encontrado</NoItemsMessage>
          ) : (
            items.map((item) => (
              <Card
                item={item}
                onEdit={() => handleEdit(item)}
                onDelete={() => handleDelete(item.id)}
              />
            ))
          )}
        </ResultsGrid>


        <PaginationContainer>
          <ReactPaginate
            previousLabel={<PageIconsStyle > <IconCaretLeft  /> </PageIconsStyle>}
            nextLabel={<PageIconsStyle > <IconCaretRight  /> </PageIconsStyle>}
            breakLabel="..."
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
            disabledClassName="disabled"
            pageLinkClassName="page-link"
          />
        </PaginationContainer>
      </HomeDiv>

      <ModalCard isOpen={isModalOpen} onClose={closeModal} cardToEdit={cardToEdit} />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        onConfirm={confirmDelete}
        resetForm={resetModalForm} 
      />
    </HomeWrapper>
  );
};

export default Home;
