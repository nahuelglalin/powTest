import React from 'react'
import ArticlesItem from '../articles-item/ArticlesItem'
import { useMediaQuery } from 'react-responsive';
import { Table } from '../table/Table';
import { cssClassName } from "../util/cssClassName";

import { connect } from 'react-redux';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';


export const Articles = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 861px)' })

    return (
        <div>
            {!isMobile && 
                <Table></Table>
            }

            <div className={cssClassName({"mx-3": isMobile})}>
            <ArticlesItem img={img1} productName={"Saco Cove Long"} productColor={"Rojo"} size={44} quantity={1} prices={7421} discount={1}></ArticlesItem>
            <ArticlesItem img={img2} productName={"Jean Hadid"} productColor={"Azul oscuro"} size={44} quantity={2} prices={7421}></ArticlesItem>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        articles: state.shop.products,
    }

}

