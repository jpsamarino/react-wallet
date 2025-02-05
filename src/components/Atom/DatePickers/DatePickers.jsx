import { useRef } from "react"
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PropTypes from "prop-types"
import { useEffect } from "react"
import { margin } from "@mui/system";



const DatePickers = ({labelName, dateValue, handleDateValue}) => {
  // const classes = useStyles()
  const refDate = useRef()

  const handleBlurValue = ()=>{
      handleDateValue(refDate.current.value)
  }

  useEffect(()=>{
    refDate.current.value=dateValue
    console.log(dateValue)
    },[dateValue])

  return (
    <div
          style={{
            display: "flex",
            backgroundColor: "#0a3c5d",
            alignItems: "center",
            borderRadius: "4px 0px 0px 4px",
            height: "34px",
            margin:"10px 20px 10px 20px"
          }}
        >
          <div
            style={{
              margin: "0px 15px 0px 15px",
              fontSize: "0.9rem",
              color: "white"
            }}
          >
            {labelName}:
          </div>
          <div
          style={{
            height: "100%",
            backgroundColor: "white"
          }}
          >
              <TextField
                  inputRef={refDate} 
                  onBlur={handleBlurValue}
                  id= {"date" + labelName}
                  // label={labelName}
                  type="date"
                  defaultValue={dateValue}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  sx={{
                    fontFamily: "exo",
                    height: "100%",
                    width:"9.5rem",
                    "& .MuiOutlinedInput-root": {
                      height: "100%",
                      fontFamily: "Exo",
                      fontSize:"0.9rem",
                      color:"#0a3c5d",
                      fontWeight:600,
                      padding: "0px 0px 0px 0rem",
                      borderRadius: "0px 4px 4px 0px",
                      backgroundColor:"white",
                      "& .MuiOutlinedInput-input":{
                        padding:"16.5px 14px 15px"
                      },
                      "& input": {
                        width:"100%",
                        "&::-webkit-calendar-picker-indicator": {
                          marginLeft:"0px",
                          marginRight:"0px"
                        }
                      }
                    }}}
              />
            </div>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // inputFormat="dd/mm/yyyy"
              value={dateValue}
              onBlur={handleDateValue}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    fontFamily: "roboto",
                    fontSize: "16px",
                    width: "150px",
                    backgroundColor: "white",
                    border: "none",
                    height: "100%",

                    "& .MuiOutlinedInput-root": {
                      padding: "0px 15px 0px 0px",
                      borderRadius: "0px 4px 4px 0px",
                      height: "100%"
                    }
                  }}
                />
              )}
            />
          </LocalizationProvider> */}
         
        </div>
  )
}

DatePickers.propTypes={
  labelName:PropTypes.string,
  dateValue:PropTypes.string,//.instanceOf(Date), 
  handleDateValue:PropTypes.func
}

export default DatePickers