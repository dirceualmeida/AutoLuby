import React, { useState, useEffect } from "react";
import api from '../../services/api';
import { useTable } from 'react-table';
import { StyledTable, TableHead, TableRow, TableHeader, TableBody, TableData, TableHeadContainer, TableFilterContainer, PaginationContainer, SearchContainer, PreviousPageButton, NextPageButton, PageNumberContainer, StatusRow } from "./styles";
import ArrowLeft from "../icons/arrow-left";
import ArrowRight from "../icons/arrow-right";
import SearchIcon from "../icons/search";
import { useAuth } from "../../hooks/auth-context";

interface TableProps{
  data: Array<object>;
  columns: any;
}

function Table({ columns, data }:TableProps) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifySelf: "center",
      alignSelf: "center"
      }}>
      <StyledTable {...getTableProps()}>
      <TableHead>
       <TableHeadContainer>
          <p>Listagem de veículos vendidos</p>
          <TableFilterContainer>
            <TableFilterContainer>
              <PaginationContainer>
                <PreviousPageButton>
                  <ArrowLeft width="18" height="18" style={{marginRight: 8}} />
                  Anterior
                </PreviousPageButton>
                  <PageNumberContainer> 
                    1 
                  </PageNumberContainer>
                <NextPageButton>
                  Próximo
                  <ArrowRight width="18" height="18" style={{marginLeft: 8}}/>
                </NextPageButton>
              </PaginationContainer>                                                 
              <SearchContainer>
                <input style={{width: '100%'}}/>
                <SearchIcon width="20" height="20" style={{position: 'relative', top: 10, bottom: 10, right: 10}} />
              </SearchContainer>
            </TableFilterContainer>
          </TableFilterContainer>
        </TableHeadContainer>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableHeader {...column.getHeaderProps()}>{column.render('Header')}</TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </StyledTable>
    </div>
  )
}

function App2() {
  const { user } = useAuth();



  const columns = React.useMemo(
    () => [
      {
        Header: "Marca",
        accessor: "brand"
      },
      {
        Header: "Modelo",
        accessor: "model",
      },
      {
        Header: "Ano",
        accessor: "yer"
      },
      {
        Header: "KM",
        accessor: "km",
      },
      {
        Header: "COR",
        accessor: "color"
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: (status: { value: string; }) => (<StatusRow className={(status.value === "Disponível") ? "available" : (status.value === "Vendido") ? "sold" : "reserved" }>
          {status.value}
        </StatusRow> )
      },
      {
        Header: "CHASSI",
        accessor: "chassi"
      },
      {
        Header: "VALOR",
        accessor: "value",
      },
    ],
    []
  )

  return (
      <Table columns={columns} data={user.vehicles} />
  )
}

export default App2