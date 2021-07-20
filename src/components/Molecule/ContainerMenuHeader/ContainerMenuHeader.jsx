import React from 'react'
import PropTypes from 'prop-types'

import {ItemMenuHeader} from "../../Atom/ItemMenuHeader"
import './containerMenuHeader.scss'

const ContainerMenuHeader = ({arrayListMenu}) =>{
    const listNavigations = arrayListMenu.map(
        ({name,value,srcImg,extraClass}) =>{
            return (   
            <ItemMenuHeader  key={value}            
                extraClass= {extraClass} 
                srcImg={srcImg}
                name={name}
                value={value}>
            </ItemMenuHeader>)
    })

    return (
        <ul className="containerMenuHeader">
           {listNavigations}
        </ul>
    )
}

ContainerMenuHeader.propTypes={
    namesNavigations: PropTypes.array,
    select:PropTypes.string,
    handleSelectNavigations:PropTypes.func
}

export default ContainerMenuHeader

