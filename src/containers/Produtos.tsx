import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { isLoading, data: produtos } = useGetProdutosQuery()

  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const estaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const favIds = favoritos.map((f) => f.id)

    return favIds.includes(produtoId)
  }

  if (isLoading) return <h3>Carregando produtos...</h3>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favorito={estaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
