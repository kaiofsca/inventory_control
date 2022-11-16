import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import Header from "../src/components/Header";
import Sidebar from '../src/components/Sidebar';

const Produtos = () => {
  const [name, setName] = useState("");
  const [listProducts, setListProducts] = useState([]);

  // Consultando, vendo se tem algum item no banco (se estiver com item ele vai fzr o "parse" pro JSON se não vai um array vazio)
  useEffect(() => {
    const db_products = localStorage.getItem("db_products")
    ? JSON.parse(localStorage.getItem("db_products"))
    : []

    setListProducts(db_products)
  },[])

  const handleNewProducts = () => {
    if (!name) return // pra ver se tem algum value no input 
    if (verifyProductName()) { // verificando se o produto ja existe
      alert("Produto ja cadastrado no sistema!")
      return
    }

    const id = Math.random().toString(36).substring(2)

    if (listProducts && listProducts.length) { // vendo se ja tem algo no banco e add mais um item
      localStorage.setItem(
        "db_products",
        JSON.stringify([...listProducts, { id, name }])
      )
      setListProducts([...listProducts, { id, name }])
    } else { // caso não tenha nenhum na lista ainda esse é o primeiro item
      localStorage.setItem("db_products", JSON.stringify([{ id, name }]))
      setListProducts([{ id, name }])
    }

    setName("")
  }

  const verifyProductName = () => { // se ja tem um produto com o nome que estou passando
    return !!listProducts.find((prod) => prod.name === name)
  }

  const removeProduct = (id) => {
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
    ? JSON.parse(localStorage.getItem("db_stock_outputs"))
    : []

    const db_stock_entries = localStorage.getItem("db_stock_entries")
    ? JSON.parse(localStorage.getItem("db_stock_entries"))
    : []

    const hasOutputs = db_stock_outputs.filter(
      (item) => item.products_id === id
    ).length

    const hasEntries = db_stock_entries.filter(
      (item) => item.products_id === id
    ).length

    if (hasEntries || hasOutputs) {
      alert("Esse produto possui movimentações")
    }
    }

  return (
    <Flex h="100vh" flexDirection="column">
      <Header />

      <Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />
      </Flex>
    </Flex>
  )
}

export default Produtos
