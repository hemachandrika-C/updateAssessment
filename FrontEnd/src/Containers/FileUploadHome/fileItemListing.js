import React ,{ useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";





function ListingFiles(props) {


    console.log(props.data)

        const products = props.data
      
        const columns = [
          { dataField: "userId", text: "userId", sort: true },
          { dataField: "id", text: "id", sort: true },
          { dataField: "title", text: "title", sort: true },
          { dataField: "body", text: "body", sort: true }
        ];

        const defaultSorted = [
            {
              dataField: "name",
              order: "desc"
            }
          ];
        
          const pagination = paginationFactory({
            page: 2,
            sizePerPage: 5,
            lastPageText: ">>",
            firstPageText: "<<",
            nextPageText: ">",
            prePageText: "<",
            showTotal: true,
            alwaysShowAllBtns: true,
            onPageChange: function (page, sizePerPage) {
              console.log("page", page);
              console.log("sizePerPage", sizePerPage);
            },
            onSizePerPageChange: function (page, sizePerPage) {
              console.log("page", page);
              console.log("sizePerPage", sizePerPage);
            }
          });

  return ( 
    <div className="Paginate showme">
      <div className="container">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
      />
      </div>

     
    </div>
  )
}

export default ListingFiles