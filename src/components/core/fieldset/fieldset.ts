import { styled } from "styled-components";
import { BorderColor, MainColor } from "../variable/variable";

export const FieldsetStyle = styled.div`
        
        legend {
            padding: 10px;
            color: ${MainColor};
            font-weight: 600;
            font-size: 16px;
            text-transform: capitalize;
            width:11%;
            border-bottom:none;
        }
        fieldset.arh-fieldset {
            border: 2px solid #d9d9d9;
        }


        
`