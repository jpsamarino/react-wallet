import Slider from "@material-ui/core/Slider"
import PropTypes from "prop-types"
import "./rangeSlider.scss"

const RangeSlider = ({startingYear, arrayValues, initialValues, handleValuesSlider}) => {
  const getMarks=(startingYear)=>{
    const marks =[]
    let addYears = 0
    for(let valueMark = initialValues[0]; valueMark<=initialValues[1];valueMark=valueMark+12){
      const newMark = {
        value:valueMark,
        label:Number(startingYear) + addYears
      }
      marks.push(newMark)
      addYears++
    }
    return marks
  }

  const marks = getMarks(startingYear)

  const handleChangeValue = (event, newValue) => {
    handleValuesSlider(newValue)
  }
  return (
    <div className= "range-slider">
      <Slider
        value={arrayValues}
        onChange={handleChangeValue}
        aria-labelledby="range-slider"
        step={1}
        marks={marks}
        min={initialValues[0]}
        max={initialValues[1]}
      />
    </div>
  )
}

RangeSlider.propTypes = {
  startingYear:PropTypes.string,
  arrayValues:PropTypes.array,
  initialValues:PropTypes.array, 
  handleValuesSlider:PropTypes.func
}

export default RangeSlider