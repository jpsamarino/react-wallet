import React from 'react'
import PropTypes from 'prop-types'
import {numberToCurrenty} from "../../../utils/convertData"
import './cardsEarnings.scss'

const CardsEarnings = ({earnings}) => 
{
  let {totalJCP,totalDividends,porcentJCP,PorcentDividends} = earnings

  const porcentTotal = porcentJCP+PorcentDividends
  const totalEarnings = numberToCurrenty(totalJCP+totalDividends)
  totalJCP = numberToCurrenty(totalJCP)
  totalDividends = numberToCurrenty(totalDividends)
  

    return (
      <div className="cards-earning">
          <div className="cards-earning__result">
            <div className="cards-earning__item" >
              <div>
                <p className="cards-earning__value">{totalJCP}</p>
              </div>
              <p className="cards-earning__legend"> Juros Sobre Capital</p>
            </div>
          </div>

          <div className="cards-earning__total">
            <div className="cards-earning__item" >
              <div>
                <p  className="cards-earning__value cards-earning__value--main">{totalEarnings}</p>
                <p className="cards-earning__percent">({porcentTotal.toFixed(2)}% a.a)</p>
              </div>
              <p className="cards-earning__legend cards-earning__legend--main">Total Proventos</p>
            </div>
          </div>

          <div className="cards-earning__cost">
            <div className="cards-earning__item" >
                <div>
                  <p className="cards-earning__value">{totalDividends}</p>
                </div>
                <p className="cards-earning__legend"> Dividendos</p>
              </div>
            </div>
      </div>
  )
}

CardsEarnings.propTypes = {
  investment:PropTypes.object
}

export default CardsEarnings