import { useMemo} from "react"
// import Slider from "@material-ui/core/Slider"
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types"
import "./rangeSlider.scss"

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#328bc3",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 30,
    width: 30,
    backgroundColor: "#fff",
    border: "1px solid #0a3c5d",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
    },
    "& .airbnb-bar": {
      height: 15,
      width: 1,
      backgroundColor: "#0a3c5d",
      marginLeft: 2,
      marginRight: 2
    }
  },
  "& .MuiSlider-track": {
    height: 8,
    backgroundColor:"#0a3c5d"
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 8,
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#0a3c5d",
    height: 12,
    width: 3,
    "&.MuiSlider-markActive": {
      opacity: 1,
      height: 6,
      backgroundColor: "#d8d8d8"
    }
  },
  "& .MuiSlider-markLabel": {
    marginTop:"2px",
    color: "#0a3c5d",
    fontFamily: "Exo",
    fontWeight: 600
  }
}));

const RangeSlider = ({startingYear, valueMarks,initialValues, handleValuesSlider}) => {
  const marksSlider= useMemo(()=>{
    const marks =[]
    let addYears = 0
    for(let valueMark = initialValues[0]; valueMark<=initialValues[1];valueMark=valueMark+12){
      const newMark = {
        value:valueMark,
        label:startingYear + addYears
      }
      marks.push(newMark)
      addYears++
    }
    return marks
  },[startingYear])

  const handleChangeValue = (event, newValue) => {
    handleValuesSlider(newValue)
  }

  function CustomSliderThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }

  return (
    <div className= "range-slider">
      <CustomSlider
        components={{ Thumb: CustomSliderThumbComponent }}
        value={valueMarks}
        onChange={handleChangeValue}
        aria-labelledby="range-slider"
        step={1}
        marks={marksSlider}
        min={initialValues[0]}
        max={initialValues[1]}
      />
      {/* <Slider
        value={valueMarks}
        onChange={handleChangeValue}
        aria-labelledby="range-slider"
        step={1}
        marks={marksSlider}
        min={initialValues[0]}
        max={initialValues[1]}
        sx={{
          color: "#328bc3",
          height: 3,
          padding: "13px 0",
          "& .MuiSlider-thumb": {
            height: 27,
            width: 27,
            backgroundColor: "#fff",
            border: "1px solid currentColor",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
            },
            "& .airbnb-bar": {
              height: 9,
              width: 1,
              backgroundColor: "#328bc3a0",
              marginLeft: 1,
              marginRight: 1
            }
          },
          "& .MuiSlider-track": {
            height: 4
          },
          "& .MuiSlider-rail": {
            color: "#d8d8d8",
            opacity: 1,
            height: 5
          },
          "& .MuiSlider-mark": {
            backgroundColor: "#328bc3",
            height: 8,
            width: 3,
            "&.MuiSlider-markActive": {
              opacity: 1,
              height: 6,
              backgroundColor: "#d8d8d8"
            }
          },
          "& .MuiSlider-markLabel": {
            color: "#0a3c5d",
            fontFamily: "Exo",
            fontWeight: 500
          }
        }}
      /> */}
    </div>
  )
}

RangeSlider.propTypes = {
  startingYear:PropTypes.number,
  arrayValues:PropTypes.array,
  finalYear:PropTypes.number, 
  handleValuesSlider:PropTypes.func
}

export default RangeSlider